<?php

/**
* @since        1.1.0
* @package      Mentions_Legales
* @subpackage   Mentions_Legales/admin/partials
* @author       Jean-Baptiste Aramendy <contact@jba-development.fr>
*/

/**
* HTML de la page des réglages
*
* @since 1.0.0
*
*/
function mentions_legales_infos_page() {
    ?>
    <div class="wrap">
        <h1><?php echo get_admin_page_title(); ?></h1>
        <div class="mentions-legales-cell" id="mentions-legales-content">
            <?php if(Mentions_Legales::infos_completed()){ ?>
                <div class="card">
                    <h2 class="mentions-legales-h2">Instructions - Partie 2</h2>
                    <p>Maintenant que vous avez saisi toutes les informations, copiez le shortcode suivant et collez le dans une nouvelle page que vous nommerez "Mentions légales" :</p>
                    <input type="text" onfocus="this.select()" readonly value="[mentions_legales]">
                    <p>Un lien vers cette page doit être visible sur toutes les pages de votre site. Idéalement, placez un lien dans le bas de page de votre site.</p>
                </div>
                <br>
                <h2 class="mentions-legales-h2">Réglages</h2>                
                <form id="mentions-legales-options-form" method="post" action="options.php">
                    <h3>Type de site</h3>
                    <?php settings_fields('mentions_legales_page_options'); ?>
                    <table class="form-table">
                        <tbody>
                            <tr>
                                <th>Finalité du site</th>
                                <td>
                                    <select name="mentions_legales_part_pro">
                                        <option value="Particulier" <?php if(get_option('mentions_legales_part_pro') == 'Particulier'){ echo 'selected'; }?>>Particulier</option>
                                        <option value="Professionnel" <?php if(get_option('mentions_legales_part_pro') == 'Professionnel'){ echo 'selected'; }?>>Professionnel</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Lien vers la page</h3>
                    <p>Vous pouvez utiliser un widget pour afficher sur toutes vos pages un lien vers la page des mentions légales. Pour cela, indiquez ci dessous la page où vous avez inséré le shortcode.</p>
                    <?php settings_fields('mentions_legales_page_options'); ?>
                    <table class="form-table">
                        <tbody>                    
                            <tr>
                                <th>Page des mentions légales</th>
                                <td>
                                    <select name="mentions_legales_page_link">
                                        <option value="not_set">- Désactivé -</option>
                                        <?php
                                            $pages = get_pages();
                                            foreach ( $pages as $page ) {
                                                $option = '<option value="' . get_page_link( $page->ID ) . '"';
                                                if (get_option( 'mentions_legales_page_link' ) == get_page_link( $page->ID ) ) {
                                                    $option .= 'selected >';
                                                } else {
                                                    $option .= '>';
                                                }
                                                $option .= $page->post_title;
                                                $option .= '</option>';
                                                echo $option;
                                            }
                                        ?>
                                    </select>
                                    <br>
                                    <p class="description">Sélectionnez la page où vous avez inséré le shortcode [mentions_legales].</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <?php submit_button('Enregistrer les modifications', 'primary', 'mentions-legales-options-submit'); ?>
                </form>
            <?php } else { ?>
            <div class="card">
                <h2 class="mentions-legales-h2">Instructions - Partie 1</h2>
                <p>Les mentions légales sont des informations obligatoires qui doivent apparaitre sur chaque site internet en France. Remplissez ces informations et enregistrez pour avoir les instructions suivantes.</p>
            </div>
            <h2 class="mentions-legales-h2">Réglages</h2>
            <form id="mentions-legales-options-form" method="post" action="options.php">
                <h3>Type de site</h3>
                <?php settings_fields('mentions_legales_page_options'); ?>
                <table class="form-table">
                    <tbody>
                        <tr>
                            <th>Finalité du site</th>
                            <td>
                                <select name="mentions_legales_part_pro">
                                    <option value="Particulier" <?php if(get_option('mentions_legales_part_pro') == 'Particulier'){ echo 'selected'; }?>>Particulier</option>
                                    <option value="Professionnel" <?php if(get_option('mentions_legales_part_pro') == 'Professionnel'){ echo 'selected'; }?>>Professionnel</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <?php submit_button('Enregistrer les modifications', 'primary', 'mentions-legales-options-submit'); ?>
            </form>
            <?php } ?>
            <h3>Informations à remplir</h3>
            <?php 
            if(get_option('mentions_legales_part_pro') == 'Particulier'){
                include_once(WPML_PLUGIN_DIR . '/admin/partials/mentions-legales-admin-form-part.php');
            } else {
                include_once(WPML_PLUGIN_DIR . '/admin/partials/mentions-legales-admin-form-pro.php');
            }
            ?>
        </div>
        <div class="mentions-legales-cell" id="mentions-legales-right-card">
            <div class="card">
                <h2 class="mentions-legales-h2">Utilisation de la version gratuite</h2>
                <p>Cette version gratuite peut tout à fait vous convenir si vous n'avez pas de besoins particulier. Néanmoins, <strong>celle ci ne disposera pas de fonctions supplémentaires.</strong></p>
                <p>Bien entendu, je continuerais à la mettre à jour en cas de bug ou de changement dans les mentions légales à afficher.</p>
            </div>
            <div class="card">
                <h2 class="mentions-legales-h2">Pour en faire un peu plus...</h2>
                <p>Je vous propose des <strong>fonctionnalités supplémentaires</strong>, notamment la personnalisation des textes générés, sur une version payante de ce plugin.</p>
                <p>Le prix est <strong>très abordable</strong> et me permettra de continuer à développer de nouvelles fonctionnalités, pour rendre ce plugin aussi complet que possible !</p>
                <p style="text-align:center"><a class="button button-primary" href="https://plugins.jba-development.fr/produit/plugin-wordpress-mentions-legales/" title="Plugin Mentions Légales" target="_blank">Version PRO</a></p>
            </div>
            <div class="card">
                <h2 class="mentions-legales-h2">Besoin d'aide ?</h2>
                <p>Si vous avez besoin d'un coup de main, une idée à me soumettre, ou encore que vous avez repéré un problème, n'hésitez pas à m'envoyer un mail à l'adresse <strong>plugins@jba-development.fr</strong></p>
            </div>
        </div>
    </div>
<?php
}