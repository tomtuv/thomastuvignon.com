<?php 

	/*
	 * Function that creates the sub-menu item and page for the floating sidebar location of the share buttons
	 *
	 * @return void
	 *
	 */
	function dpsp_register_floating_sidebar_subpage() {
		add_submenu_page( 'dpsp-social-pug', __('Floating Sidebar', 'social-pug'), __('Floating Sidebar', 'social-pug'), 'manage_options', 'dpsp-sidebar', 'dpsp_sidebar_subpage' );
	}
	add_action( 'admin_menu', 'dpsp_register_floating_sidebar_subpage' );


	/*
	 * Function that adds content to the floating sidebar subpage
	 *
	 * @return string
	 *
	 */
	function dpsp_sidebar_subpage() {

		include_once 'views/view-submenu-page-sidebar.php';

	}


	function dpsp_sidebar_register_settings() {

		register_setting( 'dpsp_location_sidebar', 'dpsp_location_sidebar', 'dpsp_sidebar_settings_sanitize' );
		
	}
	add_action( 'admin_init', 'dpsp_sidebar_register_settings' );


	/*
	 * Filter and sanitize settings
	 *
	 * @param array $new_settings
	 *
	 */
	function dpsp_sidebar_settings_sanitize( $new_settings ) {

		// Save default values even if values do not exist
		if( !isset( $new_settings['networks'] ) )
			$new_settings['networks'] = array();
		
		if( !isset( $new_settings['button_style'] ) )
			$new_settings['button_style'] = 1;

		$new_settings = dpsp_array_strip_script_tags( $new_settings );

		return $new_settings;

	}