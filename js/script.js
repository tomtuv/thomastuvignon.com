// !Menu
$('#hamburger').click(function() {
	$(this).toggleClass('ouvert').siblings('#menu-mobile').slideToggle();
	$('header').toggleClass('rectangle-deroulant');
});
$('nav a').click(function() {
	$('#hamburger.ouvert').toggleClass('ouvert').siblings('#menu-mobile').slideToggle();
	$('.rectangle-deroulant').toggleClass('rectangle-deroulant');
});
if (matchMedia) {
	var mq = window.matchMedia("(min-width:992px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

function WidthChange(mq) {
	if (mq.matches) {
		$('#hamburger.ouvert').toggleClass('ouvert').siblings('#menu-mobile').slideToggle();
		$('.rectangle-deroulant').toggleClass('rectangle-deroulant');
	}
}
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function(event) {
	didScroll = true;
});
setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();
	if (Math.abs(lastScrollTop - st) <= delta) return;
	if (st > lastScrollTop && st > navbarHeight) {
		$('header').removeClass('menu-visible').addClass('menu-invisible');
	} else {
		if (st + $(window).height() < $(document).height()) {
			$('header').removeClass('menu-invisible').addClass('menu-visible');
		}
	}
	lastScrollTop = st;
}
$(window).scroll(function(e) {
	var s1 = $('#thomas'),
		s2 = $('#parcours'),
		menu = $('header'),
		diff = s1[0].offsetTop - window.pageYOffset;
	diff2 = s2[0].offsetTop - window.pageYOffset;
	if (diff < 60) {
		$("header").addClass("menu-texte");
		$("header").removeClass("menu-rectangle");
	}
	if (diff2 < 60) {
		$("header").addClass("menu-rectangle");
		$("header").removeClass("menu-texte");
	}
});
// !Bulles
$(window).bind('scroll', function(e) {
	parallaxScroll();
});

function parallaxScroll() {
	var scrolled = $(window).scrollTop();
	$('#parallax-1').css('top', (0 - (scrolled * .1)) + 'px');
	$('#parallax-2').css('top', (0 - (scrolled * .2)) + 'px');
	$('#parallax-3').css('top', (0 - (scrolled * .3)) + 'px');
	$('#parallax-4').css('top', (0 - (scrolled * .4)) + 'px');
}
// !Vidéo
$(document).ready(function() {
	function toggle_video_modal() {
		$(".js-trigger-modal").on("click", function(event) {
			event.preventDefault();
			$("body").addClass("show-video-modal");
			$("video")[0].play();
		});
		$('body').on('click', 'body, .close-video-modal, #video .overlay', function(event) {
			event.preventDefault();
			$("body").removeClass("show-video-modal");
			$("video")[0].pause();
		});
	}
	toggle_video_modal();
});
// !Galeries
$('#michelin').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/michelin/maquette-1.jpg',
			'subHtml': '<p>Ultrō : intégration de contenu et design de vignettes pour le site Michelin Brands Center.</p>'
		}, {
			'src': 'images/realisations/michelin/maquette-2.jpg',
			'subHtml': '<p>Ultrō : design du module de téléchargement pour le site Michelin Brands Center.</p>'
		}],
		speed: 500,
	})
});
$('#horse-pilot').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/horse-pilot/maquette-1.jpg',
			'subHtml': '<p>Ultrō : intégration d’une landing page Horse Pilot. <a href="https://www.horsepilot.com/rain-free" target="_blank">Voir la page<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}, {
			'src': 'images/realisations/horse-pilot/maquette-2.jpg',
			'subHtml': '<p>Ultrō : design et intégration de l’agenda Facebook Horse Pilot. <a href="https://www.horsepilot.com/blog/evenement" target="_blank">Voir l’agenda<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}, {
			'src': 'images/realisations/horse-pilot/maquette-3.jpg',
			'subHtml': '<p>Ultrō : intégration de la newsletter Horse Pilot. <a href="https://www.horsepilot.com/newsletter.html" target="_blank">Voir la newsletter<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}],
		speed: 500,
	})
});
$('#1991').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/1991/maquette-1.jpg',
			'subHtml': '<p>Ultrō : design et intégration du site 19.91. <a href="http://1991denim.com" target="_blank">Voir le site web<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}],
		speed: 500,
	})
});
$('#hudi').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/hudi/maquette-1.jpg',
			'subHtml': '<p>Ultrō : design et intégration de pages du site Hudi. <a href="https://hudi.fr" target="_blank">Voir le site web<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}],
		speed: 500,
	})
});
$('#matra').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/matra/maquette-1.jpg',
			'subHtml': '<p>Ultrō : design de pages et développement du site Matra. <a href="http://matra.com" target="_blank">Voir le site web<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}],
		speed: 500,
	})
});
$('#solex').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/solex/maquette-1.jpg',
			'subHtml': '<p>Ultrō : design de pages et développement du site Solex. <a href="https://solex.world" target="_blank">Voir le site web<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}],
		speed: 500,
	})
});
$('#thematis-conseil').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/thematis-conseil/maquette-1.jpg',
			'subHtml': '<p>Ultrō : gestion de projet, prototypage, design et intégration du site Thematis Conseil. <a href="http://www.thematisconseil.com" target="_blank">Voir le site web<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}],
		speed: 500,
	})
});
$('#flagship').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/flagship/maquette-1.jpg',
			'subHtml': '<p>Ultrō : intégration du site de présentation du programme Flagship d’Ultrō. <a href="https://flagship.solutions/presentation" target="_blank">Voir le site web<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}],
		speed: 500,
	})
});
$('#midi-life').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/midi-life/maquette-1.jpg',
			'subHtml': '<p>Hackathon Midi libre : design de l’application Midi Life.</p>'
		}, {
			'src': 'images/realisations/midi-life/maquette-2.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-3.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-4.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-5.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-6.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-7.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-8.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-9.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-10.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-11.jpg'
		}, {
			'src': 'images/realisations/midi-life/maquette-12.jpg'
		}],
		speed: 500,
	})
});
$('#stella-babyfoot').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/stella-babyfoot/maquette-1.jpg',
			'subHtml': '<p>Projet : design du site Stella Baby-Foot.</p>'
		}],
		speed: 500,
	})
});
$('#paips').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/paips/maquette-1.jpg',
			'subHtml': '<p>Projet : design et prototypage de l’application Paips pour sourds et malentendants. <a href="https://sketch.cloud/s/12AJy/all/page-1/paips-splash-screen/play" target="_blank">Voir le prototype<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}, {
			'src': 'images/realisations/paips/maquette-2.jpg'
		}, {
			'src': 'images/realisations/paips/maquette-3.jpg'
		}, {
			'src': 'images/realisations/paips/maquette-4.jpg'
		}, {
			'src': 'images/realisations/paips/maquette-5.jpg'
		}, {
			'src': 'images/realisations/paips/maquette-6.jpg'
		}],
		speed: 500,
	})
});
$('#higgins').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/higgins/maquette-1.jpg',
			'subHtml': '<p>CPME Camp : design de l’application de menu numérique et d’assistant personnel Higgins.</p>'
		}, {
			'src': 'images/realisations/higgins/maquette-2.jpg'
		}, {
			'src': 'images/realisations/higgins/maquette-3.jpg'
		}, {
			'src': 'images/realisations/higgins/maquette-4.jpg'
		}],
		speed: 500,
	})
});
$('#wheel').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/wheel/maquette-1.jpg',
			'subHtml': '<p>Projet : design du site et de l’application Wheel.</p>'
		}, {
			'src': 'images/realisations/wheel/maquette-2.jpg'
		}, {
			'src': 'images/realisations/wheel/maquette-3.jpg'
		}, {
			'src': 'images/realisations/wheel/maquette-4.jpg'
		}, {
			'src': 'images/realisations/wheel/maquette-5.jpg'
		}, {
			'src': 'images/realisations/wheel/maquette-6.jpg'
		}, {
			'src': 'images/realisations/wheel/maquette-7.jpg'
		}, {
			'src': 'images/realisations/wheel/maquette-8.jpg'
		}],
		speed: 500,
	})
});
$('#musee-de-la-mine').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/musee-de-la-mine/maquette-1.jpg',
			'subHtml': '<p>Projet : prototypage, design et développement du site du Musée de la mine de Gréasque. <a href="sites/musee-de-la-mine" target="_blank">Voir le site web<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}],
		speed: 500,
	})
});
$('#arize-leze').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'images/realisations/arize-leze/maquette-1.jpg',
			'subHtml': '<p>Projet : design et intégration de la web app de l’office de tourisme d’Arize-Lèze. <a href="sites/arize-leze" target="_blank">Voir la découpe HTML<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}, {
			'src': 'images/realisations/arize-leze/maquette-2.jpg'
		}, {
			'src': 'images/realisations/arize-leze/maquette-3.jpg'
		}],
		speed: 500,
	})
});