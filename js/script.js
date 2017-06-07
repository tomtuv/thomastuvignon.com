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
(function() {
	"use strict";
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		canvasWidth = canvas.width = window.innerWidth,
		canvasHeight = canvas.height = window.innerHeight;
	var mouseX, mouseY, pop = false,
		attract = false;
	var mouseOver = function(x, y, radius) {
			var diffX = mouseX - x;
			var diffY = mouseY - y;
			if (diffX < radius && diffX > (radius * -1) && diffY < radius && diffY > (radius * -1)) {
				return true;
			}
			return false;
		}
	var randomNum = function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};
	var changeSettings = function(setting, min, max, prob) {
			var chance = randomNum(0, prob);
			if (setting < min || chance === 1) {
				return 1;
			} else if (setting > max || chance === 2) {
				return -1;
			} else {
				return 0;
			}
		};
	var bubbles = [],
		count = 0,
		maxCount = 20,
		maxSize = 60,
		minSize = 20,
		minSpeed = 5,
		maxSpeed = 10,
		bgcolor = '#31185A',
		colors = [{
			rgba: 'rgba(245, 144, 0, 0.75)'
		}, {
			rgba: 'rgba(234, 255, 0, 0.75)'
		}, {
			rgba: 'rgba(151, 2, 232, 0.75)'
		}, {
			rgba: 'rgba(0, 200, 255, 0.75)'
		}, {
			rgba: 'rgba(0, 191, 36, 0.75)'
		}];
	var Bubble = function(x, y, size) {
			this.id = count + 1;
			this.x = x || randomNum(0, canvasWidth);
			this.y = y || randomNum(0, canvasHeight);
			this.radius = size || randomNum(minSize, maxSize);
			this.color = colors[randomNum(0, colors.length - 1)];
			this.speed = randomNum(minSpeed, maxSpeed) / 10;
			this.speedBackup = this.speed;
			this.directionX = randomNum(-1, 1) || 1;
			this.directionY = randomNum(-1, 1) || 1;
			this.flicker = 0;
			count++;
			bubbles[count] = this;
		};
	Bubble.prototype.destroy = function() {
		var popCount = this.radius / 10 > 0 ? this.radius / 10 : 2;
		for (var i = 0; i < popCount; i++) {
			new Bubble(this.x, this.y, randomNum(this.radius / 4, this.radius / 2));
		}
		this.radius = randomNum(this.radius / 4, this.radius / 2);
		this.color = colors[randomNum(0, colors.length - 1)];
	};
	Bubble.prototype.draw = function() {
		this.directionX = changeSettings(this.x, 0, canvasWidth, 500) || this.directionX;
		this.directionY = changeSettings(this.y, 0, canvasHeight, 500) || this.directionY;
		this.speed = this.speedBackup;
		if (attract === true && mouseOver(this.x, this.y, 200)) {
			var moveTowardMouse = randomNum(0, 15);
			if (moveTowardMouse === 5) {
				this.directionX = mouseX - this.x > 0 ? 1 : -1;
			} else if (moveTowardMouse === 1) {
				this.directionY = mouseY - this.y > 0 ? 1 : -1;
			}
			this.speed = 1.25;
		}
		this.x += this.speed * this.directionX;
		this.y += this.speed * this.directionY;
		ctx.save();
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.fillStyle = this.color.rgba;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
		if (pop === true && mouseOver(this.x, this.y, this.radius)) {
			bubbles[this.id].destroy();
			pop = false;
		}
	};
	for (var i = 0; i < maxCount; i++) {
		new Bubble();
	}
	var animate = function() {
			ctx.fillStyle = bgcolor;
			ctx.fillRect(0, 0, canvasWidth, canvasHeight);
			for (var i = 1; i <= count; i++) {
				bubbles[i].draw();
			}
			requestAnimationFrame(animate);
		};
	requestAnimationFrame(animate);
	canvas.addEventListener('click', function(e) {
		new Bubble(e.pageX, e.pageY);
	});
	canvas.addEventListener('contextmenu', function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
		pop = true;
		e.preventDefault();
	});
	var startAttracting;
	canvas.addEventListener('mousedown', function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
		clearTimeout(startAttracting);
		startAttracting = setTimeout(function() {
			return attract = true;
		}, 500);
	});
	canvas.addEventListener('mousemove', function(e) {
		if (attract) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		}
	});
	canvas.addEventListener('mouseup', function(e) {
		clearTimeout(startAttracting);
		attract = false;
	});
	var resizing;
	window.addEventListener('resize', function() {
		clearTimeout(resizing);
		resizing = setTimeout(function() {
			canvasWidth = canvas.width = window.innerWidth;
			canvasHeight = canvas.height = window.innerHeight;
		}, 500);
	});
}());
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
			'subHtml': '<p>Maquette du site du Musée de la mine de Gréasque réalisée dans le cadre de mon deuxième projet tutoré de licence professionnelle. <a href="sites/musee-de-la-mine" target="_blank">Voir le site web ›</a></p>'
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
			'subHtml': '<p>Maquette de la web app de l’office de tourisme Arize-Lèze réalisée dans le cadre de mon premier projet tutoré de licence professionnelle. <a href="sites/arize-leze" target="_blank">Voir le prototype HTML ›</a></p>'
		}, {
			'src': 'img/realisations/arize-leze/02.jpg'
		}, {
			'src': 'img/realisations/arize-leze/03.jpg'
		}],
		speed: 500,
	})
});