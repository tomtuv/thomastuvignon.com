<?php
$root = '../../';
$title = 'Musée de la Mine';
$description = 'Wireframe, maquette graphique et développement web.';
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
					<h2>Site du Musée de la Mine de Gréasque</h2>
					<p>Projet tutoré, 2016</p>
					<ul>
						<li>Sketch : wireframe et maquette graphique.</li>
						<li>WordPress : développement web.</li>
					</ul>
					<a href="<?php echo $root; ?>sites/musee-de-la-mine" target="_blank" class="link">Voir le site web</a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-8">
					<figure data-aos="fade-up">
						<img src="musee-de-la-mine-1.jpg">
					</figure>
				</div>
				<div class="col-md-4">
					<figure data-aos="fade-up">
						<img src="musee-de-la-mine-2.jpg">
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