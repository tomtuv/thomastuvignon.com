// !Menu
$('#hamburger').click(function() {
	$(this).toggleClass('ouvert').siblings('#menu-mobile').slideToggle();
	$('nav').toggleClass('rectangle-deroulant');
});
$('nav a').click(function() {
	$('#hamburger.ouvert').toggleClass('ouvert').siblings('#menu-mobile').slideToggle();
	$('.rectangle-deroulant').toggleClass('rectangle-deroulant');
});
if (matchMedia) {
	var mq = window.matchMedia("(min-width: 840px)");
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
var navbarHeight = $('nav').outerHeight();
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
		$('nav').removeClass('menu-visible').addClass('menu-invisible');
	} else {
		if (st + $(window).height() < $(document).height()) {
			$('nav').removeClass('menu-invisible').addClass('menu-visible');
		}
	}
	lastScrollTop = st;
}
$(window).scroll(function(e) {
	var s1 = $('#thomas'),
		s2 = $('#parcours'),
		menu = $('nav'),
		diff = s1[0].offsetTop - window.pageYOffset;
	diff2 = s2[0].offsetTop - window.pageYOffset;
	if (diff < 60) {
		$("nav").addClass("menu-texte");
		$("nav").removeClass("menu-rectangle");
	}
	if (diff2 < 60) {
		$("nav").addClass("menu-rectangle");
		$("nav").removeClass("menu-texte");
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
	$('#thomas a').click(function() {
		var id = $(this).attr('data-youtube-id');
		var autoplay = '?autoplay=1';
		var related_no = '&rel=0';
		var src = '//www.youtube.com/embed/' + id + autoplay + related_no;
		$("#youtube").attr('src', src);
		return false;
	});

	function toggle_video_modal() {
		$(".js-trigger-modal").on("click", function(event) {
			event.preventDefault();
			$("body").addClass("show-video-modal");
		});
		$('body').on('click', 'body, .close-video-modal, .video-modal .overlay', function(event) {
			event.preventDefault();
			$("body").removeClass("show-video-modal");
			$("#youtube").attr('src', '');
		});
	}
	toggle_video_modal();
});
// !Galeries
$('#wheel').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/realisations/wheel/01.jpg',
			'subHtml': '<p>Maquette du site et de l’application Wheel pour une marque de vélo fictive réalisée dans le cadre de mon partiel de web design.</p>'
		}, {
			'src': 'img/realisations/wheel/02.jpg'
		}, {
			'src': 'img/realisations/wheel/03.jpg'
		}, {
			'src': 'img/realisations/wheel/04.jpg'
		}, {
			'src': 'img/realisations/wheel/05.jpg'
		}, {
			'src': 'img/realisations/wheel/06.jpg'
		}, {
			'src': 'img/realisations/wheel/07.jpg'
		}, {
			'src': 'img/realisations/wheel/08.jpg'
		}],
		speed: 500,
	})
});
$('#midi-life').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/realisations/midi-life/01.jpg',
			'subHtml': '<p>Maquette de l’application Midi Life réalisée dans le cadre du hackathon organisé conjointement par l’école Digital Campus et le journal Midi libre.</p>'
		}, {
			'src': 'img/realisations/midi-life/02.jpg'
		}, {
			'src': 'img/realisations/midi-life/03.jpg'
		}, {
			'src': 'img/realisations/midi-life/04.jpg'
		}, {
			'src': 'img/realisations/midi-life/05.jpg'
		}, {
			'src': 'img/realisations/midi-life/06.jpg'
		}, {
			'src': 'img/realisations/midi-life/07.jpg'
		}, {
			'src': 'img/realisations/midi-life/08.jpg'
		}, {
			'src': 'img/realisations/midi-life/09.jpg'
		}, {
			'src': 'img/realisations/midi-life/10.jpg'
		}, {
			'src': 'img/realisations/midi-life/11.jpg'
		}, {
			'src': 'img/realisations/midi-life/12.jpg'
		}],
		speed: 500,
	})
});
$('#musee-de-la-mine').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/realisations/musee-de-la-mine/01.jpg',
			'subHtml': '<p>Maquette et site du Musée de la mine de Gréasque réalisés dans le cadre de mon deuxième projet tutoré de licence professionnelle. <a href="sites/musee-de-la-mine" target="_blank">Voir le site web<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}, {
			'src': 'img/realisations/musee-de-la-mine/02.jpg'
		}, {
			'src': 'img/realisations/musee-de-la-mine/03.jpg'
		}, {
			'src': 'img/realisations/musee-de-la-mine/04.jpg'
		}, {
			'src': 'img/realisations/musee-de-la-mine/05.jpg'
		}],
		speed: 500,
	})
});
$('#bron').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/realisations/bron/01.jpg',
			'subHtml': '<p>Maquette du site de la ville de Bron réalisée en stage dans le cadre d’une réponse à un appel d’offre.</p>'
		}, {
			'src': 'img/realisations/bron/02.jpg'
		}],
		speed: 500,
	})
});
$('#arize-leze').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/realisations/arize-leze/01.jpg',
			'subHtml': '<p>Maquette et web app de l’office de tourisme Arize-Lèze réalisés dans le cadre de mon premier projet tutoré de licence professionnelle. <a href="sites/arize-leze" target="_blank">Voir le prototype HTML<i class="fa fa-angle-right" aria-hidden="true"></i></a></p>'
		}, {
			'src': 'img/realisations/arize-leze/02.jpg'
		}, {
			'src': 'img/realisations/arize-leze/03.jpg'
		}],
		speed: 500,
	})
});