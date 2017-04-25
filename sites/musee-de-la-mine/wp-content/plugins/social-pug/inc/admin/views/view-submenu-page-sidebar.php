<?php dpsp_admin_header(); ?>

<form method="post" action="options.php">
	<div class="dpsp-page-wrapper dpsp-page-sidebar wrap">
		
		<?php
		 	$dpsp_location_sidebar = get_option( 'dpsp_location_sidebar', 'not_set' );
			settings_fields( 'dpsp_location_sidebar' );
		?>


		<!-- Page Title -->
		<h1 class="dpsp-page-title">
			<?php _e('Configure Sidebar Sharing Buttons', 'social-pug'); ?>

			<input type="hidden" name="dpsp_buttons_location" value="dpsp_location_sidebar" />
			<input type="hidden" name="dpsp_location_sidebar[active]" value="<?php echo ( isset( $dpsp_location_sidebar["active"] ) ? 1 : '' ); ?>" <?php echo ( !isset( $dpsp_location_sidebar["active"] ) ? 'disabled' : '' ); ?> />
		</h1>


		<!-- Networks Selectable and Sortable Panels -->
		<div id="dpsp-social-platforms-wrapper" class="dpsp-section">
			<h3 class="dpsp-section-title"><?php _e( 'Social Networks', 'social-pug' ); ?><a id="dpsp-select-networks" class="add-new-h2" href="#">Select networks</a></h3>

			<?php echo dpsp_output_selectable_networks( $dpsp_location_sidebar['networks'] ); ?>

			<div id="dpsp-sortable-networks-empty" <?php echo ( empty( $dpsp_location_sidebar['networks'] ) ? 'class="active" style="display: block;"' : 'style="display: none;"' ); ?>>
				<p><?php _e( 'Select which social networks to display', 'social-pug' ); ?></p>
			</div>

			<?php echo dpsp_output_sortable_networks( $dpsp_location_sidebar['networks'], 'dpsp_location_sidebar' ); ?>

		</div>


		<!-- General Display Settings -->
		<div class="dpsp-section">
			<h3 class="dpsp-section-title"><?php _e( 'Display Settings', 'social-pug' ); ?></h3>

			<?php dpsp_settings_field( 'radio', 'dpsp_location_sidebar[display][shape]', $dpsp_location_sidebar['display']['shape'], __( 'Button shape', 'social-pug' ), array( 'rectangular' => __( 'Rectangular', 'social-pug' ), 'rounded' => __( 'Rounded', 'social-pug' ), 'circle' => __( 'Circle', 'social-pug' ) ) ); ?>

			<?php dpsp_settings_field( 'radio', 'dpsp_location_sidebar[display][position]', $dpsp_location_sidebar['display']['position'], __( 'Buttons position', 'social-pug' ), array( 'left' => __( 'Left', 'social-pug' ), 'right' => __( 'Right', 'social-pug' ) ) ); ?>

			<?php dpsp_settings_field( 'checkbox', 'dpsp_location_sidebar[display][spacing]', ( isset( $dpsp_location_sidebar['display']['spacing']) ? $dpsp_location_sidebar['display']['spacing'] : '' ), __( 'Button spacing', 'social-pug' ), array('yes'), __( 'Adds bottom spacing for each button.', 'social-pug' ) ); ?>

			<?php dpsp_settings_field( 'checkbox', 'dpsp_location_sidebar[display][show_mobile]', ( isset( $dpsp_location_sidebar['display']['show_mobile']) ? $dpsp_location_sidebar['display']['show_mobile'] : '' ), __( 'Show on mobile', 'social-pug' ), array('yes') ); ?>

		</div>

		<!-- Share Counts -->
		<div class="dpsp-section">
			<h3 class="dpsp-section-title"><?php _e( 'Buttons Share Counts', 'social-pug' ); ?></h3>

			<?php dpsp_settings_field( 'checkbox', 'dpsp_location_sidebar[display][show_count]', ( isset( $dpsp_location_sidebar['display']['show_count']) ? $dpsp_location_sidebar['display']['show_count'] : '' ), __( 'Show share count', 'social-pug' ), array('yes'), __( 'Display the share count for each social network.', 'social-pug' ) ); ?>

			<?php dpsp_settings_field( 'checkbox', 'dpsp_location_sidebar[display][show_count_total]', ( isset( $dpsp_location_sidebar['display']['show_count_total']) ? $dpsp_location_sidebar['display']['show_count_total'] : '' ), __( 'Show total share count', 'social-pug' ), array('yes'), __( 'Display the share count for all social networks.', 'social-pug' ) ); ?>

			<?php dpsp_settings_field( 'select', 'dpsp_location_sidebar[display][total_count_position]', ( isset( $dpsp_location_sidebar['display']['total_count_position'] ) ? $dpsp_location_sidebar['display']['total_count_position'] : '' ), __( 'Total count position', 'social-pug' ), array( 'before' => __( 'Before Buttons', 'social-pug' ), 'after' => __( 'After Buttons', 'social-pug' ) ) ); ?>

			<?php dpsp_settings_field( 'checkbox', 'dpsp_location_sidebar[display][count_round]', ( isset( $dpsp_location_sidebar['display']['count_round']) ? $dpsp_location_sidebar['display']['count_round'] : '' ), __( 'Share count round', 'social-pug' ), array('yes'), __( 'If the share count for each network is bigger than 1000 it will be rounded to one decimal ( eg. 1267 will show as 1.2k ). Applies to Total Share Counts as well.', 'social-pug' ) ); ?>

		</div>

		<!-- Post Type Display Settings -->
		<div class="dpsp-section">
			<h3 class="dpsp-section-title"><?php _e( 'Post Type Display Settings', 'social-pug' ); ?></h3>

			<?php dpsp_settings_field( 'checkbox', 'dpsp_location_sidebar[post_type_display][]', ( isset( $dpsp_location_sidebar['post_type_display']) ? $dpsp_location_sidebar['post_type_display'] : array() ), '', dpsp_get_post_types() ); ?>
		</div>


		<!-- Save Changes Button -->
		<input type="hidden" name="action" value="update" />
		<p class="submit"><input type="submit" class="button-primary" value="<?php _e( 'Save Changes' ); ?>" /></p>
	
	</div>
</form>