<?php
$root = '../../';
$title = 'Arize-Lèze';
$description = 'Web app de l’office de tourisme d’Arize-Lèze.';
?>

<?php include $root . 'snippets/head.php'; ?>

<header class="header">
	<?php include $root . 'snippets/bubbles.php'; ?>
	
	<div class="container">
		<div class="row">
			<div class="col-lg-10 offset-lg-1">
				<a href="<?php echo $root; ?>" class="back">Thomas Tuvignon</a>
				<h1><?php echo $title; ?></h1>
			</div>
		</div>
	</div>
</header>
	
<section class="section">
	<div class="container">
		<article>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<h2>Web app de l’office de tourisme d’Arize-Lèze</h2>
					<p>Projet tutoré, 2016</p>
					<ul>
						<li>Photoshop : maquette graphique.</li>
						<li>HTML/CSS : intégration web.</li>
					</ul>
					<a href="<?php echo $root; ?>sites/arize-leze" target="_blank" class="link">Voir la web app</a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="arize-leze-1.jpg">
					</figure>	
				</div>
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="arize-leze-2.jpg">
					</figure>
				</div>
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="arize-leze-3.jpg">
					</figure>
				</div>
			</div>
		</article>
				
		<footer>
			<a href="<?php echo $root; ?>" class="back">Retour</a>
		</footer>
	</div>
</section>

<?php include $root . 'snippets/footer.php'; ?>