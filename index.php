<?php include 'snippets/head.php'; ?>

<header class="intro">
	<?php include 'snippets/bubbles.php'; ?>
	
	<div class="container">
		<div class="row">
			<div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
				<figure>
					<img src="images/thomas.jpg" alt="Thomas Tuvignon">
				</figure>
				<h1 class="titre-1">Thomas Tuvignon</h1>
				<p>Intégrateur web</p>
				<a href="#" class="link js-trigger-modal">Voir le CV vidéo</a>
			</div>
		</div>
	</div>
	
	<div class="video">
		<div class="container">
			<div class="row">
				<div class="col-xl-10 offset-xl-1">
					<a href="#" class="back close-video-modal">Retour</a>
					
					<video controls playsinline preload="none" poster="<?php echo $root ?>images/cv.jpg">
						<source src="videos/cv.mp4" type="video/mp4">
					</video>
				</div>
			</div>
		</div>

		<div class="overlay"></div>
	</div>
</header>

<section>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-6">
				<a href="realisations/easy-snowboards">
					<figure data-aos="fade-up">
						<img src="images/easy-snowboards.png" alt="Easy Snowboards">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/matra">
					<figure data-aos="fade-up">
						<img src="images/matra.png" alt="Matra">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/solex">
					<figure data-aos="fade-up">
						<img src="images/solex.png" alt="Solex">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/easybike">
					<figure data-aos="fade-up">
						<img src="images/easybike.png" alt="Easybike">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/easybike-group">
					<figure data-aos="fade-up">
						<img src="images/easybike-group.png" alt="Easybike Group">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/1991">
					<figure data-aos="fade-up">
						<img src="images/1991.png" alt="19.91">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/hudi">
					<figure data-aos="fade-up">
						<img src="images/hudi.png" alt="Hudi">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/michelin">
					<figure data-aos="fade-up">
						<img src="images/michelin.png" alt="Michelin">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/horse-pilot">
					<figure data-aos="fade-up">
						<img src="images/horse-pilot.png" alt="Horse Pilot">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/midi-life">
					<figure data-aos="fade-up">
						<img src="images/midi-life.png" alt="Midi Life">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/paips">
					<figure data-aos="fade-up">
						<img src="images/paips.png" alt="Paips">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/musee-de-la-mine">
					<figure data-aos="fade-up">
						<img src="images/musee-de-la-mine.png" alt="Musée de la Mine">
					</figure>
				</a>
			</div>
			
			<div class="col-lg-4 col-6">
				<a href="realisations/arize-leze">
					<figure data-aos="fade-up">
						<img src="images/arize-leze.png" alt="Arize-Lèze">
					</figure>
				</a>
			</div>
		</div>
	</div>
</section>

<?php include 'snippets/footer.php'; ?>
