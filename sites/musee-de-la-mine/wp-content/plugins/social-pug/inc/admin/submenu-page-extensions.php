<?php 
	/*
	 * Function that creates the sub-menu item and page for the extra tools page
	 *
	 * @return void
	 *
	 */
	function dpsp_register_extensions_subpage() {
		add_submenu_page( 'dpsp-social-pug', __('Extensions', 'social-pug'), '<span style="color: orange;">' . __('Extensions', 'social-pug') . '</span>', 'manage_options', 'dpsp-extensions', 'dpsp_extensions_subpage' );
	}
	add_action( 'admin_menu', 'dpsp_register_extensions_subpage' );


	/*
	 * Function that adds content to the extensions subpage
	 *
	 * @return string
	 *
	 */
	function dpsp_extensions_subpage() {

		include_once 'views/view-submenu-page-extensions.php';

	}