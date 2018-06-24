<?php dpsp_admin_header(); ?>

<div class="dpsp-page-wrapper dpsp-page-toolkit wrap">

	<?php wp_nonce_field( 'dpsptkn', 'dpsptkn' ); ?>

	<!-- Share Tools -->
	<h1 class="dpsp-page-title"><?php echo __( 'Social Share Tools', 'social-pug' ); ?></h1>

	<div class="dpsp-row dpsp-m-padding">
	<?php 
		$tools = dpsp_get_tools('share_tool'); 

		foreach( $tools as $tool_slug => $tool )
			dpsp_output_tool_box( $tool_slug, $tool );
	?>
	</div><!-- End of Share Tools -->

</div>

<?php do_action( 'dpsp_submenu_page_bottom' ); ?>