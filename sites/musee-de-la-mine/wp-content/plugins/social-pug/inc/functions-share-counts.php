<?php

	/**
	 * Pulls the share counts for all active networks for a certain post
	 *
	 * @param int $post_id
	 *
	 * @return array
	 *
	 */
	function dpsp_pull_post_share_counts( $post_id = 0 ) {

		if( $post_id === 0 )
			return $share_counts;

		// Get active social networks
		$social_networks = dpsp_get_active_networks();

		// Get saved shares
		$networks_shares = get_post_meta( $post_id, 'dpsp_networks_shares', true );

		if( empty( $networks_shares ) )
			$networks_shares = array();

		// Pass through each active social networks and grab the share counts for the post
		foreach( $social_networks as $network_slug ) {

			if( !in_array( $network_slug, dpsp_get_networks_with_social_count() ) )
				continue;

			$share_count = dpsp_get_post_network_share_count( $post_id, $network_slug );

			// Set new network shares
			if( $share_count !== false ) {

				// If share counts exist for this network, check to see if the new shares
				// are greater than the existing ones. If so, replace the counts
				if( isset( $networks_shares[$network_slug] ) )
					$networks_shares[$network_slug] = ( $share_count > (int)$networks_shares[$network_slug] ? $share_count : (int)$networks_shares[$network_slug] ) ;

				// If the share counts don't exist for the network, add them
				else
					$networks_shares[$network_slug] = $share_count;

			}

		} // End of social_networks loop


		// Remove social counts for networks that are not required
		if( !empty( $networks_shares ) ) {
			foreach( $networks_shares as $network_slug => $share_count ) {
				if( !in_array( $network_slug, $social_networks ) )
					unset( $networks_shares[ $network_slug ] );
			}
		}

		// Return
		return $networks_shares;

	}


	/**
	 * Ajax callback to pull the shares for a post from all active networks
	 *
	 */
	function dpsp_ajax_pull_post_share_counts() {

		if( empty( $_POST['action'] ) || $_POST['action'] != 'dpsp_ajax_pull_post_share_counts' )
			return;

		if( empty( $_POST['post_id'] ) )
			return;

		$post_id = (int)$_POST['post_id'];

		if( $post_id === 0 )
			return;

		// Check last updated timestamp and update the shares only
		// if at least 3 hours have passed
		$shares_last_updated = get_post_meta( $post_id, 'dpsp_networks_shares_last_updated', true );

		if( $shares_last_updated >= time() - 3 * HOUR_IN_SECONDS )
			return;

		// Get social shares from the networks
		$share_counts   = dpsp_pull_post_share_counts( $post_id );

		// Update share counts in the db
		$shares_updated = dpsp_update_post_share_counts( $post_id, $share_counts );

		wp_die();

	}
	add_action( 'wp_ajax_dpsp_ajax_pull_post_share_counts', 'dpsp_ajax_pull_post_share_counts' );
	add_action( 'wp_ajax_nopriv_dpsp_ajax_pull_post_share_counts', 'dpsp_ajax_pull_post_share_counts' );


	/**
	 * Returns the share count for a post and a social network from the 
	 * social network through an API
	 *
	 * @param int post_id 			- id of the post
	 * @param string $network_slug	- slug of the social network
	 *
	 * @return mixed 				- bool false if something went wrong, and int if everything went well
	 *
	 */
	function dpsp_get_post_network_share_count( $post_id, $network_slug ) {

		if( !isset( $post_id ) && !isset( $network_slug ) )
			return false;


		// Get page url for the post
		$page_url = get_permalink( $post_id );
		$page_url = urlencode( $page_url );

		// Default post arguments
		$args = array( 'timeout' => 30 );

		// Prepare urls to get remote request
		switch( $network_slug ) {

			case 'facebook':
				$url = 'https://graph.facebook.com/?id=' . $page_url;
				break;

			case 'twitter':
				$url = 'http://public.newsharecounts.com/count.json?url=' . $page_url ;
				break;

			case 'google-plus':

				$args = array(
					'timeout' => 30,
					'headers' => 'Content-type: application/json\r\n',
					'body' => json_encode(
						array(
							'method' => 'pos.plusones.get', 
							'id' => 'p', 
							'params' => array(
								'nolog' => true,
								'id' => urldecode( $page_url ),
								'source' => 'widget',
								'userId' => '@viewer',
								'groupId' => '@self'
							), 
							'jsonrpc' => '2.0', 
							'key' => 'p', 
							'apiVersion' => 'v1'
						)
					)
				);

				$url = 'https://clients6.google.com/rpc/?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ';
				break;

			case 'pinterest':
				$url = 'http://widgets.pinterest.com/v1/urls/count.json?source=6&url=' . $page_url;
				break;

		}

		// Get response from the api call
		if( $network_slug == 'google-plus' )
			$response = wp_remote_post( $url, $args );
		else
			$response = wp_remote_get( $url, $args );


		// Continue only if response code is 200
		if( wp_remote_retrieve_response_code( $response ) == 200 ) {

			$body = json_decode( wp_remote_retrieve_body( $response ), true );

			// Get share value from response body
			switch( $network_slug ) {

				case 'facebook':
					$share_count = isset( $body['share']['share_count'] ) ? $body['share']['share_count'] : false;
					break;

				case 'google-plus':
					$share_count = isset( $body['result']['metadata']['globalCounts']['count'] ) ? (int)$body['result']['metadata']['globalCounts']['count'] : false;
					break;

				case 'pinterest':
					$body 	= wp_remote_retrieve_body( $response );
					$start  = strpos( $body, '(' );
					$end    = strpos( $body, ')', $start + 1 );
					$length = $end - $start;
					$body 	= json_decode( substr( $body, $start + 1, $length - 1 ), true );

					$share_count = ( isset( $body['count'] ) ? $body['count'] : false );

					break;

				default:
					$share_count = ( isset( $body['count'] ) ? $body['count'] : false );
					break;

			}

			return ( $share_count ? (int)$share_count : $share_count );

		} else {

			return false;

		}

		return false;

	}


	/**
	 * Returns an array with the saved shares from the database
	 *
	 * @param $post_id
	 *
	 * @return array
	 *
	 */
	function dpsp_get_post_share_counts( $post_id = 0 ) {

		$network_shares = get_post_meta( $post_id, 'dpsp_networks_shares', true );

		if( empty( $network_shares ) )
			$network_shares = array();

		/**
		 * Filter the post's network shares before returning them
		 *
		 * @param array $network_shares
		 * @param int $post_id
		 *
		 */
		$network_shares = apply_filters( 'dpsp_get_post_share_counts', $network_shares, $post_id );

		return $network_shares;

	}


	/**
	 * Returns the share count saved for a post given the post_id and the
	 * network we wish to retreive the value for
	 *
	 * @param int post_id 			- id of the post
	 * @param string $network_slug	- slug of the social network
	 *
	 * @return mixed 				- bool false if something went wrong, and int if everything went well
	 *
	 */
	function dpsp_get_post_share_count( $post_id, $network_slug ) {

		if( !isset( $post_id ) && !isset( $network_slug ) )
			return false;


		$shares = dpsp_get_post_share_counts( $post_id );

		if( isset( $shares[$network_slug] ) && in_array( $network_slug, dpsp_get_networks_with_social_count() ) )
			return $shares[$network_slug];
		else
			return false;

	}


	/**
	 * Updates the given share counts for a post into the database
	 *
	 * @param int   $post_id 			- the id of the post to save the shares
	 * @param array $shares  			- an array with the network shares and total shares
	 *
	 * @return bool
	 *
	 */
	function dpsp_update_post_share_counts( $post_id = 0, $share_counts = array() ) {

		if( empty( $post_id ) || empty( $share_counts ) )
			return false;

		// Update post meta with all shares
		update_post_meta( $post_id, 'dpsp_networks_shares', $share_counts );

		// Update post meta with total share counts
		update_post_meta( $post_id, 'dpsp_networks_shares_total', array_sum( $share_counts ) );
		
		// Update post meta with last updated timestamp
		update_post_meta( $post_id, 'dpsp_networks_shares_last_updated', time() );


		/**
		 * Do extra actions after updating the post's share counts
		 *
		 * @param int   $post_id - the id of the post to save the shares
	 	 * @param array $shares  - an array with the network shares and total shares
		 *
		 */
		do_action( 'dpsp_update_post_share_counts', $post_id, $share_counts );

		return true;

	}


	/**
	 * Updates the top shared posts array
	 *
	 * @param int   $post_id - the id of the post to save the shares
	 * @param array $shares  - an array with the network shares and total shares
	 *
	 * @return bool
	 *
	 */
	function dpsp_update_top_shared_posts( $post_id = 0, $share_counts = array() ) {

		if( empty( $post_id ) || empty( $share_counts ) )
			return false;

		// Get the post's post type
		$post_type = get_post_type( $post_id );

		// Get current saved top shared posts
		$top_posts = get_option( 'dpsp_top_shared_posts', array() );

		// Decode the top posts into an array
		if( ! empty( $top_posts ) && ! is_array($top_posts) )
			$top_posts = json_decode( $top_posts, ARRAY_A );

		
		$top_posts[$post_type][$post_id] = array_sum( $share_counts );


		/** 
		 * Filter top shared posts before saving in the db
		 *
		 * @param array $top_posts
		 *
		 */
		$top_posts = apply_filters( 'dpsp_top_shared_posts_raw', $top_posts );


		// Filter top posts array
		if( ! empty( $top_posts ) ) {
			foreach( $top_posts as $post_type => $post_list ) {
				if( ! empty( $top_posts[$post_type] ) ) {

					// Sort descending
					arsort( $top_posts[$post_type] );

					// Get only first ten
					$top_posts[$post_type] = array_slice( $top_posts[$post_type], 0, 10, true );

				}
			}
		}

		// Update top posts
		update_option( 'dpsp_top_shared_posts', json_encode( $top_posts ) );

		return true;

	}
	add_action( 'dpsp_update_post_share_counts', 'dpsp_update_top_shared_posts', 10, 2 );


	/**
	 * Return total share count calculated for the social networks passed, if no social network is passed
	 * the total share value will be calculated for all active networks
	 *
	 * @param array $networks 	- the networks for which we want to return the total count
	 * @param string $location  - the location of the share buttons
	 *
	 * @return int
	 *
	 */
	function dpsp_get_post_total_share_count( $post_id = 0, $networks = array(), $location = '' ) {

		if( $post_id == 0 ) {
			global $post;
			$post_id = $post->ID;
		}

		if( empty($networks) )
			$networks = dpsp_get_active_networks();


		// Get saved total share counts
		$total_shares = get_post_meta( $post_id, 'dpsp_networks_shares_total', true );

		// If the total shares are not set in the post meta, calculate them
		// based on the shares for each platform
		if( empty( $total_shares ) ) {

			$total_shares = 0;

			// Get network shares for this post
			$networks_shares = get_post_meta( $post_id, 'dpsp_networks_shares', true );
			$networks_shares = ( !empty( $networks_shares ) ? $networks_shares : array() );

			// Pass through each network and increment the total shares counter
			foreach( $networks as $network_slug )
				$total_shares += ( isset($networks_shares[$network_slug]) && in_array( $network_slug, dpsp_get_networks_with_social_count() ) ? $networks_shares[$network_slug] : 0 );

		}

		/**
		 * Filter total shares before returning them
		 *
		 * @param int $total_shares
		 * @param string $location
		 *
		 */
		$total_shares = apply_filters( 'dpsp_get_post_total_share_count', (int)$total_shares, $location );

		return $total_shares;

	}


	/**
	 * Rounds the share counts
	 *
	 * @param int $share_count
	 * @param string $location
	 *
	 * @return int
	 *
	 */
	function dpsp_round_share_counts( $share_count, $location = '' ) {

		if( empty( $location ) )
			return $share_count;

		if( empty( $share_count ) )
			return $share_count;


		$location_settings = get_option( 'dpsp_location_' . $location, array() );

		if( !isset( $location_settings['display']['count_round'] ) )
			return $share_count;

		if( is_array( $share_count ) ) {

			foreach( $share_count as $key => $count ) {
				if( $count / 1000 >= 1 )
					$share_count[$key] = round( $count / 1000, 1 ) . 'k';
			}


		} else {

			if( $share_count / 1000 >= 1 )
				$share_count = round( $share_count / 1000, 1 ) . 'k';

		}

		return $share_count;

	}
	add_filter( 'dpsp_get_output_post_shares_counts', 'dpsp_round_share_counts', 10, 2 );
	add_filter( 'dpsp_get_output_total_share_count', 'dpsp_round_share_counts', 10, 2 );