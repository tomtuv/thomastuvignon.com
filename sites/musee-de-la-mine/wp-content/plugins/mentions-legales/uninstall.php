<?php

/**
* @since        1.1.0
* @package      Mentions_Legales
* @subpackage   Mentions_Legales/admin/partials
* @author       Jean-Baptiste Aramendy <contact@jba-development.fr>
*/

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    exit;
}

delete_option('mentions_legales_proprietaire');
delete_option('mentions_legales_status');
delete_option('mentions_legales_siret');
delete_option('mentions_legales_capital');
delete_option('mentions_legales_activite');
delete_option('mentions_legales_rcs');
delete_option('mentions_legales_tva');
delete_option('mentions_legales_rm');
delete_option('mentions_legales_prop_adresse');
delete_option('mentions_legales_createur');
delete_option('mentions_legales_createur_url');
delete_option('mentions_legales_publication');
delete_option('mentions_legales_publication_contact');
delete_option('mentions_legales_webmaster');
delete_option('mentions_legales_webmaster_contact');
delete_option('mentions_legales_hebergeur');
delete_option('mentions_legales_hebergeur_adresse');
delete_option('mentions_legales_cnil');
delete_option('mentions_legales_cnil_numero');
delete_option('mentions_legales_part_proprietaire');
delete_option('mentions_legales_part_adresse');
delete_option('mentions_legales_part_contact');
delete_option('mentions_legales_part_heb_name');
delete_option('mentions_legales_part_heb_adresse');
delete_option('mentions_legales_part_heb_contact');
delete_option('mentions_legales_part_cnil');
delete_option('mentions_legales_part_cnil_numero');
delete_option('mentions_legales_page_link');
delete_option('mentions_legales_part_pro');

delete_option('mentions_legales_infos', 'mentions_legales_proprietaire');
delete_option('mentions_legales_infos', 'mentions_legales_status');
delete_option('mentions_legales_infos', 'mentions_legales_siret');
delete_option('mentions_legales_infos', 'mentions_legales_capital');
delete_option('mentions_legales_infos', 'mentions_legales_activite');
delete_option('mentions_legales_infos', 'mentions_legales_rcs');
delete_option('mentions_legales_infos', 'mentions_legales_tva');
delete_option('mentions_legales_infos', 'mentions_legales_rm');
delete_option('mentions_legales_infos', 'mentions_legales_prop_adresse');
delete_option('mentions_legales_infos', 'mentions_legales_createur');
delete_option('mentions_legales_infos', 'mentions_legales_createur_url');
delete_option('mentions_legales_infos', 'mentions_legales_publication');
delete_option('mentions_legales_infos', 'mentions_legales_publication_contact');
delete_option('mentions_legales_infos', 'mentions_legales_webmaster');
delete_option('mentions_legales_infos', 'mentions_legales_webmaster_contact');
delete_option('mentions_legales_infos', 'mentions_legales_hebergeur');
delete_option('mentions_legales_infos', 'mentions_legales_hebergeur_adresse');
delete_option('mentions_legales_infos', 'mentions_legales_cnil');
delete_option('mentions_legales_infos', 'mentions_legales_cnil_numero');
delete_option('mentions_legales_infos_part', 'mentions_legales_part_proprietaire');
delete_option('mentions_legales_infos_part', 'mentions_legales_part_adresse');
delete_option('mentions_legales_infos_part', 'mentions_legales_part_contact');
delete_option('mentions_legales_infos_part', 'mentions_legales_part_heb_name');
delete_option('mentions_legales_infos_part', 'mentions_legales_part_heb_adresse');
delete_option('mentions_legales_infos_part', 'mentions_legales_part_heb_contact');
delete_option('mentions_legales_infos_part', 'mentions_legales_part_cnil');
delete_option('mentions_legales_infos_part', 'mentions_legales_part_cnil_numero');
delete_option('mentions_legales_page_options', 'mentions_legales_page_link');
delete_option('mentions_legales_page_options', 'mentions_legales_part_pro');