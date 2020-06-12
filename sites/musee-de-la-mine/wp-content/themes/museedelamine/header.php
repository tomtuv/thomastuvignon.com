<?php
/**
 * The Header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link href="https://fonts.googleapis.com/css?family=Alegreya:400,700|Source+Sans+Pro:400,700" rel="stylesheet">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<script>
		window.addEventListener('scroll', function () {
		  document.body.classList[
		    window.scrollY > 400 ? 'add': 'remove'
		  ]('scrolled');
		});
	</script>
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<header id="masthead" class="site-header" role="banner">
		<div class="header-main">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img class="logo" src="https://thomastuvignon.com/sites/musee-de-la-mine/wp-content/uploads/2016/08/lanterne.png"><h1 class="site-title"><?php bloginfo( 'name' ); ?></a></h1>

<!--
			<div class="search-toggle">
				<a href="#search-container" class="screen-reader-text" aria-expanded="false" aria-controls="search-container"><?php _e( 'Search', 'twentyfourteen' ); ?></a>
			</div>
-->

			<nav id="primary-navigation" class="site-navigation primary-navigation" role="navigation">
				<div class="menu-toggle"><?php _e( 'Primary Menu', 'twentyfourteen' ); ?></div>
				<a class="screen-reader-text skip-link" href="#content"><?php _e( 'Skip to content', 'twentyfourteen' ); ?></a>
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
			</nav>
		</div>

<!--
		<div id="search-container" class="search-box-wrapper hide">
			<div class="search-box">
				<?php get_search_form(); ?>
			</div>
		</div>
-->
	</header><!-- #masthead -->
	
	<div id="site-header">
		<?php
			if( is_front_page() ) echo pll__('<p>Bienvenue au Musée de la Mine</p>');
			elseif( is_page( pll__('Votre visite') ) ) echo pll__('<p>Comment se déroule ma visite ?</p>');
			elseif( is_page( pll__('Histoire') ) ) echo pll__('<p>L’histoire de la Mine en Provence</p>');
			elseif( is_page( pll__('Évènements') ) ) echo pll__('<p>Que se passe-t-il au Musée ?</p>');
			elseif( is_home() && get_option( 'page_for_posts' ) ) echo pll__('<p>Toute l’actualité du Musée de la Mine</p>');
			else echo pll__('<p>Musée de la Mine</p>'); ?>
	</div>
	
	<div id="main" class="site-main">
