<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @since 1.1.0
 * @package    Mentions_Legales
 * @subpackage Mentions_Legales/admin
 * @author     Jean-Baptiste Aramendy <contact@jba-development.fr>
 */
class Mentions_Legales_Admin {
    
    /**
	 * The ID of this plugin.
	 *
	 * @since    1.1.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;
	/**
	 * The version of this plugin.
	 *
	 * @since    1.1.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;
    
    /**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.1.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}
    
    /**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.1.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/mentions-legales-admin.css', array(), $this->version, 'all' );
        wp_enqueue_style( 'jquery-ui', plugin_dir_url( __FILE__ ) . 'css/jquery-ui.min.css', array(), $this->version, 'all' );
        wp_enqueue_style( 'jquery-ui-structure', plugin_dir_url( __FILE__ ) . 'css/jquery-ui.structure.min.css', array(), $this->version, 'all' );
        wp_enqueue_style( 'jquery-ui-theme', plugin_dir_url( __FILE__ ) . 'css/jquery-ui.theme.min.css', array(), $this->version, 'all' );
	}
    
    /**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
        wp_enqueue_script( 'jquery', plugin_dir_url( __FILE__ ) . 'js/jquery.js', array(), $this->version, 'all');
        wp_enqueue_script( 'jquery-ui', plugin_dir_url( __FILE__ ) . 'js/jquery-ui.min.js', array(), $this->version, 'all');
        wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/mentions-legales-admin.js', array(), $this->version, 'all');
    }
    
    /**
     * Register admin menu pages
     *
     * @since 1.1.0
     */
    public function add_menu_pages() {
        add_menu_page(
            'Mentions légales',
            'Mentions légales',
            'manage_options',
            'mentions-legales-menu',
            'mentions_legales_infos_page',
            'dashicons-clipboard'
        );
    }
    
    /**
     * Register settings
     *
     * @since 1.1.0
     */
    public function register_settings() {
        // Legal informations options
        register_setting('mentions_legales_infos', 'mentions_legales_proprietaire');
        register_setting('mentions_legales_infos', 'mentions_legales_status');
        register_setting('mentions_legales_infos', 'mentions_legales_siret');
        register_setting('mentions_legales_infos', 'mentions_legales_capital');
        register_setting('mentions_legales_infos', 'mentions_legales_activite');
        register_setting('mentions_legales_infos', 'mentions_legales_rcs');
        register_setting('mentions_legales_infos', 'mentions_legales_tva');
        register_setting('mentions_legales_infos', 'mentions_legales_rm');
        register_setting('mentions_legales_infos', 'mentions_legales_prop_adresse');
        register_setting('mentions_legales_infos', 'mentions_legales_createur');
        register_setting('mentions_legales_infos', 'mentions_legales_createur_url');
        register_setting('mentions_legales_infos', 'mentions_legales_publication');
        register_setting('mentions_legales_infos', 'mentions_legales_publication_contact');
        register_setting('mentions_legales_infos', 'mentions_legales_webmaster');
        register_setting('mentions_legales_infos', 'mentions_legales_webmaster_contact');
        register_setting('mentions_legales_infos', 'mentions_legales_hebergeur');
        register_setting('mentions_legales_infos', 'mentions_legales_hebergeur_adresse');
        register_setting('mentions_legales_infos', 'mentions_legales_cnil');
        register_setting('mentions_legales_infos', 'mentions_legales_cnil_numero');
        
        register_setting('mentions_legales_infos_part', 'mentions_legales_part_proprietaire');
        register_setting('mentions_legales_infos_part', 'mentions_legales_part_adresse');
        register_setting('mentions_legales_infos_part', 'mentions_legales_part_contact');
        register_setting('mentions_legales_infos_part', 'mentions_legales_part_heb_name');
        register_setting('mentions_legales_infos_part', 'mentions_legales_part_heb_adresse');
        register_setting('mentions_legales_infos_part', 'mentions_legales_part_heb_contact');
        register_setting('mentions_legales_infos_part', 'mentions_legales_part_cnil');
        register_setting('mentions_legales_infos_part', 'mentions_legales_part_cnil_numero');
        
        register_setting('mentions_legales_page_options', 'mentions_legales_page_link');
        register_setting('mentions_legales_page_options', 'mentions_legales_part_pro');
    }
    
}