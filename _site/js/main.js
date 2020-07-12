// Imports

import $ from "jquery";
import AOS from "aos";

// Animations

AOS.init({
	offset: 60,
	duration: 500,
	easing: 'ease-in-out'
});

// Bubbles

$(window).bind('scroll', function() {
	parallax_scroll();
});

function parallax_scroll() {
	var scrolled = $(window).scrollTop();
	$('#parallax-1').css('top', (0 - (scrolled * .1)) + 'px');
	$('#parallax-2').css('top', (0 - (scrolled * .2)) + 'px');
	$('#parallax-3').css('top', (0 - (scrolled * .3)) + 'px');
	$('#parallax-4').css('top', (0 - (scrolled * .4)) + 'px');
}

// Video

function toggle_video_modal() {
	$('.js-trigger-modal').on('click', function(event) {
		event.preventDefault();
		$('.video').fadeIn(250);
		$('body').addClass('show-video-modal');
		$('video')[0].play();
	});
	$('body').on('click', 'body, .close-video-modal, #video .overlay', function(event) {
		event.preventDefault();
		$('body').removeClass('show-video-modal');
		$('.video').fadeOut(250);
		$('video')[0].pause();
	});
}
toggle_video_modal();