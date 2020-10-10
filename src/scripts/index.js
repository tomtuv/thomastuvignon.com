import $ from "jquery";
import AOS from "aos";

AOS.init({
  offset: 60,
  duration: 500,
  easing: "ease-in-out",
});

$(window).on("scroll", function () {
  var scrolled = $(window).scrollTop();

  $("#parallax-1").css("top", 0 - scrolled * 0.1 + "px");
  $("#parallax-2").css("top", 0 - scrolled * 0.2 + "px");
  $("#parallax-3").css("top", 0 - scrolled * 0.3 + "px");
  $("#parallax-4").css("top", 0 - scrolled * 0.4 + "px");
});

$("[data-open-modal]").on("click", function (event) {
  event.preventDefault();
  $(".video").fadeIn(250);
  $("video")[0].play();
});

$("[data-close-modal]").on("click", function (event) {
  event.preventDefault();
  $(".video").fadeOut(250);
  $("video")[0].pause();
});
