<?php
$root = '../../';
$title = 'Paips';
$description = 'Application Paips pour sourds et malentendants.';
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
					<h2>Application Paips pour sourds et malentendants</h2>
					<p>Projet d’UX design, 2018</p>
					<ul>
						<li>Sketch : maquette graphique et prototype.</li>
					</ul>
					<a href="https://sketch.cloud/s/12AJy/nM5Y50/play" target="_blank" class="link">Voir le prototype</a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="paips-1.jpg">
					</figure>
				</div>
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="paips-2.jpg">
					</figure>
				</div>
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="paips-3.jpg">
					</figure>
				</div>
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="paips-4.jpg">
					</figure>
				</div>
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="paips-5.jpg">
					</figure>
				</div>
				<div class="col-lg-4 col-sm-6">
					<figure data-aos="fade-up">
						<img src="paips-6.jpg">
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