// !Parallax
if ("ontouchstart" in window) {
	document.documentElement.className = document.documentElement.className + " touch";
}
if (!$("html").hasClass("touch")) {
	$(".parallax").css("background-attachment", "fixed");
}

function fullscreenFix() {
	var h = $('body').height();
	$(".content-b").each(function(i) {
		if ($(this).innerHeight() > h) {
			$(this).closest(".fullscreen").addClass("overflow");
		}
	});
}
$(window).resize(fullscreenFix);
fullscreenFix();

function backgroundResize() {
	var windowH = $(window).height();
	$(".background").each(function(i) {
		var path = $(this);
		var contW = path.width();
		var contH = path.height();
		var imgW = path.attr("data-img-width");
		var imgH = path.attr("data-img-height");
		var ratio = imgW / imgH;
		var diff = parseFloat(path.attr("data-diff"));
		diff = diff ? diff : 0;
		var remainingH = 0;
		if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
			var maxH = contH > windowH ? contH : windowH;
			remainingH = windowH - contH;
		}
		imgH = contH + remainingH + diff;
		imgW = imgH * ratio;
		if (contW > imgW) {
			imgW = contW;
			imgH = imgW / ratio;
		}
		path.data("resized-imgW", imgW);
		path.data("resized-imgH", imgH);
		path.css("background-size", imgW + "px " + imgH + "px");
	});
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

function parallaxPosition(e) {
	var heightWindow = $(window).height();
	var topWindow = $(window).scrollTop();
	var bottomWindow = topWindow + heightWindow;
	var currentWindow = (topWindow + bottomWindow) / 2;
	$(".parallax").each(function(i) {
		var path = $(this);
		var height = path.height();
		var top = path.offset().top;
		var bottom = top + height;
		if (bottomWindow > top && topWindow < bottom) {
			var imgW = path.data("resized-imgW");
			var imgH = path.data("resized-imgH");
			var min = 0;
			var max = -imgH + heightWindow;
			var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow;
			top = top - overflowH;
			bottom = bottom + overflowH;
			var value = min + (max - min) * (currentWindow - top) / (bottom - top);
			var orizontalPosition = path.attr("data-oriz-pos");
			orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
			$(this).css("background-position", orizontalPosition + " " + value + "px");
		}
	});
}
if (!$("html").hasClass("touch")) {
	$(window).resize(parallaxPosition);
	$(window).scroll(parallaxPosition);
	parallaxPosition();
}
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
		s3 = $('#plus'),
		menu = $('nav'),
		diff = s1[0].offsetTop - window.pageYOffset;
	diff2 = s2[0].offsetTop - window.pageYOffset;
	diff3 = s3[0].offsetTop - window.pageYOffset;
	if (diff < 60) {
		$("nav").addClass("menu-texte");
		$("nav").removeClass("menu-rectangle");
	}
	if (diff2 < 60) {
		$("nav").addClass("menu-rectangle");
		$("nav").removeClass("menu-texte");
	}
	if (diff3 < 60) {
		$("nav").addClass("menu-texte");
		$("nav").removeClass("menu-rectangle");
	}
});
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
$('#midi-life').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/creations/midi-life/01.jpg'
		}, {
			'src': 'img/creations/midi-life/02.jpg'
		}, {
			'src': 'img/creations/midi-life/03.jpg'
		}, {
			'src': 'img/creations/midi-life/04.jpg'
		}, {
			'src': 'img/creations/midi-life/05.jpg'
		}, {
			'src': 'img/creations/midi-life/06.jpg'
		}, {
			'src': 'img/creations/midi-life/07.jpg'
		}, {
			'src': 'img/creations/midi-life/08.jpg'
		}, {
			'src': 'img/creations/midi-life/09.jpg'
		}, {
			'src': 'img/creations/midi-life/10.jpg'
		}, {
			'src': 'img/creations/midi-life/11.jpg'
		}, {
			'src': 'img/creations/midi-life/12.jpg'
		}],
		speed: 500,
		hideBarsDelay: 1000
	})
});
$('#arize-leze').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/creations/arize-leze/01.jpg'
		}, {
			'src': 'img/creations/arize-leze/02.jpg'
		}, {
			'src': 'img/creations/arize-leze/03.jpg'
		}, {
			'subHtml': '<a href="sites/arize-leze" target="_blank">Voir le prototype</a>'
		}],
		speed: 500,
		hideBarsDelay: 1000
	})
});
$('#musee-de-la-mine').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/creations/musee-de-la-mine/01.jpg'
		}, {
			'src': 'img/creations/musee-de-la-mine/02.jpg'
		}, {
			'subHtml': '<a href="sites/musee-de-la-mine" target="_blank">Voir le site web</a>'
		}],
		speed: 500,
		hideBarsDelay: 1000
	})
});
$('#bron').on('click', function() {
	$(this).lightGallery({
		dynamic: true,
		dynamicEl: [{
			'src': 'img/creations/bron/01.jpg'
		}, {
			'src': 'img/creations/bron/02.jpg'
		}, {
			'src': 'img/creations/bron/03.jpg'
		}],
		speed: 500,
		hideBarsDelay: 1000
	})
});