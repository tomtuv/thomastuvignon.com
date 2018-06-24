<?php

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @since 1.1.2
 * @package    Mentions_Legales
 * @subpackage Mentions_Legales/public
 * @author     Jean-Baptiste Aramendy <contact@jba-development.fr>
 */
class Mentions_Legales_Public {
    
    /**
	 * The ID of this plugin.
	 *
	 * @since    1.1.2
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;
	/**
	 * The version of this plugin.
	 *
	 * @since    1.1.2
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;
	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.1.2
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}
    
    /**
     * Register shortcode
     *
     * @since 1.1.0
     */
    public function register_mentions_legales_shortcode() {
        if(get_option('mentions_legales_part_pro') == 'Particulier'){
            add_shortcode('mentions_legales', 'mentions_legales_shortcode_part');
        } else {
            add_shortcode('mentions_legales', 'mentions_legales_shortcode_pro');
        }
    }
    
    /**
     * Register widget
     *
     * @since 1.1.2
     */
    public function register_mentions_legales_widget() {
        if(get_option('mentions_legales_page_link') != 'not_set' && get_option('mentions_legales_page_link') != '') {
            register_widget('Mentions_Legales_Widget');
        }
    }
    
}