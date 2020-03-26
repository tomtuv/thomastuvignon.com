<!DOCTYPE html>

<html lang="fr">
	<head>
		<title><?php if (isset($title)) echo $title . ' | Thomas Tuvignon – Intégrateur web chez Ultrō'; else echo 'Thomas Tuvignon – Intégrateur web chez Ultrō'; ?></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php if (isset($description)) echo $description; else echo 'Intégration web. Design graphique. Motion design. Prototypage.'; ?>">
		<meta property="og:title" content="<?php if (isset($title)) echo $title . ' | Thomas Tuvignon – Intégrateur web chez Ultrō'; else echo 'Thomas Tuvignon – Intégrateur web chez Ultrō'; ?>">
		<meta property="og:description" content="<?php if (isset($description)) echo $description; else echo 'Intégration web. Design graphique. Motion design. Prototypage.'; ?>">
		<meta property="og:image" content="https://thomastuvignon.com/images/cv.jpg">
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="<?php if (isset($title)) echo $title . ' | Thomas Tuvignon – Intégrateur web chez Ultrō'; else echo 'Thomas Tuvignon – Intégrateur web chez Ultrō'; ?>">
		<meta name="twitter:description" content="<?php if (isset($description)) echo $description; else echo 'Intégration web. Design graphique. Motion design. Prototypage.'; ?>">
		<meta name="twitter:image" content="https://thomastuvignon.com/images/cv.jpg">
		<link rel="apple-touch-icon" href="<?php echo $root; ?>images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo $root ?>images/favicon.png">
		<link rel="stylesheet" href="<?php echo $root; ?>css/bootstrap-grid.min.css">
		<link rel="stylesheet" href="<?php echo $root; ?>css/aos.css">
		<link rel="stylesheet" href="<?php echo $root; ?>css/style.css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700">
		<script src="https://use.fontawesome.com/8a847f2d70.js"></script>
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-83807816-2"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			
			gtag('config', 'UA-83807816-2');
		</script>
	</head>
	
	<body>