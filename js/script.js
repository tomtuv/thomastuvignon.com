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