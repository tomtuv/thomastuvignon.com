<?php
$root = '../../';
$title = 'Easy Snowboards';
$description = 'Site de la marque Easy Snowboards.';
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
					<h2>Site de la marque Easy Snowboards</h1>
					<p>Ultrō, 2019</p>
					<ul>
						<li>Shopify : intégration et développement web.</li>
					</ul>
					<a href="https://easyboardcompany.com" target="_blank" class="link">Voir le site web</a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-12">
					<figure data-aos="fade-up">
						<img src="easy-snowboards-1.jpg">
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