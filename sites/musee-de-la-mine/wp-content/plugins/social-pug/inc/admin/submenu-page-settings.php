<?php 
	/*
	 * Function that creates the sub-menu item and page for the settings page
	 *
	 *
	 * @return void
	 *
	 */
	function dpsp_register_settings_subpage() {
		add_submenu_page( 'dpsp-social-pug', __('Settings', 'social-pug'), __('Settings', 'social-pug'), 'manage_options', 'dpsp-settings', 'dpsp_settings_subpage' );
	}
	add_action( 'admin_menu', 'dpsp_register_settings_subpage' );


	/*
	 * Function that adds content to the settings subpage
	 *
	 * @return string
	 *
	 */
	function dpsp_settings_subpage() {

		include_once 'views/view-submenu-page-settings.php';

	}


	function dpsp_settings_register_settings() {

		register_setting( 'dpsp_settings', 'dpsp_settings', 'dpsp_settings_sanitize' );

	}
	add_action( 'admin_init', 'dpsp_settings_register_settings' );


	/*
	 * Filter and sanitize settings
	 *
	 * @param array $new_settings
	 *
	 */
	function dpsp_settings_sanitize( $new_settings ) {

		return $new_settings;

	}