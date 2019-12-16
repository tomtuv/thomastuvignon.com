<?php
$root = '../../';
$title = 'Michelin';
$description = 'Site de ressources marketing Michelin Brands Center.';
?>

<?php include $root . 'snippets/head.php'; ?>

<header>
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
	
<section>
	<div class="container">
		<article>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<h2>Site de ressources marketing Michelin Brands Center</h2>
					<p>Alternance chez Ultrō, 2017-2018</p>
					<ul>
						<li>WordPress : saisie de contenu.</li>
						<li>Photoshop : création de vignettes.</li>
					</ul>
				</div>
			</div>
			
			<div class="row">
				<div class="col-12">
					<figure data-aos="fade-up">
						<img src="michelin-1.jpg">
					</figure>
				</div>
			</div>
		</article>
		
		<article>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<h2>Module de téléchargement du site Michelin Brands Center</h2>
					<p>Alternance chez Ultrō, 2018</p>
					<ul>
						<li>Sketch : maquette graphique.</li>
					</ul>
				</div>
			</div>
			
			<div class="row">
				<div class="col-12">
					<figure data-aos="fade-up">
						<img src="michelin-2.jpg">
					</figure>
				</div>
			</div>
		</article>
				
		<p><a href="<?php echo $root; ?>" class="back">Retour</a></p>
	</div>
</section>

<?php include $root . 'snippets/footer.php'; ?>