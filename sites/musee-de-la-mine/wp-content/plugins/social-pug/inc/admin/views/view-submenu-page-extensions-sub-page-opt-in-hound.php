<?php dpsp_admin_header(); ?>

<div class="dpsp-page-wrapper dpsp-page-extensions dpsp-sub-page-opt-in-hound wrap">

	<div id="opt-in-hound-promo-box">
		<div id="opt-in-hound-promo-box-banner">
			<img src="<?php echo DPSP_PLUGIN_DIR_URL . '/assets/img/opt-in-hound-banner.png'; ?>" />
		</div>

		<div id="opt-in-hound-promo-box-inner">

			<!-- Title and Sub-title -->
			<br /><h1 class="opt-in-hound-promo-box-title"><?php echo __( 'Grow Your Email List in a Simple Way', 'social-pug' ); ?><br /><span style="display: block; margin-top: 20px;"><?php echo __( 'Create beautiful email subscription popup and widget forms<br /> with just a few clicks.', 'social-pug' ); ?></span></h1>

			<!-- Call to Action -->
			<div class="opt-in-hound-promo-box-cta">
				<a class="button-primary" href="<?php echo wp_nonce_url( admin_url( 'update.php?action=install-plugin&plugin=opt-in-hound' ), 'install-plugin_opt-in-hound' ); ?>"><?php echo __( 'Install Now', 'social-pug' ); ?></a>
			</div>

			<hr />

			<!-- Subscribe from custom opt-ins -->
			<h2 class="opt-in-hound-promo-box-sub-title"><strong><?php echo __( 'Subscribe users from custom opt-ins', 'social-pug' ); ?></strong></h2>

			<div class="dpsp-row dpsp-big-padding">
				<div class="dpsp-col-1-3">
					<div class="browser-window">
						<div class="browser-header"></div>
						<img src="<?php echo DPSP_PLUGIN_DIR_URL . '/assets/img/tool-opt-in-icon-pop-up.png'; ?>" />
					</div>
					<h4><?php echo __( 'Email Opt-in Pop-up', 'social-pug' ); ?></h4>
					<p><?php echo __( 'Add email opt-in pop-up forms in your posts and pages.', 'social-pug' ); ?></p>
				</div>

				<div class="dpsp-col-1-3">
					<div class="browser-window">
						<div class="browser-header"></div>
						<img src="<?php echo DPSP_PLUGIN_DIR_URL . '/assets/img/tool-opt-in-icon-widget.png'; ?>" />
					</div>
					<h4><?php echo __( 'Email Opt-in Widget', 'social-pug' ); ?></h4>
					<p><?php echo __( 'Add email opt-in widget forms in any widget area.', 'social-pug' ); ?></p>
				</div>

				<div class="dpsp-col-1-3">
					<div class="browser-window">
						<div class="browser-header"></div>
						<img src="<?php echo DPSP_PLUGIN_DIR_URL . '/assets/img/tool-opt-in-icon-fly-in.png'; ?>" />
					</div>
					<h4><?php echo __( 'Email Opt-in Fly-in', 'social-pug' ); ?></h4>
					<p><?php echo __( 'Add email opt-in fly-in forms in your posts and pages.', 'social-pug' ); ?></p>
				</div>
			</div>

			<div class="dpsp-row dpsp-big-padding">
				<div class="dpsp-col-1-3">
					<div class="browser-window">
						<div class="browser-header"></div>
						<img src="<?php echo DPSP_PLUGIN_DIR_URL . '/assets/img/tool-opt-in-icon-shortcode.png'; ?>" />
					</div>
					<h4><?php echo __( 'Email Opt-in Shortcode', 'social-pug' ); ?></h4>
					<p><?php echo __( 'Place email opt-in forms anywhere in your pages with the shortcode.', 'social-pug' ); ?></p>
				</div>

				<div class="dpsp-col-1-3">
					<div class="browser-window">
						<div class="browser-header"></div>
						<img src="<?php echo DPSP_PLUGIN_DIR_URL . '/assets/img/tool-opt-in-icon-after-content.png'; ?>" />
					</div>
					<h4><?php echo __( 'Email Opt-in After Content', 'social-pug' ); ?></h4>
					<p><?php echo __( 'Add email opt-in forms after your posts and pages content.', 'social-pug' ); ?></p>
				</div>
			</div>

			<hr />

			<h1 class="opt-in-hound-promo-box-title"><span style="display: block;"><?php echo __( 'Simple. Flexible. Reliable.', 'social-pug' ); ?></span></h1>
			
			<!-- Call to Action -->
			<div class="opt-in-hound-promo-box-cta">
				<a class="button-primary" href="<?php echo wp_nonce_url( admin_url( 'update.php?action=install-plugin&plugin=opt-in-hound' ), 'install-plugin_opt-in-hound' ); ?>"><?php echo __( 'Install Now', 'social-pug' ); ?></a>
			</div>

			<br />

		</div>
	</div>

</div>