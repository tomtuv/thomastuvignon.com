<?php

/**
* @since        1.0.0
* @package      Mentions_Legales
* @subpackage   Mentions_Legales/public/partials
* @author       Jean-Baptiste Aramendy <contact@jba-development.fr>
*/

/**
* Construit le texte des mentions légales professionnelles
*
* @since 1.0.0
*
*/
function mentions_legales_shortcode_pro() {
    
    // Lien par défaut vers le site
    $default_link = '<a href="' . get_site_url() . '" title="' . get_option( 'mentions_legales_proprietaire' ) . ' - ' . get_bloginfo('name') .'">' . get_bloginfo('name') .'</a>';
    
    // Capital social en cas de société
    $capital = '';
    if(substr(get_option('mentions_legales_status'), 0, 1) == 'S'){
        $capital = ' au capital de ' . get_option('mentions_legales_capital');
    }
    
    //Numéros selon activité
    $rcs = '';
    $tva = '';
    $rm = '';
    if(get_option('mentions_legales_activite') == 'act_com'){
        $rcs = '<br><strong>Numéro immatriculation RCS</strong> : ' . get_option('mentions_legales_rcs');
        $tva = '<br><strong>Numéro identification TVA</strong> : ' . get_option('mentions_legales_tva');
    } elseif(get_option('mentions_legales_activite') == 'act_art'){
        $rm = '<br><strong>Numéro immatriculation RM</strong> : ' . get_option('mentions_legales_rm');
    }
    
    // Première partie des mentions légales
    $first_part = '<h3>1. Présentation du site.</h3><p>En vertu de l\'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique, il est précisé aux utilisateurs du site ' . $default_link . ' l\'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p><p><strong>Propriétaire</strong> : ' . get_option('mentions_legales_proprietaire') . ' – ' . get_option('mentions_legales_status') . $capital . ' – ' . get_option('mentions_legales_prop_adresse') . '<br><strong>Numéro SIRET</strong> : ' . get_option('mentions_legales_siret') . $rcs . $tva . $rm . '<br /><strong>Créateur</strong>  : <a href="' . get_option('mentions_legales_createur_url') . '">' . get_option('mentions_legales_createur') . '</a><br /><strong>Responsable publication</strong> : ' . get_option('mentions_legales_publication') . ' – ' . get_option('mentions_legales_publication_contact') . '<br />Le responsable publication est une personne physique ou une personne morale.<br /><strong>Webmaster</strong> : ' . get_option('mentions_legales_webmaster') . ' – ' . get_option('mentions_legales_webmaster_contact') . '<br /><strong>Hébergeur</strong> : ' . get_option('mentions_legales_hebergeur') . ' – ' . get_option('mentions_legales_hebergeur_adresse') . '<br /><strong>Crédits</strong> : les mentions légales ont été générées et offertes par JBA Development <a target="_blank" href="http://jba-development.fr">développeur de sites Wordpress à Bordeaux.</a>';
    
    // Seconde partie des mentions légales
    $second_part = '<h3>2. Conditions générales d’utilisation du site et des services proposés.</h3><p>L’utilisation du site ' . $default_link . ' implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site ' . $default_link . ' sont donc invités à les consulter de manière régulière.</p><p>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par ' . get_option('mentions_legales_webmaster') . ', qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.</p><p>Le site ' . $default_link . ' est mis à jour régulièrement par ' . get_option('mentions_legales_publication') . '. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>';
    
    // Troisième partie des mentions légales
    $third_part = '<h3>3. Description des services fournis.</h3><p>Le site ' . $default_link . ' a pour objet de fournir une information concernant l’ensemble des activités de la société.</p><p>' . get_option('mentions_legales_proprietaire') . ' s’efforce de fournir sur le site ' . $default_link . ' des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p><p>Tous les informations indiquées sur le site ' . $default_link . ' sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site ' . $default_link . ' ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>';
    
    // Quatrième partie des mentions légales
    $fourth_part = '<h3>4. Limitations contractuelles sur les données techniques.</h3><p>Le site utilise la technologie JavaScript.</p><p>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</p>';
    
    // Cinquième partie des mentions légales
    $fiveth_part = '<h3>5. Propriété intellectuelle et contrefaçons.</h3><p>' . get_option('mentions_legales_proprietaire') . ' est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p><p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : ' . get_option('mentions_legales_proprietaire') . '.</p><p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>';
    
    // Sixième partie des mentions légales
    $sixth_part = '<h3>6. Limitations de responsabilité.</h3><p>' . get_option('mentions_legales_proprietaire') . ' ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site ' . $default_link . ', et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p><p>' . get_option('mentions_legales_proprietaire') . ' ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site ' . $default_link . '.</p><p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. ' . get_option('mentions_legales_proprietaire') . ' se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, ' . get_option('mentions_legales_proprietaire') . ' se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>';
    
    // Septième partie des mentions légales
    $seventh_part = '<h3>7. Gestion des données personnelles.</h3><p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l\'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p><p>A l\'occasion de l\'utilisation du site ' . $default_link . ', peuvent êtres recueillies : l\'URL des liens par l\'intermédiaire desquels l\'utilisateur a accédé au site ' . $default_link . ', le fournisseur d\'accès de l\'utilisateur, l\'adresse de protocole Internet (IP) de l\'utilisateur.</p><p> En tout état de cause ' . get_option('mentions_legales_proprietaire') . ' ne collecte des informations personnelles relatives à l\'utilisateur que pour le besoin de certains services proposés par le site ' . $default_link . '. L\'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu\'il procède par lui-même à leur saisie. Il est alors précisé à l\'utilisateur du site ' . $default_link . ' l’obligation ou non de fournir ces informations.</p><p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p><p>Aucune information personnelle de l\'utilisateur du site ' . $default_link . ' n\'est publiée à l\'insu de l\'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l\'hypothèse du rachat de ' . get_option('mentions_legales_proprietaire') . ' et de ses droits permettrait la transmission des dites informations à l\'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l\'utilisateur du site ' . $default_link . '.</p>';
    
    // Partie CNIL des mentions légales
    if(get_option('mentions_legales_cnil') == "Oui") {
        $cnil = '<p>Le site est déclaré à la CNIL sous le numéro ' . get_option('mentions_legales_cnil_numero') . '.</p><p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>';
    } else {
        $cnil = '<p>Le site n\'est pas déclaré à la CNIL car il n\'exploite pas les données personnelles comme indiqué sur <a href="https://www.cnil.fr/fr/informatique-et-libertes-suis-je-concerne" target="_blank">cette page</a></p><p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>';
    }
    
    // Neuvième partie des mentions légales
    $eighth_part = '<h3>8. Liens hypertextes et cookies.</h3><p>Le site ' . $default_link . ' contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de ' . get_option('mentions_legales_proprietaire') . '. Cependant, ' . get_option('mentions_legales_proprietaire') . ' n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p><p>La navigation sur le site ' . $default_link . ' est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p><p>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p><p>Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</p><p>Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l\'onglet Options. Cliquer sur l\'onglet Vie privée. Paramétrez les Règles de conservation sur :  utiliser les paramètres personnalisés pour l\'historique. Enfin décochez-la pour  désactiver les cookies.</p><p>Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</p><p>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences.  Dans l\'onglet "Confidentialité", vous pouvez bloquer les cookies.</p>';
    
    // Première partie des mentions légales
    $nineth_part = '<h3>9. Droit applicable et attribution de juridiction.</h3><p>Tout litige en relation avec l’utilisation du site ' . $default_link . ' est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p><h3>10. Les principales lois concernées.</h3><p>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l\'informatique, aux fichiers et aux libertés.</p><p> Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique.</p><h3>11. Lexique.</h3><p>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p><p>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l\'identification des personnes physiques auxquelles elles s\'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>';
    
    // Assemblage des parties des mentions légales
    $mentions = $first_part . $second_part . $third_part . $fourth_part . $fiveth_part . $sixth_part . $seventh_part . $cnil . $eighth_part . $nineth_part;
    
    //Vérification que toutes les informations des mentions ont été saisies. Si non, affichage d'un message d'indisponibilité.
    if(Mentions_Legales::infos_completed()) {
        return $mentions;
    } else {
        return 'Mentions légales indisponibles.';
    }
    
    
}

/**
* Construit le texte des mentions légales particulier
*
* @since 1.2.0
*
*/
function mentions_legales_shortcode_part() {
    
    // Lien par défaut vers le site
    $default_link = '<a href="' . get_site_url() . '" title="' . get_option( 'mentions_legales_part_proprietaire' ) . ' - ' . get_bloginfo('name') .'">' . get_bloginfo('name') .'</a>';
    
    // Première partie des mentions légales
    $first_part = '<h3>1. Présentation du site.</h3><p>En vertu de l\'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique, il est précisé aux utilisateurs du site ' . $default_link . ' l\'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p><p><strong>Propriétaire</strong> : ' . get_option('mentions_legales_part_proprietaire') . ' – ' . get_option('mentions_legales_part_adresse') . '<br><strong>Contact du propriétaire</strong> : ' . get_option('mentions_legales_part_contact') . '<br /><strong>Hébergeur</strong> : ' . get_option('mentions_legales_part_heb_name') . ' – ' . get_option('mentions_legales_part_heb_adresse') . '<br /><strong>Contact de l\'hébergeur</strong> : ' . get_option('mentions_legales_part_heb_contact') . '<br /><strong>Crédits</strong> : les mentions légales ont été générées et offertes par JBA Development <a target="_blank" href="http://jba-development.fr">développeur de sites Wordpress à Bordeaux.</a>';
    
    // Seconde partie des mentions légales
    $second_part = '<h3>2. Conditions générales d’utilisation du site et des services proposés.</h3><p>L’utilisation du site ' . $default_link . ' implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site ' . $default_link . ' sont donc invités à les consulter de manière régulière.</p><p>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par ' . get_option('mentions_legales_part_proprietaire') . ', qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.</p><p>Le site ' . $default_link . ' est mis à jour régulièrement par ' . get_option('mentions_legales_part_proprietaire') . '. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>';
    
    // Troisième partie des mentions légales
    $third_part = '<h3>3. Limitations contractuelles sur les données techniques.</h3><p>Le site utilise la technologie JavaScript.</p><p>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</p>';
    
    // Quatrième partie des mentions légales
    $fourth_part = '<h3>4. Propriété intellectuelle et contrefaçons.</h3><p>' . get_option('mentions_legales_part_proprietaire') . ' est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p><p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : ' . get_option('mentions_legales_part_proprietaire') . '.</p><p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>';
    
    // Cinquième partie des mentions légales
    $fiveth_part = '<h3>5. Limitations de responsabilité.</h3><p>' . get_option('mentions_legales_part_proprietaire') . ' ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site ' . $default_link . ', et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p><p>' . get_option('mentions_legales_part_proprietaire') . ' ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site ' . $default_link . '.</p><p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. ' . get_option('mentions_legales_part_proprietaire') . ' se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, ' . get_option('mentions_legales_part_proprietaire') . ' se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>';
    
    // Sixième partie des mentions légales
    $sixth_part = '<h3>6. Gestion des données personnelles.</h3><p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l\'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p><p>A l\'occasion de l\'utilisation du site ' . $default_link . ', peuvent êtres recueillies : l\'URL des liens par l\'intermédiaire desquels l\'utilisateur a accédé au site ' . $default_link . ', le fournisseur d\'accès de l\'utilisateur, l\'adresse de protocole Internet (IP) de l\'utilisateur.</p><p> En tout état de cause ' . get_option('mentions_legales_part_proprietaire') . ' ne collecte des informations personnelles relatives à l\'utilisateur que pour le besoin de certains services proposés par le site ' . $default_link . '. L\'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu\'il procède par lui-même à leur saisie. Il est alors précisé à l\'utilisateur du site ' . $default_link . ' l’obligation ou non de fournir ces informations.</p><p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p><p>Aucune information personnelle de l\'utilisateur du site ' . $default_link . ' n\'est publiée à l\'insu de l\'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l\'hypothèse du rachat de ' . get_option('mentions_legales_part_proprietaire') . ' et de ses droits permettrait la transmission des dites informations à l\'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l\'utilisateur du site ' . $default_link . '.</p>';
    
    // Partie CNIL des mentions légales
    if(get_option('mentions_legales_part_cnil') == "Oui") {
        $cnil = '<p>Le site est déclaré à la CNIL sous le numéro ' . get_option('mentions_legales_part_cnil_numero') . '.</p><p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>';
    } else {
        $cnil = '<p>Le site n\'est pas déclaré à la CNIL car il n\'exploite pas les données personnelles comme indiqué sur <a href="https://www.cnil.fr/fr/informatique-et-libertes-suis-je-concerne" target="_blank">cette page</a></p><p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>';
    }
    
    // Septième partie des mentions légales
    $seventh_part = '<h3>7. Liens hypertextes et cookies.</h3><p>Le site ' . $default_link . ' contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de ' . get_option('mentions_legales_part_proprietaire') . '. Cependant, ' . get_option('mentions_legales_part_proprietaire') . ' n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p><p>La navigation sur le site ' . $default_link . ' est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p><p>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p><p>Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</p><p>Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l\'onglet Options. Cliquer sur l\'onglet Vie privée. Paramétrez les Règles de conservation sur :  utiliser les paramètres personnalisés pour l\'historique. Enfin décochez-la pour  désactiver les cookies.</p><p>Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</p><p>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences.  Dans l\'onglet "Confidentialité", vous pouvez bloquer les cookies.</p>';
    
    // Huitième partie des mentions légales
    $eighth_part = '<h3>8. Droit applicable et attribution de juridiction.</h3><p>Tout litige en relation avec l’utilisation du site ' . $default_link . ' est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p><h3>9. Les principales lois concernées.</h3><p>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l\'informatique, aux fichiers et aux libertés.</p><p> Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique.</p><h3>10. Lexique.</h3><p>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p><p>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l\'identification des personnes physiques auxquelles elles s\'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>';
    
    // Assemblage des parties des mentions légales
    $mentions = $first_part . $second_part . $third_part . $fourth_part . $fiveth_part . $sixth_part . $seventh_part . $cnil . $eighth_part;
    
    //Vérification que toutes les informations des mentions ont été saisies. Si non, affichage d'un message d'indisponibilité.
    if(Mentions_Legales::infos_completed()) {
        return $mentions;
    } else {
        return 'Mentions légales indisponibles.';
    }
    
}