import { useRef, useEffect } from "react";

export default function Bubbles() {
  const bubbleGroups = Array.from(Array(4).keys(), (number) => number + 1);
  const bubbles = Array.from(Array(12).keys(), (number) => number + 1);
  const bubbleEls = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      bubbleEls.current.forEach((bubbleEl, index) => {
        if (bubbleEl) bubbleEl.style.top = `${0 - scrollValue * 0.1 * index}px`;
      });
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bubbles">
      {bubbleGroups.map((bubbleGroup, index) => (
        <div
          data-bubble-group={bubbleGroup}
          ref={(el) => (bubbleEls.current[bubbleGroup] = el)}
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
