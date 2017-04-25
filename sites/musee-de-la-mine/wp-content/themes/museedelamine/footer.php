<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>

		</div><!-- #main -->

			<div id="newsletter">
				<p><?php echo pll__('Inscrivez-vous à la newsletter du Musée de la Mine pour être au courant de toutes les dernières actualités, évènements, attractions et plus encore.'); ?></p>
				<!-- Begin MailChimp Signup Form -->
				<div id="mc_embed_signup">
				<form action="//esy.us14.list-manage.com/subscribe/post?u=5007cfaea8a0ee5a8d73f883f&amp;id=8e986b2977" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
				    <div id="mc_embed_signup_scroll">
					
				<div class="mc-field-group">
<!-- 					<label for="mce-EMAIL">Email Address </label> -->
					<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="<?php echo pll__('Adresse e-mail'); ?>">
				</div>
					<div id="mce-responses" class="clear">
						<div class="response" id="mce-error-response" style="display:none"></div>
						<div class="response" id="mce-success-response" style="display:none"></div>
					</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
				    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5007cfaea8a0ee5a8d73f883f_8e986b2977" tabindex="-1" value=""></div>
				    <div class="clear"><input type="submit" value="<?php echo pll__('S’inscrire'); ?>" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
				    </div>
				</form>
				</div>
				
				<!--End mc_embed_signup-->
<!-- 				<form><input><button type="submit">S’inscrire</button></form> -->
			</div>
			
		<footer id="colophon" class="site-footer" role="contentinfo">

			<?php get_sidebar( 'footer' ); ?>
			

			<div class="site-info">
				<?php do_action( 'twentyfourteen_credits' ); ?>
<!-- 				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'twentyfourteen' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'twentyfourteen' ), 'WordPress' ); ?></a> -->
					<div id="liens">
						<a href="http://www.ville-greasque.fr"><?php echo pll__('Ville de Gréasque'); ?></a>
						<a href="<?php echo pll__('index.php/mentions-legales'); ?>"><?php echo pll__('Mentions légales'); ?></a>
						<a href="<?php echo pll__('index.php/contact'); ?>"><?php echo pll__('Contact'); ?></a></div>
						<div id="social">
							<a href="https://www.facebook.com/MuseeMineGreasque"><div class="icon-box"><div class="icon icon-facebook icon-facebook-dims"></div></div></a>
							<a href="https://twitter.com/MuseedelaMine"><div class="icon-box"><div class="icon icon-twitter icon-twitter-dims"></div></div></a>
							<a href="https://www.youtube.com/channel/UC6mPud-x5vLiI6t4kIfbXKQ"><div class="icon-box"><div class="icon icon-youtube icon-youtube-dims"></div></div></a>
					</div>
			</div><!-- .site-info -->
		</footer><!-- #colophon -->
	</div><!-- #page -->

	<?php wp_footer(); ?>
</body>
</html>