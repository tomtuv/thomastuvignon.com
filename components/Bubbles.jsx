import { useRef, useEffect } from "react";
import styles from "./Bubbles.module.css";

const BUBBLE_GROUPS = Array.from(Array(4).keys(), (number) => number + 1);
const BUBBLES = Array.from(Array(12).keys(), (number) => number + 1);

export default function Bubbles() {
  const bubbleEls = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;

      bubbleEls.current.forEach((bubbleEl, index) => {
        if (bubbleEl) bubbleEl.style.top = `${0 - scrollValue * 0.1 * index}px`;
      });
    };

    window.addEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <div className={styles.root} aria-hidden="true">
      {BUBBLE_GROUPS.map((bubbleGroup, index) => (
        <div
          data-bubble-group={bubbleGroup}
          ref={(el) => (bubbleEls.current[bubbleGroup] = el)}
          key={bubbleGroup}
        >
          {BUBBLES.map((bubble) => (
            <div data-bubble={bubble + index * BUBBLES.length} key={bubble} />
          ))}
        </div>
      ))}
    </div>
  );
}
