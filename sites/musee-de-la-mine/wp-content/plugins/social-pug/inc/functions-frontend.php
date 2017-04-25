<?php


	/*
	 * Function that displays the floating sidebar sharing buttons
	 *
	 */
	function dpsp_output_front_end_floating_sidebar() {

		if( !dpsp_is_location_displayable( 'sidebar' ) )
			return;

		// Get saved settings
		$settings = get_option( 'dpsp_location_sidebar', array() );

		if( !isset( $settings['post_type_display'] ) || ( isset( $settings['post_type_display'] ) && !is_singular( $settings['post_type_display'] ) ) )
			return;
		

		// Classes for the wrapper
		$wrapper_classes = array();
		$wrapper_classes[] = ( isset( $settings['display']['spacing'] ) ? 'dpsp-bottom-spacing' : '' );
		$wrapper_classes[] = ( isset( $settings['display']['position'] ) ? 'dpsp-position-' . $settings['display']['position'] : '' );
		$wrapper_classes[] = ( isset( $settings['display']['shape'] ) ? 'dpsp-shape-' . $settings['display']['shape'] : '' );
		$wrapper_classes[] = ( isset( $settings['display']['show_count'] ) ? 'dpsp-has-buttons-count' : '' );
		$wrapper_classes[] = ( isset( $settings['display']['show_mobile'] ) ? 'dpsp-show-on-mobile' : 'dpsp-hide-on-mobile' );

		// Button styles
		$wrapper_classes[] = ( isset( $settings['button_style'] ) ? 'dpsp-button-style-' . $settings['button_style'] : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 1 ? 'dpsp-has-button-background' : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 2 ? 'dpsp-button-hover' : '' );

		$wrapper_classes = implode(' ', $wrapper_classes);

		$output = '<div id="dpsp-floating-sidebar" class="' . $wrapper_classes . '">';

			// Total share count before buttons
			if( isset( $settings['display']['show_count_total'] ) && ( !isset( $settings['display']['total_count_position'] ) || $settings['display']['total_count_position'] == 'before' ) )
				$output .= dpsp_get_output_total_share_count( 'sidebar' );

			// Gets the social networks buttons
			if( isset( $settings['networks'] ) )
				$output .= dpsp_get_output_network_buttons( $settings, 'sidebar' );

			// Total share count after buttons
			if( isset( $settings['display']['show_count_total'] ) && $settings['display']['total_count_position'] == 'after' )
				$output .= dpsp_get_output_total_share_count( 'sidebar' );


		$output .= '</div>';

		// Echo the final output
		echo apply_filters( 'dpsp_output_front_end_floating_sidebar', $output );

	}
	add_action( 'wp_footer', 'dpsp_output_front_end_floating_sidebar' );



	/*
	 * Function that displays the sharing buttons in the post content
	 *
	 */
	function dpsp_output_front_end_content( $content ) {

		if( !dpsp_is_location_displayable( 'content' ) )
			return $content;

		// Get saved settings
		$settings = dpsp_get_location_settings( 'content' );

		// Get the post object
		global $post;

		if( !$post )
			return;

		if( !isset( $settings['post_type_display'] ) || ( isset( $settings['post_type_display'] ) && !is_singular( $settings['post_type_display'] ) ) )
			return $content;
		

		// Set output
		$output = '';

		// Classes for the wrapper
		$wrapper_classes = array( 'dpsp-content-wrapper' );
		$wrapper_classes[] = ( isset( $settings['display']['shape'] ) ? 'dpsp-shape-' . $settings['display']['shape'] : '' );
		$wrapper_classes[] = ( isset( $settings['display']['column_count'] ) ? 'dpsp-column-' . $settings['display']['column_count'] : '' );
		$wrapper_classes[] = ( isset( $settings['display']['spacing'] ) ? 'dpsp-has-spacing' : '' );
		$wrapper_classes[] = ( isset( $settings['display']['show_labels'] ) || isset( $settings['display']['show_count'] ) ? '' : 'dpsp-no-labels' );
		$wrapper_classes[] = ( isset( $settings['display']['show_count'] ) ? 'dpsp-has-buttons-count' : '' );
		$wrapper_classes[] = ( isset( $settings['display']['show_mobile'] ) ? 'dpsp-show-on-mobile' : 'dpsp-hide-on-mobile' );

		// Button styles
		$wrapper_classes[] = ( isset( $settings['button_style'] ) ? 'dpsp-button-style-' . $settings['button_style'] : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 1 ? 'dpsp-has-icon-background dpsp-has-button-background' : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 2 ? 'dpsp-has-icon-background dpsp-has-icon-dark dpsp-has-button-background' : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 3 ? 'dpsp-has-icon-background dpsp-button-hover' : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 4 ? 'dpsp-has-button-background dpsp-icon-hover' : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 5 ? 'dpsp-button-hover' : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 6 ? 'dpsp-has-icon-background' : '' );
		$wrapper_classes[] = ( isset( $settings['button_style'] ) && $settings['button_style'] == 7 ? 'dpsp-icon-hover' : '' );

		$wrapper_classes = implode( ' ', array_filter( $wrapper_classes ) );

		if( !empty( $settings['display']['message'] ) )
			$output .= '<p class="dpsp-share-text">' . esc_attr( $settings['display']['message'] ) . '</p>';

		// Total share count before buttons
		if( isset( $settings['display']['show_count_total'] ) && ( !isset( $settings['display']['total_count_position'] ) || $settings['display']['total_count_position'] == 'before' ) )
			$output .= dpsp_get_output_total_share_count( 'content' );

		// Gets the social network buttons
		if( isset( $settings['networks'] ) ) 
			$output .= dpsp_get_output_network_buttons( $settings, 'content' );

		// Total share count before buttons
		if( isset( $settings['display']['show_count_total'] ) && $settings['display']['total_count_position'] == 'after' )
			$output .= dpsp_get_output_total_share_count( 'content' );

		
		$output = apply_filters( 'dpsp_output_front_end_content', $output );

		// Wrap output for top and bottom cases
		$output_top 	= '<div id="dpsp-content-top" class="' . $wrapper_classes . '">' . $output . '</div>';
		$output_bottom 	= '<div id="dpsp-content-bottom" class="' . $wrapper_classes . '">' . $output . '</div>';

		// Concatenate output and content
		if( $settings['display']['position'] == 'top' ) {
			$content = $output_top . $content;
		} elseif( $settings['display']['position'] == 'bottom' ) {
			$content = $content . $output_bottom;
		} else {
			$content = $output_top . $content . $output_bottom;
		}

		return $content;

	}
	add_filter( 'the_content', 'dpsp_output_front_end_content' );
	add_filter( 'woocommerce_short_description', 'dpsp_output_front_end_content' );


	/*
	 * Returns the social network buttons
	 * 
	 * @param array $settings 	- the current section settings for the social networks
	 * @param string $location 	- the location where the social networks will be displayed
	 *
	 */
	function dpsp_get_output_network_buttons( $settings, $location = '' ) {

		// Return if no networks are found
		if( empty($settings['networks']) )
			return '';

		global $post;

		$output = '<ul class="dpsp-networks-btns-wrapper ' . ( !empty($location) ? 'dpsp-networks-btns-' . $location : '' ) . '">';

		// Set current network and networks count		
		$current_network = 1;
		$networks_count  = count( $settings['networks'] );

		// Get networks share count for this post
		if( $post )
			$networks_shares = apply_filters( 'dpsp_get_output_post_shares_counts', dpsp_get_post_share_counts( $post->ID ), $location );

		$networks_shares = ( !empty( $networks_shares ) ? $networks_shares : array() );

		// Loop throught each network and create the button
		foreach( $settings['networks'] as $network_slug => $network ) {
		
			$output .= '<li>';

				// Get share count for current network
				$network_shares = ( isset( $networks_shares[$network_slug] ) ? $networks_shares[$network_slug] : 0 );
				$network_shares = apply_filters( 'dpsp_get_output_post_network_share_count', $network_shares, $location );

				// Check to see if the share counts should be displayed
				$show_share_counts = ( in_array( $network_slug, dpsp_get_networks_with_social_count() ) && isset( $settings['display']['show_count'] ) ? true : false );

				// Set button classes
				$button_classes   = array('dpsp-network-btn');
				$button_classes[] = ( isset($network_slug) ? 'dpsp-' . $network_slug : '' );
				$button_classes[] = ( ( empty( $network['label'] ) || !isset( $settings['display']['show_labels'] ) ) && !isset( $settings['display']['show_count'] ) ? 'dpsp-no-label' : '' );
				$button_classes[] = ( $show_share_counts ? 'dpsp-has-count' : '' );
				$button_classes[] = ( $current_network == 1 ? 'dpsp-first' : '' );
				$button_classes[] = ( $current_network == $networks_count ? 'dpsp-last' : '' );
				// Filter the button classes
				$button_classes	  = apply_filters( 'dpsp_button_classes', $button_classes, $location, $network_shares );
				$button_classes   = array_filter($button_classes);


				// Get the share link for the admin / front-end
				if( !is_admin() ) {

					// Get post url and title
					$post_url   = urlencode( esc_url( dpsp_get_post_url() ) );
					$post_title = urlencode( dpsp_get_post_title() );

					$network_share_link = dpsp_get_network_share_link( $network_slug, $post_url, $post_title );

				} else
					$network_share_link = dpsp_get_network_share_link( $network_slug, '#', '' );


				// Output the network button
				$output .= '<a rel="nofollow" href="' . $network_share_link . '" class="' . implode( ' ', $button_classes ) . '">';

					// Social network label and count wrapper
					$output .= '<span class="dpsp-network-label-wrapper">';

						// Labels output
						if( ( isset( $settings['display']['show_labels'] ) || is_admin() ) && $location != 'sidebar' )
							$output .= '<span class="dpsp-network-label">' . $network['label'] . '</span>';

						// Social count
						if( $show_share_counts )
							$output .= '<span class="dpsp-network-count">' . $network_shares . '</span>';

					$output .= '</span>';

				$output .= '</a>';
			$output .= '</li>';

			// Increment network count
			$current_network++;
		}

		$output .= '</ul>';

		return $output;

	}


	/*
	 * Returns the HTML for the total share counts of the networks passed
	 * If no networks are passed, the total count for all active networks will be outputed
	 *
	 * @param string $location  - the location of the share buttons
	 * @param array $networks 	- list with all networks we wish to output total for
	 *
	 * @return int
	 *
	 */
	function dpsp_get_output_total_share_count( $location = '', $networks = array() ) {

		global $post;

		if( !$post )
			return;

		$total_shares = dpsp_get_post_total_share_count( $post->ID, $networks, $location );

		if( is_null($total_shares) )
			return '';

		// HTML output
		$output = '<div class="dpsp-total-share-wrapper">';
			$output .= '<span class="dpsp-total-share-count">' . apply_filters( 'dpsp_get_output_total_share_count', $total_shares, $location ) . '</span>';
			$output .= '<span>' . apply_filters( 'dpsp_total_share_count_text', __( 'shares', 'social-pug' ) ) . '</span>';
		$output .= '</div>';

		return $output;
	}


	/*
	 * Outputs custom inline CSS needed for certain functionality
	 *
	 */
	function dpsp_output_inline_style() {

		// Styling default
		$output = '';

		// Actually outputting the styling
		echo '<style type="text/css" data-source="Social Pug">' . apply_filters( 'dpsp_output_inline_style', $output ) . '</style>';

	}
	add_action( 'wp_head', 'dpsp_output_inline_style' );


	/*
	 * Output the meta tags needed by the social networks
	 *
	 */
	function dpsp_output_meta_tags() {

		global $post;

		$settings = get_option('dpsp_settings');

		if( !empty( $settings['disable_meta_tags'] ) )
			return;

		if( !$post )
			return;

		if( !is_singular() )
			return;

		// Twitter specific
		echo '<meta name="twitter:card" 		content="summary" />';

		// Meta tags for Open Graph
		echo '<meta property="og:url"			content="' . esc_attr( dpsp_get_post_url() ) . '" />';
		echo '<meta property="og:type"			content="article" />';
		echo '<meta property="og:title"			content="' . esc_attr( dpsp_get_post_title() ) . '" />';
		echo '<meta property="og:description" 	content="' . esc_attr( dpsp_get_post_description() ) . '" />';
		echo '<meta property="og:image" 		content="' . esc_attr( dpsp_get_post_image_url() ) . '" />';

		do_action( 'dpsp_output_meta_tags' );

	}
	add_action( 'wp_head', 'dpsp_output_meta_tags' );


	/**
	 * Outputs the script needed to pull the share counts for the current post
	 *
	 */
	function dpsp_output_ajax_pull_post_share_counts() {

		// Output the script only on single posts
		if( ! is_singular() )
			return;

		global $post;

		// Check last updated timestamp and output the script only
		// if at least 3 hours have passed
		$shares_last_updated = get_post_meta( $post->ID, 'dpsp_networks_shares_last_updated', true );

		if( $shares_last_updated >= time() - 3 * HOUR_IN_SECONDS )
			return;

		
		$contents = "
			var dpsp_ajax_url = '" . admin_url( 'admin-ajax.php' ) . "';

			var dpsp_ajax_pull_post_share_counts_data = {
				action  : 'dpsp_ajax_pull_post_share_counts',
				post_id : '" . $post->ID . "'
			}
		";
		
		wp_add_inline_script( 'dpsp-frontend-js', $contents, 'before' );

	}
	add_action( 'wp_enqueue_scripts', 'dpsp_output_ajax_pull_post_share_counts' );





