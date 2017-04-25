<?php
/**
* @link           http://jba-development.fr
* @since          1.0.0
* @package        Mentions_Legales
* 
* Plugin Name:    WordPress Mentions Légales
* Plugin URI:     http://jba-development.fr
* Description:    Un plugin pour générer automatiquement les mentions légales de votre site.
* Version:        1.2.3
* Author:         Jean-Baptiste Aramendy
* Author URI:     http://jba-development.fr
* License:        GPL2
* Licence URI:    https://www.gnu.org/licenses/gpl-2.0.html
**/

define('WPML_PLUGIN_DIR', untrailingslashit(dirname(__FILE__)));

// Si ce fichier est appelé directement, abandonner.
if ( ! defined( 'WPINC' ) ) {
    die;
}

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require WPML_PLUGIN_DIR . '/includes/class-mentions-legales.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.1.0
 */
function run_plugin_name() {
	$plugin = new Mentions_Legales();
	$plugin->run();
}
run_plugin_name();