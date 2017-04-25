<?php
/**
 * Plugin Name: Social Pug
 * Plugin URI: http://www.devpups.com/social-pug/
 * Description: Add beautiful social sharing buttons to your posts, pages and custom post types.
 * Version: 1.3.1
 * Author: DevPups, Mihai Iova
 * Author URI: http://www.devpups.com/
 * License: GPL2
 *
 * == Copyright ==
 * Copyright 2016 DevPups (www.devpups.com)
 *	
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */


Class Social_Pug {


	/*
	 * The Constructor
	 *
	 */
	public function __construct() {

		// Defining constants
		define('DPSP_VERSION', '1.3.1');
		define('DPSP_PLUGIN_DIR', WP_PLUGIN_DIR . '/' . dirname( plugin_basename(__FILE__) ) );
		define('DPSP_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );
		define('DPSP_TRANSLATION_DIR', DPSP_PLUGIN_DIR . '/translations' );
		define('DPSP_TRANSLATION_TEXTDOMAIN', 'social-pug' );

		// Hooks
		add_action( 'init', array( $this, 'init_translation' ) );
		add_action( 'admin_menu', array( $this, 'add_main_menu_page' ), 10 );
		add_action( 'admin_menu', array( $this, 'remove_main_menu_page' ), 11 );
		add_action( 'admin_enqueue_scripts', array( $this, 'init_admin_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'init_front_end_scripts' ) );
		add_action( 'admin_init', array( $this, 'update_database' ) );

		add_filter( 'admin_footer_text', array( $this, 'admin_footer_text' ) );
		add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), array( $this, 'add_plugin_action_links' ) );

		$this->load_resources_front_end();
		
		add_action( 'init', array( $this, 'load_resources_admin' ) );

	}


	/*
	 * Loads the translations files if they exist
	 *
	 */
	public function init_translation() {

		load_plugin_textdomain( 'social-pug', false, DPSP_TRANSLATION_DIR );

	}


	/*
	 * Add the main menu page
	 *
	 */
	public function add_main_menu_page() {

		add_menu_page( __('Social Pug', 'social-pug'), __('Social Pug', 'social-pug'), 'manage_options', 'dpsp-social-pug', '','dashicons-share' );

	}


	/*
	 * Remove the main menu page as we will rely only on submenu pages
	 *
	 */
	public function remove_main_menu_page() {

		remove_submenu_page( 'dpsp-social-pug', 'dpsp-social-pug' );

	}


	/*
	 * Enqueue scripts and styles for the admin dashboard
	 *
	 */
	public function init_admin_scripts( $hook ) {

		if( strpos( $hook, 'dpsp' ) !== false ) {
			wp_register_script( 'select2-js', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/js/select2.min.js', array( 'jquery' ) );
			wp_enqueue_script( 'select2-js' );

			wp_register_style( 'select2-css', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/css/select2.min.css' );
			wp_enqueue_style( 'select2-css' );

			wp_register_script( 'dpsp-touch-punch-js' , plugin_dir_url( __FILE__ ) . 'assets/js/jquery.ui.touch-punch.min.js', array('jquery-ui-sortable', 'jquery' ) );
			wp_enqueue_script( 'dpsp-touch-punch-js' );
		}

		wp_register_style( 'dpsp-dashboard-style', plugin_dir_url( __FILE__ ) . 'assets/css/style-dashboard.css', array(), DPSP_VERSION );
		wp_enqueue_style( 'dpsp-dashboard-style' );

		wp_register_script( 'dpsp-dashboard-js' , plugin_dir_url( __FILE__ ) . 'assets/js/dashboard.js', array('jquery-ui-sortable', 'jquery' ), DPSP_VERSION );
		wp_enqueue_script( 'dpsp-dashboard-js' );

		wp_register_style( 'dpsp-frontend-style', plugin_dir_url( __FILE__ ) . 'assets/css/style-frontend.css', array(), DPSP_VERSION );
		wp_enqueue_style( 'dpsp-frontend-style' );

	}


	/*
	 * Enqueue scripts for the front-end
	 *
	 */
	public function init_front_end_scripts() {

		wp_register_style( 'dpsp-frontend-style', plugin_dir_url( __FILE__ ) . 'assets/css/style-frontend.css' );
		wp_enqueue_style( 'dpsp-frontend-style' );

		wp_register_script( 'dpsp-frontend-js', plugin_dir_url( __FILE__ ) . 'assets/js/front-end.js', array('jquery') );
		wp_enqueue_script( 'dpsp-frontend-js' );

	}


	/*
	 * Fallback for setting defaults when updating the plugin,
	 * as register_activation_hook does not fire for automatic updates
	 *
	 */
	public function update_database() {

		$dpsp_db_version = get_option( 'dpsp_version', '' );

		if( $dpsp_db_version != DPSP_VERSION ) {

			// Update default settings
			dpsp_default_settings();
			update_option( 'dpsp_version', DPSP_VERSION );

			// Add first time activation
			if( get_option( 'dpsp_first_activation', '' ) == '' )
				update_option( 'dpsp_first_activation', time() );
			else
				update_option( 'dpsp_welcome_screen_got_it', 1 );

		}

	}


	/*
	 * Replace admin footer text with a rate plugin message
	 *
	 */
	public function admin_footer_text( $text ) {

		if( isset( $_GET['page'] ) && strpos( $_GET['page'], 'dpsp' ) !== false ) {
			return sprintf( __( 'If you enjoy using <strong>Social Pug</strong>, please <a href="%s" target="_blank">leave us a ★★★★★ rating</a>. Big thank you for this!', 'social-pug' ), 'https://wordpress.org/support/view/plugin-reviews/social-pug?rate=5#postform' );
		}

		return $text;

	}


	/*
	 * Add extra action links in the plugins page
	 *
	 */
	public function add_plugin_action_links( $links ) {

		$links[] = '<a href="' . esc_url( get_admin_url( null, 'admin.php?page=dpsp-toolkit' ) ) . '">' . __( 'Settings', 'social-pug' ) . '</a>';

		return $links;

	}


	/*
	 * Include plugin files for the front-end
	 *
	 */
	public function load_resources_front_end() {

		// Functions
		if( file_exists( DPSP_PLUGIN_DIR . '/inc/functions.php' ) )
			include_once( DPSP_PLUGIN_DIR . '/inc/functions.php' );

		// Share counts functions
		if( file_exists( DPSP_PLUGIN_DIR . '/inc/functions-share-counts.php' ) )
			include_once( DPSP_PLUGIN_DIR . '/inc/functions-share-counts.php' );

		// Cron jobs
		if( file_exists( DPSP_PLUGIN_DIR . '/inc/functions-cron.php' ) )
			include_once( DPSP_PLUGIN_DIR . '/inc/functions-cron.php' );

		// Frontend rendering
		if( file_exists( DPSP_PLUGIN_DIR . '/inc/functions-frontend.php' ) )
			include_once( DPSP_PLUGIN_DIR . '/inc/functions-frontend.php' );

	}


	/*
	 * Include plugin files for the admin area
	 *
	 */
	public function load_resources_admin() {

		// Admin functions and pages
		if( file_exists( DPSP_PLUGIN_DIR . '/inc/functions-admin.php' ) )
			include_once( DPSP_PLUGIN_DIR . '/inc/functions-admin.php' );

		if( file_exists( DPSP_PLUGIN_DIR . '/inc/admin/submenu-page-toolkit.php' ) )
			include_once( DPSP_PLUGIN_DIR . '/inc/admin/submenu-page-toolkit.php' );

		// Network locations admin pages
		$network_locations = dpsp_get_network_locations();

		foreach( $network_locations as $location_slug ) {
			if( dpsp_is_location_active( $location_slug ) ) {
				if( file_exists( DPSP_PLUGIN_DIR . '/inc/admin/submenu-page-' . str_replace( '_','-', $location_slug ) . '.php' ) )
					include_once( DPSP_PLUGIN_DIR . '/inc/admin/submenu-page-' . str_replace( '_','-', $location_slug ) . '.php' );
			}
		}

		if( file_exists( DPSP_PLUGIN_DIR . '/inc/admin/submenu-page-settings.php' ) )
			include_once( DPSP_PLUGIN_DIR . '/inc/admin/submenu-page-settings.php' );

		if( file_exists( DPSP_PLUGIN_DIR . '/inc/admin/submenu-page-extensions.php' ) )
			include_once( DPSP_PLUGIN_DIR . '/inc/admin/submenu-page-extensions.php' );

	}

}

// Let's get the party started
new Social_Pug;



/*
 * Activation hooks
 *
 */
register_activation_hook( __FILE__, 'dpsp_default_settings' );
register_activation_hook( __FILE__, 'dpsp_set_cron_jobs' );


/*
 * Deactivation hooks
 *
 */
register_deactivation_hook( __FILE__, 'dpsp_stop_cron_jobs' );