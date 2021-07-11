import { useRef, useEffect } from "react";

export default function Bubbles() {
  const bubbleGroups = Array.from(Array(4).keys(), (number) => number + 1);
  const bubbles = Array.from(Array(12).keys(), (number) => number + 1);
  const bubbleElements = useRef([]);

  function handleScroll() {
    const scrollValue =
      window.scrollY || window.scrollTop || document.documentElement.scrollTop;

    bubbleElements.current.forEach((bubbleElement, index) => {
      if (bubbleElement) {
        bubbleElement.style.top = `${0 - scrollValue * 0.1 * index}px`;
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bubbles" aria-hidden="true">
      {bubbleGroups.map((bubbleGroup, index) => (
        <div
          data-bubble-group={bubbleGroup}
          ref={(element) => (bubbleElements.current[bubbleGroup] = element)}
          key={bubbleGroup}
        >
          {bubbles.map((bubble) => (
            <div data-bubble={bubble + index * bubbles.length} key={bubble}>
              &nbsp;
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
