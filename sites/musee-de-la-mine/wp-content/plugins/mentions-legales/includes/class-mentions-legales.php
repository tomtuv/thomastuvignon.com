<?php

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.1.0
 * @package    Mentions_Legales
 * @subpackage Mentions_Legales/includes
 * @author     Jean-Baptiste Aramendy <contact@jba-development.fr>
 */
class Mentions_Legales {
    
    /**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.1.0
	 * @access   protected
	 * @var      Plugin_Name_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;
	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.1.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;
	/**
	 * The current version of the plugin.
	 *
	 * @since    1.1.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;
    
    /**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.1.0
	 */
	public function __construct() {
		$this->plugin_name = 'wordpress-mentions-legales';
		$this->version = '1.2.3';
		$this->load_dependencies();
		$this->define_admin_hooks();
        $this->define_public_hooks();
	}
    
    /**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Mentions_Legales_Loader. Orchestrates the hooks of the plugin.
     * - Mentions_Legales_Admin. Defines all hooks for the admin area.
	 * - Mentions_Legales_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.1.0
	 * @access   private
	 */
	private function load_dependencies() {
		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once WPML_PLUGIN_DIR . '/includes/class-mentions-legales-loader.php';
		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once WPML_PLUGIN_DIR . '/admin/class-mentions-legales-admin.php';        
        /**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once WPML_PLUGIN_DIR . '/public/class-mentions-legales-public.php';
        
        /**
         * The HTML files for admin menus
         */
        require_once WPML_PLUGIN_DIR . '/admin/partials/mentions-legales-admin-display.php';
        
        /**
         * File for shortcode generation
         */
        require_once WPML_PLUGIN_DIR . '/public/partials/mentions-legales-shortcode.php';
        
        /**
         * Class of widget
         */
        require_once WPML_PLUGIN_DIR . '/includes/class-mentions-legales-widget.php';
        
		$this->loader = new Mentions_Legales_Loader();
	}
    
    /**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.1.0
	 * @access   private
	 */
	private function define_admin_hooks() {
		$plugin_admin = new Mentions_Legales_Admin( $this->get_plugin_name(), $this->get_version() );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
        $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
        $this->loader->add_action( 'admin_menu', $plugin_admin, 'add_menu_pages' );
        $this->loader->add_action( 'admin_init', $plugin_admin, 'register_settings' );        
	}
    
    /**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.1.2
	 * @access   private
	 */
	private function define_public_hooks() {
		$plugin_public = new Mentions_Legales_Public( $this->get_plugin_name(), $this->get_version() );
        $this->loader->add_action( 'init', $plugin_public, 'register_mentions_legales_shortcode' );
        $this->loader->add_action( 'widgets_init', $plugin_public, 'register_mentions_legales_widget' );
	}
    
    /**
     * Fonction pour déterminer si toutes les informations sont remplies
     *
     * @since 1.0.0
     *
     */
    static function infos_completed() {
        if(get_option('mentions_legales_part_pro') == 'Professionnel'){
            if (trim(get_option('mentions_legales_proprietaire')) == false || trim(get_option('mentions_legales_siret')) == false || trim(get_option('mentions_legales_status')) == false || trim(get_option('mentions_legales_prop_adresse')) == false || trim(get_option('mentions_legales_createur')) == false || trim(get_option('mentions_legales_createur_url')) == false || trim(get_option('mentions_legales_publication')) == false || trim(get_option('mentions_legales_publication_contact')) == false || trim(get_option('mentions_legales_webmaster')) == false || trim(get_option('mentions_legales_webmaster_contact')) == false || trim(get_option('mentions_legales_hebergeur')) == false || trim(get_option('mentions_legales_hebergeur_adresse')) == false) {
                return false;
            } else {
                return true;
            }
        } else {
            if (trim(get_option('mentions_legales_part_proprietaire')) == false || trim(get_option('mentions_legales_part_adresse')) == false || trim(get_option('mentions_legales_part_contact')) == false || trim(get_option('mentions_legales_part_heb_name')) == false || trim(get_option('mentions_legales_part_heb_adresse')) == false || trim(get_option('mentions_legales_part_heb_contact')) == false){
                return false;
            } else {
                return true;
            }
        }
    }
    
    /**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.1.0
	 */
	public function run() {
		$this->loader->run();
	}
	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.1.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}
	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.1.0
	 * @return    Mentions_Legales_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}
	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.1.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}
    
}