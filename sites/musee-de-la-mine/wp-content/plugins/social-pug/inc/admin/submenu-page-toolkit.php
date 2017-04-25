<?php 
	/*
	 * Function that creates the sub-menu item and page for the tools page
	 *
	 *
	 * @return void
	 *
	 */
	function dpsp_register_toolkit_subpage() {
		add_submenu_page( 'dpsp-social-pug', __('Toolkit', 'social-pug'), __('Toolkit', 'social-pug'), 'manage_options', 'dpsp-toolkit', 'dpsp_toolkit_subpage' );
	}
	add_action( 'admin_menu', 'dpsp_register_toolkit_subpage' );


	/*
	 * Function that adds content to the toolkit subpage
	 *
	 * @return string
	 *
	 */
	function dpsp_toolkit_subpage() {

		include_once 'views/view-submenu-page-toolkit.php';

	}