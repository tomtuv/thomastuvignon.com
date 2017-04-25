<form id="mentions-form-pro" method="post" action="options.php">
    <?php settings_fields('mentions_legales_infos'); ?>
    <div id="accordion-mentions-legales-form">
        <h4>Propriétaire du site</h4>
        <div>
            <table class="mentions-form-table">
                <tr>
                    <th><label>Statut du propriétaire du site</label></th>
                    <td>
                        <select name="mentions_legales_status">
                            <?php if(get_option('mentions_legales_status') == ''){
                                echo '<option value="" selected >---</option>';
                            } ?>                               
                            <optgroup label="Entreprises">
                                <option value="EI" <?php if(get_option('mentions_legales_status') == 'EI'){ echo 'selected'; } ?>>Entreprise Individuelle (EI)</option>
                                <option value="EIRL" <?php if(get_option('mentions_legales_status') == 'EIRL'){ echo 'selected';} ?>>Entreprise Individuelle à Responsabilité Limitée (EIRL)</option>
                                <option value="EURL" <?php if(get_option('mentions_legales_status') == 'EURL'){ echo 'selected';} ?>>Entreprise Unipersonnelle à Responsabilité Limitée (EURL)</option>
                            </optgroup>
                            <optgroup label="Sociétés">
                                <option value="SCI" <?php if(get_option('mentions_legales_status') == 'SCI'){ echo 'selected';} ?>>Société Civile Immobilière (SCI)</option>
                                <option value="SCP" <?php if(get_option('mentions_legales_status') == 'SCP'){ echo 'selected';} ?>>Société Civile Professionnelle (SCP)</option>
                                <option value="SCM" <?php if(get_option('mentions_legales_status') == 'SCM'){ echo 'selected';} ?>>Société Civile de Moyens (SCM)</option>
                                <option value="SARL" <?php if(get_option('mentions_legales_status') == 'SARL'){ echo 'selected';} ?>>Société A Responsabilité Limitée (SARL)</option>
                                <option value="SAS" <?php if(get_option('mentions_legales_status') == 'SAS'){ echo 'selected';} ?>>Société par Actions Simplifiée (SAS)</option>
                                <option value="SASU" <?php if(get_option('mentions_legales_status') == 'SASU'){ echo 'selected';} ?>>Société par Actions Simplifiée Unipersonnelle (SASU)</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><label>Activité</label></th>
                    <td>
                        <select name="mentions_legales_activite">
                            <option value="act_com" <?php if(get_option('mentions_legales_activite') == 'act_com'){echo 'selected';} ?>>Activité commerciale</option>
                            <option value="act_art" <?php if(get_option('mentions_legales_activite') == 'act_art'){echo 'selected';} ?>>Activité artisanale</option>
                            <option value="act_lib" <?php if(get_option('mentions_legales_activite') == 'act_lib'){echo 'selected';} ?>>Activité libérale</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><label>Propriétaire du site</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_proprietaire" value="<?php echo get_option('mentions_legales_proprietaire'); ?>"/><p class="description">Nom et prénom pour une entreprise, raison sociale pour une société.</p></td>
                </tr>
                <tr>
                    <th><label>Numéro SIRET</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_siret" value="<?php echo get_option('mentions_legales_siret'); ?>"/></td>
                </tr>
                <tr id="ml-capital-line-form" <?php if(substr(get_option('mentions_legales_status'), 0, 1) == 'E'){ echo 'style="display: none"';} ?>>
                    <th><label>Capital social</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_capital" value="<?php echo get_option('mentions_legales_capital'); ?>"/></td>
                </tr>
                <tr id="ml-rcs-line-form" <?php if(get_option('mentions_legales_activite') != 'act_com'){ echo 'style="display: none"';} ?>>
                    <th><label>Numéro d'immatriculation au Registre des Commerces et des Sociétés (RCS)</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_rcs" value="<?php echo get_option('mentions_legales_rcs'); ?>"/></td>
                </tr>
                <tr id="ml-tva-line-form" <?php if(get_option('mentions_legales_activite') != 'act_com'){ echo 'style="display: none"';} ?>>
                    <th><label>Numéro de TVA intracommunautaire</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_tva" value="<?php echo get_option('mentions_legales_tva'); ?>"/><p class="description">Si vous êtes exonéré de TVA, vous pouvez également l'indiquer dans ce champ.</p></td>
                </tr>
                <tr id="ml-rm-line-form" <?php if(get_option('mentions_legales_activite') != 'act_art'){ echo 'style="display: none"';} ?>>
                    <th><label>Numéro d'immatriculation au répertoire des métiers (RM)</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_rm" value="<?php echo get_option('mentions_legales_rm'); ?>"/></td>
                </tr>
                <tr>
                    <th><label>Adresse postale du propriétaire</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_prop_adresse" value="<?php echo get_option('mentions_legales_prop_adresse'); ?>"/><p class="description">Adresse du propriétaire pour une entreprise, adresse du siège social pour une socété.</p></td>
                </tr>
            </table>
        </div>
        <h4>Créateur du site</h4>
        <div>
            <table class="mentions-form-table">
                <tr>
                    <th><label>Nom du créateur du site</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_createur" value="<?php echo get_option('mentions_legales_createur'); ?>"/></td>
                </tr>
                <tr>
                    <th><label>Site internet du créateur du site</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_createur_url" value="<?php echo get_option('mentions_legales_createur_url'); ?>"/></td>
                </tr>
            </table>
        </div>
        <h4>Responsable de publication du site</h4>
        <div>
            <table class="mentions-form-table">
                <tr>
                    <th><label>Nom du responsable de publication</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_publication" value="<?php echo get_option('mentions_legales_publication'); ?>"/><p class="description">Personne qui gère le contenu du site</p></td>
                </tr>
                <tr>
                    <th><label>Email ou téléphone du responsable de publication</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_publication_contact" value="<?php echo get_option('mentions_legales_publication_contact'); ?>"/></td>
                </tr>
            </table>
        </div>
        <h4>Webmaster du site</h4>
        <div>
            <table class="mentions-form-table">
                <tr>
                    <th><label>Nom du webmaster</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_webmaster" value="<?php echo get_option('mentions_legales_webmaster'); ?>"/><p class="description">Personne en charge des modifications techniques</p></td>
                </tr>
                <tr>
                    <th><label>Email ou téléphone du webmaster</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_webmaster_contact" value="<?php echo get_option('mentions_legales_webmaster_contact'); ?>"/></td>
                </tr>
            </table>
        </div>
        <h4>Hébergeur du site</h4>
        <div>
            <table class="mentions-form-table">
                <tr>
                    <th><label>Hébergeur du site</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_hebergeur" value="<?php echo get_option('mentions_legales_hebergeur'); ?>"/></td>
                </tr>
                <tr>
                    <th><label>Adresse postale de l'hébergeur</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_hebergeur_adresse" value="<?php echo get_option('mentions_legales_hebergeur_adresse'); ?>"/></td>
                </tr>
            </table>
        </div>
        <h4>CNIL</h4>
        <div>
            <table class="mentions-form-table">
                <tr>
                    <th><label>Site déclaré à la CNIL ?</label></th>
                    <td>
                        <select name="mentions_legales_cnil">
                            <option value="Non" <?php if (get_option('mentions_legales_cnil') == 'Non'){echo 'selected';} ?>>Non</option>
                            <option value="Oui" <?php if (get_option('mentions_legales_cnil') == 'Oui'){echo 'selected';} ?>>Oui</option>
                        </select>
                        <p class="description">Pour savoir si votre site doit être déclaré, rendez vous sur <a href="https://www.cnil.fr/fr/informatique-et-libertes-suis-je-concerne" target="_blank">cette page</a>.</p>
                    </td>
                </tr>
                <tr>
                    <th><label>Si le site est déclaré à la CNIL, numéro CNIL</label></th>
                    <td><input class="mentions-legales-form-input" type="text" name="mentions_legales_cnil_numero" value="<?php echo get_option('mentions_legales_cnil_numero'); ?>"/></td>
                </tr>
            </table>
        </div>
    </div>
    <?php submit_button(); ?>
</form>