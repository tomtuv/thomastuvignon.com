=== WP Owl Carousel ===
Contributors: Dabuuker
Tags: carousel, owl carousel, slideshow, slider
Requires at least: 4.0
Tested up to: 4.4.2
Stable tag: 1.1.3
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Owl Carousel integration for Wordpress

== Description ==
Owl Carousel integration for Wordpress

Owl Carousel author: Bartosz Wojciechowski
http://owlgraphic.com/owlcarousel/

For now, works only with images.

== Screenshots ==
1. Click Add or Upload files to insert images
2. When images selected, click use this file
3. Copy the shortcode and paste it anywhere
4. View post/page to see results

== Installation ==
Go to your Wordpress Dashboard. From there select Plugins -> Add New. Search for \'WP Owl Carousel\', make sure it found the right plugin and click Install Now.

Alternatively, extract the zip file and upload the contents to the wp-content/plugins/ directory of your WordPress installation and then activate the plugin from the plugins page.


== Frequently Asked Questions ==

= How to control when and how this plugin's assets get loaded? =

First you'll need to tell the plugin not to enqueue the assets.

For all files:

`add_filter('wp_owl_carousel_enqueue_assets','__return_false');`

For individual files:

`add_filter('wp_owl_carousel_enqueue_css','__return_false');` - Owl Carousel css

`add_filter('wp_owl_carousel_enqueue_theme_css','__return_false');` - Owl Carousel Theme css, loaded after the main css

`add_filter('wp_owl_carousel_enqueue_owl_js','__return_false');` - Owl Carousel minified javascript, loaded after jquery

`add_filter('wp_owl_carousel_enqueue_plugin_js','__return_false');` - Plugin's own javascript, initializes the carousels, depends on plugin's JS

And now just use the 'wp_enqueue_scripts' action hook and wp_enqeue_script/wp_enqueue_style functions somewhere in your code.

There's also the get_wp_owl_carousel_url() function to easily get this plugin's url if you don't want to copy the assets over somewhere.


== Changelog ==
= 1.1.3 =
* [] array syntax replaced with array() to avoid fatal errors on hosts with old PHP version
= 1.1.2 =
* Added filters for dequeueing plugin css and js
= 1.1.1 =
* Fixed issue with wrong link to image size
= 1.1.0 =
* Added ability to link to a different image size and specify a rel attribute for lightboxes
= 1.0.0 =
* First release