export default function Parallax() {
  window.addEventListener("scroll", function () {
    const scrolled =
      window.scrollY ||
      window.scrollTop ||
      document.querySelector("html").scrollTop;

    document.querySelector("#parallax-1").style = `top: ${
      0 - scrolled * 0.1
    }px`;
    document.querySelector("#parallax-2").style = `top: ${
      0 - scrolled * 0.2
    }px`;
    document.querySelector("#parallax-3").style = `top: ${
      0 - scrolled * 0.3
    }px`;
    document.querySelector("#parallax-4").style = `top: ${
      0 - scrolled * 0.4
    }px`;
  });
}
