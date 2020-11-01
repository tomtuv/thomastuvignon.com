export default function Parallax() {
  $(window).on("scroll", function () {
    const scrolled = $(window).scrollTop();

    $("#parallax-1").css("top", 0 - scrolled * 0.1 + "px");
    $("#parallax-2").css("top", 0 - scrolled * 0.2 + "px");
    $("#parallax-3").css("top", 0 - scrolled * 0.3 + "px");
    $("#parallax-4").css("top", 0 - scrolled * 0.4 + "px");
  });
}
