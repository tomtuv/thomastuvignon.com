// !Menu
if ($('header').hasClass('menu')) {
	$('.hamburger').click(function() {
		$(this).toggleClass('hamburger-ouvert').siblings('.menu-mobile').slideToggle();
		$('header').toggleClass('rectangle-deroulant');
	});
	$('nav a').click(function() {
		$('.hamburger-ouvert').toggleClass('hamburger-ouvert').siblings('.menu-mobile').slideToggle();
		$('.rectangle-deroulant').toggleClass('rectangle-deroulant');
	});
	if (matchMedia) {
		var mq = window.matchMedia("(min-width:992px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}
	
	function WidthChange(mq) {
		if (mq.matches) {
			$('.hamburger-ouvert').toggleClass('hamburger-ouvert').siblings('.menu-mobile').slideToggle();
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
			s2 = $('#realisations'),
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
}
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