<?php


	/*
	 * Add custom schedules to use for the cron jobs
	 *
	 */
	function dpsp_cron_schedules( $schedules ) {

		$schedules['dpsp_2x_hourly'] = array(
			'interval' => (3600 * 2),
			'display'  => __( 'Once every two hours', 'social-pug' )
		);

		return $schedules;

	}
	add_filter( 'cron_schedules', 'dpsp_cron_schedules' );

	
	/*
	 * Set cron jobs
	 *
	 * @return void
	 *
	 */
	function dpsp_set_cron_jobs() {

		wp_schedule_event( time(), 'dpsp_2x_hourly', 'dpsp_cron_get_posts_networks_share_count');

	}


	/*
	 * Stop cron jobs
	 *
	 * @return void
	 *
	 */
	function dpsp_stop_cron_jobs() {

		wp_clear_scheduled_hook( 'dpsp_cron_get_posts_networks_share_count' );

	}


	/*
	 * Retreives the share counts for each post, for each network and saves
	 * them in the post meta
	 *
	 * @return void
	 *
	 */
	function dpsp_cron_get_posts_networks_share_count() {

		$settings = get_option( 'dpsp_settings', array() );

		/*
		 * Start with getting all post types saved in every 
		 * settings page. We only wish to get share counts for the
		 * posts that have these certain post types.
		 *
		 * Also get all active social networks from each of the
		 * settings page
		 *
		 */
		$locations  	 = dpsp_get_network_locations();
		$social_networks = dpsp_get_active_networks();
		$post_types 	 = array();

		foreach( $locations as $location ) {
			
			$location_settings = get_option( 'dpsp_location_' . $location );

			/*
			 * Get post types of settings page
			 *
			 */
			if( isset( $location_settings['post_type_display'] ) )
				$post_types = array_merge( $post_types, $location_settings['post_type_display'] );
			
		}


		/*
		 * Filter post types
		 *
		 */
		$post_types = array_unique( $post_types );
		$registered_post_types = get_post_types();

		foreach( $post_types as $key => $post_type ) {
			if( !in_array($post_type, $registered_post_types) )
				unset( $post_types[$key] );
		}


		/*
		 * Get all posts for each post type saved in every
		 * settings page and get network share counts
		 *
		 */
		$args = array( 'post_type' => $post_types, 'numberposts' => 200 );

		if( ! empty( $settings['facebook_app_access_token'] ) )
			$args['numberposts'] = 500;
		
		
		// Get posts
		$posts = get_posts( $args );


		// Exit execution for following statements
		if( empty( $posts ) )
			return;

		if( empty( $social_networks ) )
			return;


		// Continue if we reach this point
		foreach( $posts as $post_object ) {

			// Get social shares from the networks
			$share_counts 	= dpsp_pull_post_share_counts( $post_object->ID );

			// Update share counts in the db
			$shares_updated = dpsp_update_post_share_counts( $post_object->ID, $share_counts );


		} // End of posts loop
		
	}
	add_action( 'dpsp_cron_get_posts_networks_share_count', 'dpsp_cron_get_posts_networks_share_count' );