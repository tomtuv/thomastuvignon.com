<form id="mentions-form-part" method="post" action="options.php">
    <?php settings_fields('mentions_legales_infos_part'); ?>
    <div id="accordion-mentions-legales-form">
        <h4>Propriétaire du site</h4>
        <div>
            <table class="mentions-form-table">                
                <tr>
                    <th><label>Propriétaire du site</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_part_proprietaire" value="<?php echo get_option('mentions_legales_part_proprietaire'); ?>"/><p class="description">Nom et prénom</p></td>
                </tr>
                <tr>
                    <th><label>Adresse postale du propriétaire</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_part_adresse" value="<?php echo get_option('mentions_legales_part_adresse'); ?>"/></td>
                </tr>
                <tr>
                    <th><label>Moyen de contact du propriétaire</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_part_contact" value="<?php echo get_option('mentions_legales_part_contact'); ?>"/><p class="description">Adresse mail ou téléphone</p></td>
                </tr>
            </table>
        </div>        
        <h4>Hébergeur du site</h4>
        <div>
            <table class="mentions-form-table">
                <tr>
                    <th><label>Hébergeur du site</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_part_heb_name" value="<?php echo get_option('mentions_legales_part_heb_name'); ?>"/></td>
                </tr>
                <tr>
                    <th><label>Adresse postale de l'hébergeur</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_part_heb_adresse" value="<?php echo get_option('mentions_legales_part_heb_adresse'); ?>"/></td>
                </tr>
                <tr>
                    <th><label>Moyen de contact de l'hébergeur</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_part_heb_contact" value="<?php echo get_option('mentions_legales_part_heb_contact'); ?>"/><p class="description">Adresse mail ou téléphone</p></td>
                </tr>
            </table>
        </div>
        <h4>CNIL</h4>
        <div>
            <table class="mentions-form-table">
                <tr>
                    <th><label>Site déclaré à la CNIL ?</label></th>
                    <td>
                        <select name="mentions_legales_part_cnil">
                            <option value="Non" <?php if (get_option('mentions_legales_part_cnil') == 'Non'){echo 'selected';} ?>>Non</option>
                            <option value="Oui" <?php if (get_option('mentions_legales_part_cnil') == 'Oui'){echo 'selected';} ?>>Oui</option>
                        </select>
                        <p class="description">Pour savoir si votre site doit être déclaré, rendez vous sur <a href="https://www.cnil.fr/fr/informatique-et-libertes-suis-je-concerne" target="_blank">cette page</a>.</p>
                    </td>
                </tr>
                <tr>
                    <th><label>Si le site est déclaré à la CNIL, numéro CNIL</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_part_cnil_numero" value="<?php echo get_option('mentions_legales_part_cnil_numero'); ?>"/></td>
                </tr>
            </table>
        </div>
    </div>
    <?php submit_button(); ?>
</form>