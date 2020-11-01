export default function Modal() {
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
}
