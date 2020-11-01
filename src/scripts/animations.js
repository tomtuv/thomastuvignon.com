import AOS from "aos";

export default function Animations() {
  AOS.init({
    offset: 60,
    duration: 500,
    easing: "ease-in-out",
  });
}
