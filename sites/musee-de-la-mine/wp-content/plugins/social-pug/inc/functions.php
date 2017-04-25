<?php


	/**
	 * Returns all the tools available with all their data
	 *
	 */
	function dpsp_get_tools( $type = 'all', $only_slugs = false ) {

		$tools = array();

		// Social share floating sidebar
		$tools['share_sidebar'] = array(
			'name' 		 		 => __( 'Floating Sidebar', 'social-pug' ),
			'type'				 => 'share_tool',
			'activation_setting' => 'dpsp_location_sidebar[active]',
			'img'		 		 => 'assets/img/tool-sidebar.png',
			'admin_page' 		 => 'admin.php?page=dpsp-sidebar'
		);

		// Social share before and after the content
		$tools['share_content'] = array(
			'name' 		 		 => __( 'Inline Content', 'social-pug' ),
			'type'				 => 'share_tool',
			'activation_setting' => 'dpsp_location_content[active]',
			'img'		 		 => 'assets/img/tool-content.png',
			'admin_page' 		 => 'admin.php?page=dpsp-content'
		);

		// Return only the tools of a certain type
		if( $type != 'all' ) {
			foreach( $tools as $tool_slug => $tool ) {
				if( $tool['type'] != $type )
					unset( $tools[$tool_slug] );
			}
		}

		// Return only the slugs
		if( $only_slugs )
			$tools = array_keys( $tools );

		return apply_filters( 'dpsp_get_tools', $tools );

	}


	/**
	 * Checks to see if the tool settings is active or not
	 *
	 */
	function dpsp_is_tool_active( $tool_slug ) {

		$tools = dpsp_get_tools();

		if( empty( $tools[$tool_slug]['activation_setting'] ) )
			return false;

		$setting = $tools[$tool_slug]['activation_setting'];

		$option_name = explode( '[', $setting );
		$option_name = $option_name[0];

		$settings 	 = get_option( $option_name );

		if( isset( $settings[ str_replace( array( $option_name, '[', ']' ) , '', $setting ) ] ) )
			return true;
		else
			return false;

	}


	/**
	 * Returns an array with the positions where the social networks
	 * can be placed
	 *
	 * @return array
	 *
	 */
	function dpsp_get_network_locations( $only_slugs = true ) {

		$locations = array( 
			'sidebar' => __( 'Floating Sidebar', 'social-pug' ),
			'content' => __( 'Content', 'social-pug' )
		);

		$locations = apply_filters( 'dpsp_get_network_locations', $locations );

		if( $only_slugs )
			$locations = array_keys( $locations );

		return $locations;

	}


	/**
	 * Returns the name of a location
	 *
	 * @param string $location_slug
	 *
	 * @return string
	 *
	 */
	function dpsp_get_network_location_name( $location_slug ) {

		$locations = dpsp_get_network_locations( false );

		if( isset( $locations[$location_slug] ) )
			return $locations[$location_slug];
		else
			return '';

	}


	/**
	 * Checks to see if the location is active or not
	 *
	 */
	function dpsp_is_location_active( $location_slug ) {

		$settings = dpsp_get_location_settings( $location_slug );

		if( isset( $settings['active'] ) )
			return true;
		else
			return false;

	}


	/**
	 * Determines whether the location should be displayed or not
	 *
	 * @param string $location_slug
	 *
	 * @return bool
	 *
	 */
	function dpsp_is_location_displayable( $location_slug ) {

		$return = true;

		// Get saved settings for the location
		$settings = dpsp_get_location_settings( $location_slug );

		if( empty( $settings ) )
			$return = false;

		if( !isset( $settings['active'] ) )
			$return = false;

		return apply_filters( 'dpsp_is_location_displayable', $return, $location_slug, $settings );

	}


	/**
	 * Get settings for a particular location
	 * This is a developer friendly function
	 *
	 * @param string $location
	 *
	 * @return mixed null | array
	 *
	 */
	function dpsp_get_location_settings( $location = '' ) {

		// Return null if no location is provided
		if( empty( $location ) )
			return null;

		$location_settings = get_option( 'dpsp_location_' . $location, array() );

		return apply_filters( 'dpsp_get_location_settings', $location_settings, $location );

	}


	/**
	 * Function that returns all networks
	 *
	 * @return array
	 * 
	 */
	function dpsp_get_networks() {

		$nerworks = array(
			'facebook'		=> 'Facebook',
			'twitter'		=> 'Twitter',
			'google-plus'	=> 'Google+',
			'pinterest'		=> 'Pinterest'
		);

		return apply_filters( 'dpsp_get_networks', $nerworks );

	}


	/**
	 * Not all social networks support social count.
	 * This function returns an array of network slugs
	 * for the networks that do support it
	 *
	 * @return array
	 *
	 */
	function dpsp_get_networks_with_social_count() {

		$networks = array(
			'facebook',
			'google-plus',
			'pinterest'
		);

		// Twitter share counts are handled through New Share Counts ( http://www.newsharecounts.com/ )
		$settings = get_option( 'dpsp_settings' );

		if( isset( $settings['twitter_share_counts'] ) )
			array_push( $networks, 'twitter' );

		return apply_filters( 'dpsp_get_networks_with_social_count', $networks );

	}


	/**
	 * Function that returns the name of a social network given its slug
	 *
	 */
	function dpsp_get_network_name( $slug ) {

		$nerworks = dpsp_get_networks();

		if( isset( $nerworks[$slug] ) )
			return $nerworks[$slug];
		else
			return '';
	}


	/**
	 * Returns all networks that are set in every location panel
	 *
	 * @return array;
	 *
	 */
	function dpsp_get_active_networks() {

		$locations = dpsp_get_network_locations();
		$networks  = array();

		foreach( $locations as $location ) {

			$location_settings = get_option( 'dpsp_location_' . $location, array() );

			if( isset( $location_settings['networks'] ) && !empty( $location_settings['networks'] ) ) {
				foreach( $location_settings['networks'] as $network_slug => $network ) {

					if( !in_array( $network_slug, $networks ) )
						$networks[] = $network_slug;

				}
			}

		}

		return $networks;

	}


	/**
	 * Return an array of registered post types slugs and names
	 * 
	 * @return array
	 *
	 */
	function dpsp_get_post_types() {

		// Get default and custom post types
		$default_post_types = array( 'post', 'page' );
		$custom_post_types 	= get_post_types( array( 'public' => true, '_builtin' => false ) );
		$post_types 		= array_merge( $default_post_types, $custom_post_types );

		// The array we wish to return
		$return_post_types = array();

		foreach( $post_types as $post_type ) {
			$post_type_object = get_post_type_object( $post_type );

			$return_post_types[$post_type] = $post_type_object->labels->singular_name;
		}

		return apply_filters( 'dpsp_get_post_types', $return_post_types );

	}


	/**
	 * Returns the post types that are active for all locations
	 *
	 */
	function dpsp_get_active_post_types() {

		$locations  = dpsp_get_network_locations();
		$post_types = array();

		foreach( $locations as $location ) {

			$location_settings = get_option( 'dpsp_location_' . $location, array() );

			if( isset( $location_settings['active'] ) && !empty( $location_settings['post_type_display'] ) )
				$post_types = array_merge( $post_types, $location_settings['post_type_display'] );

		}

		$post_types = array_unique( $post_types );

		return $post_types;

	}


	/**
	 * Returns the saved option, but replaces the saved social network
	 * data with simple data to display in the back-end
	 *
	 * @param string $option_name
	 *
	 */
	function dpsp_get_back_end_display_option( $option_name ) {

		$settings = get_option($option_name);
		$networks = dpsp_get_networks();

		$settings_networks_count = count($settings['networks']);

		if( $settings_networks_count > 2 ) {

			$current_network = 0;
			foreach( $settings['networks'] as $network_slug => $network ) {

				if( $current_network > 2 ) {
					unset( $settings['networks'][$network_slug] );
				} else {
					$settings['networks'][$network_slug] = array( 'label' => $networks[$network_slug] );
				}

				$current_network++;
			}

		} else {
			$settings['networks'] = array(
				'facebook'    => array( 'label' => 'Facebook' ),
				'twitter'	  => array( 'label' => 'Twitter' ),
				'google-plus' => array( 'label' => 'Google+')
			);
		}


		//Unset certain options
		unset( $settings['display']['show_count'] );

		return $settings;

	}


	/**
	 * Returns the share link for a social network given the network slug
   	 *
   	 * @param string $network_slug
   	 * @param string $post_url
   	 * @param string $post_title
	 *
	 * return string
	 *
	 */
	function dpsp_get_network_share_link( $network_slug, $post_url = null, $post_title = null ) {

		if( !isset( $network_slug ) )
			return '';

		if( is_null( $post_url ) )
			$post_url   = urlencode( esc_url( dpsp_get_post_url() ) );

		if( is_null( $post_title ) )
			$post_title = urlencode( dpsp_get_post_title() );
		

		switch( $network_slug ) {
			
			case 'facebook':
				return sprintf( 'https://www.facebook.com/sharer/sharer.php?u=%1$s&t=%2$s', $post_url, $post_title );
				break;

			case 'twitter':
				return sprintf( 'https://twitter.com/intent/tweet?text=%2$s&url=%1$s', $post_url, $post_title );
				break;

			case 'google-plus':
				return sprintf( 'https://plus.google.com/share?url=%1$s', $post_url );
				break;

			case 'pinterest':
				return '#';
				break;

			default:
				return '';
				break;
		}

	}


	/*
	 * Function that adds the initial options and settings
	 *
	 */
	function dpsp_default_settings() {

		/*
		 * Add default settings for each share buttons location
		 */
		$locations = dpsp_get_network_locations();

		foreach( $locations as $location ) {

			$location_settings = get_option( 'dpsp_location_' . $location, array() );

			if( !empty( $location_settings ) )
				continue;

			// General settings for all locations
			$location_settings = array(
				'networks' 			=> array(),
				'button_style'		=> 1,
				'display' 			=> array( 'shape'	=> 'rectangular' ),
				'post_type_display' => array( 'post' )
			);

			// Individual settings per location
			switch( $location ) {

				case 'sidebar':
					$location_settings['display']['position'] = 'left';
					break;

				case 'content':
					$location_settings['display']['position'] 	  = 'top';
					$location_settings['display']['column_count'] = 'auto';
					$location_settings['display']['show_labels']  = 'yes';
					break;

			}

			// Update option with values
			update_option( 'dpsp_location_' . $location, $location_settings );

		}

	}


	/*
	 * Returns the url of the current post
	 *
	 * @return string
	 *
	 */
	function dpsp_get_post_url() {

		global $post;

		$post_url = get_permalink( $post );

		return apply_filters( 'dpsp_get_post_url', $post_url, $post->ID );

	}


	/*
	 * Returns the title of the current post
	 *
	 * @return string
	 *
	 */
	function dpsp_get_post_title() {

		global $post;

		$post_title = $post->post_title;

		return apply_filters( 'dpsp_get_post_title', $post_title, $post->ID );

	}


	/*
	 * Returns the a description for the current post
	 *
	 * @return string
	 *
	 */
	function dpsp_get_post_description() {

		global $post;

		if( !empty( $post->post_excerpt ) )

			$post_description = $post->post_excerpt;

		elseif( !empty( $post->post_content ) ) {

			$post_description = strip_shortcodes( $post->post_content );
			$post_description = wp_trim_words( $post_description, apply_filters( 'dpsp_post_description_length', 15 ), '' );

		} else 
			$post_description = '';


		return apply_filters( 'dpsp_get_post_description', $post_description, $post->ID );

	}


	/*
	 * Returns the featured image src for the current post
	 *
	 * @return string
	 *
	 */
	function dpsp_get_post_image_url() {

		global $post;

		$post_thumbnail_id 	 = get_post_thumbnail_id( $post->ID );

		$post_thumbnail_data = wp_get_attachment_image_src( $post_thumbnail_id, 'large' );

		return apply_filters( 'dpsp_get_post_image_url', $post_thumbnail_data[0], $post->ID );

	}
