export default function Modal() {
  const openButton = document.querySelector("[data-open-modal]");
  const closeButton = document.querySelector("[data-close-modal]");

  openButton &&
    openButton.addEventListener("click", function () {
      document.querySelector(".video").classList.add("active");
      document.querySelector("video").play();
    });

  closeButton &&
    closeButton.addEventListener("click", function () {
      document.querySelector(".video").classList.remove("active");
      document.querySelector("video").pause();
    });
}
