<?php
$root = '../../';
$title = 'Horse Pilot';
$description = 'Site de la marque de vêtements d’équitation Horse Pilot.';
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
					<h2>Landing page Horse Pilot</h2>
					<p>Alternance chez Ultrō, 2018</p>
					<ul>
						<li>Webflow : intégration web.</li>
					</ul>
					<a href="https://www.horsepilot.com/rain-free" target="_blank" class="link">Voir la page</a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-12">
					<figure data-aos="fade-up">
						<img src="horse-pilot-1.jpg">
					</figure>
				</div>
			</div>
		</article>
		
		<article>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<h2>Agenda Facebook Horse Pilot</h2>
					<p>Alternance chez Ultrō, 2017</p>
					<ul>
						<li>Photoshop : maquette graphique.</li>
						<li>WordPress : développement web.</li>
					</ul>
					<a href="https://www.horsepilot.com/blog/fr/evenement" target="_blank" class="link">Voir l’agenda</a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-12">
					<figure data-aos="fade-up">
						<img src="horse-pilot-2.jpg">
					</figure>
				</div>
			</div>
		</article>
		
		<article>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<h2>Newsletter Horse Pilot</h2>
					<p>Alternance chez Ultrō, 2017</p>
					<ul>
						<li>MailChimp : intégration web.</li>
					</ul>
					<a href="https://www.horsepilot.com/newsletter.html" target="_blank" class="link">Voir le template</a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<figure data-aos="fade-up">
						<img src="horse-pilot-3.jpg">
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