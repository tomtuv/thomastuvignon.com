<?php

/**
 * The class which construct the plugin widget.
 *
 * The widget allows the WordPress user to display the link to Mentions Legales page.
 *
 * @since 1.1.2
 * @package    Mentions_Legales
 * @subpackage Mentions_Legales/includes
 * @author     Jean-Baptiste Aramendy <contact@jba-development.fr>
 */
class Mentions_Legales_Widget extends WP_Widget {
    
    public function __construct() {
        parent::__construct('mentions_legales', 'Mentions Légales', array('description' => 'Affiche le lien vers la page des mentions légales.'));
    }
    
    public function widget($args, $instance) {
        echo '<a href="' . get_option('mentions_legales_page_link') . '" title="Mention légales">Mentions légales</a>';
    }
}