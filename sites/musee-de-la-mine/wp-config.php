<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'musee-de-la-mine');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'medusacascade');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', '127.0.0.1');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'c*l9yuz5XP,*>no0|B?VN!k[u:1A7MxCmRK)?JAgd=`)K1$DjMRw5V>bl*+oVv%f');
define('SECURE_AUTH_KEY',  'uDFw/n7i0-G@w}_0q#kkuCtezy[WT|jeK`nZK1Umx,BKQt9PX/UAK$1TXUH+ADvX');
define('LOGGED_IN_KEY',    'hGQKQ3foF%%@=ijWZUBT5HZeE2}T.>_Cm*IwUtbVPrzN nxgyAA5Ut9x$ND.=e1c');
define('NONCE_KEY',        'dDY;=]NjB?_UJNZaUoI+sexEp?,cWQO@Hd?tn4`!<0KX>EAJaOFBKybG&AY5LS?a');
define('AUTH_SALT',        '[U}@A;%9f8e[U&=CWrW)g;qO<H4pJIa:riI8>7=GT:@1OBM3.%1=bNdEX++!0SAe');
define('SECURE_AUTH_SALT', 'tf,sb6nB^r4p-Y@+Kg1u7a+Ma{gSnS&V7x42e[-+ns0:/I=+4tfhYAn,S^^}43DA');
define('LOGGED_IN_SALT',   'u z`v_KX63vc~;U>y^?FW! 0H1L8{7!](J5w,1$e@*TU.VONa@Y}u{t^sG2bq6K;');
define('NONCE_SALT',       'g2Hk)&/&C-FOf^0b__`EYPQEC2Fq&J5lHjW]8OIWNj4Q@D~kmzJR Opdee^oJmXn');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d'information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define('FS_METHOD', 'direct');

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');