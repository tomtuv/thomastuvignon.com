export default function Modal() {
  document
    .querySelector("[data-open-modal]")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".video").classList.add("active");
      document.querySelector("video").play();
    });

  document
    .querySelector("[data-close-modal]")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".video").classList.remove("active");
      document.querySelector("video").pause();
    });
}
