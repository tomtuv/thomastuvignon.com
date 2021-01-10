import React, { useEffect } from "react";

const Bubbles = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="bubbles">
      <div id="parallax-1">
        <div id="bubble-1-1" className="bubble size-3 purple">
          &nbsp;
        </div>
        <div id="bubble-1-2" className="bubble size-3 yellow">
          &nbsp;
        </div>
        <div id="bubble-1-3" className="bubble size-2 yellow">
          &nbsp;
        </div>
        <div id="bubble-1-4" className="bubble size-3 blue">
          &nbsp;
        </div>
        <div id="bubble-1-5" className="bubble size-2 yellow">
          &nbsp;
        </div>
        <div id="bubble-1-6" className="bubble size-2 yellow">
          &nbsp;
        </div>
        <div id="bubble-1-7" className="bubble size-2 orange">
          &nbsp;
        </div>
        <div id="bubble-1-8" className="bubble size-3 blue">
          &nbsp;
        </div>
        <div id="bubble-1-9" className="bubble size-2 orange">
          &nbsp;
        </div>
        <div id="bubble-1-10" className="bubble size-3 blue">
          &nbsp;
        </div>
        <div id="bubble-1-11" className="bubble size-4 yellow">
          &nbsp;
        </div>
        <div id="bubble-1-12" className="bubble size-3 yellow">
          &nbsp;
        </div>
      </div>

      <div id="parallax-2">
        <div id="bubble-2-1" className="bubble size-1 blue">
          &nbsp;
        </div>
        <div id="bubble-2-2" className="bubble size-4 blue">
          &nbsp;
        </div>
        <div id="bubble-2-3" className="bubble size-3 blue">
          &nbsp;
        </div>
        <div id="bubble-2-4" className="bubble size-2 purple">
          &nbsp;
        </div>
        <div id="bubble-2-5" className="bubble size-1 green">
          &nbsp;
        </div>
        <div id="bubble-2-6" className="bubble size-2 green">
          &nbsp;
        </div>
        <div id="bubble-2-7" className="bubble size-1 yellow">
          &nbsp;
        </div>
        <div id="bubble-2-8" className="bubble size-4 green">
          &nbsp;
        </div>
        <div id="bubble-2-9" className="bubble size-3 yellow">
          &nbsp;
        </div>
        <div id="bubble-2-10" className="bubble size-2 green">
          &nbsp;
        </div>
        <div id="bubble-2-11" className="bubble size-1 blue">
          &nbsp;
        </div>
        <div id="bubble-2-12" className="bubble size-4 blue">
          &nbsp;
        </div>
      </div>

      <div id="parallax-3">
        <div id="bubble-3-1" className="bubble size-2 blue">
          &nbsp;
        </div>
        <div id="bubble-3-2" className="bubble size-1 purple">
          &nbsp;
        </div>
        <div id="bubble-3-3" className="bubble size-2 yellow">
          &nbsp;
        </div>
        <div id="bubble-3-4" className="bubble size-2 green">
          &nbsp;
        </div>
        <div id="bubble-3-5" className="bubble size-3 orange">
          &nbsp;
        </div>
        <div id="bubble-3-6" className="bubble size-1 orange">
          &nbsp;
        </div>
        <div id="bubble-3-7" className="bubble size-3 purple">
          &nbsp;
        </div>
        <div id="bubble-3-8" className="bubble size-1 orange">
          &nbsp;
        </div>
        <div id="bubble-3-9" className="bubble size-3 purple">
          &nbsp;
        </div>
        <div id="bubble-3-10" className="bubble size-1 orange">
          &nbsp;
        </div>
        <div id="bubble-3-11" className="bubble size-2 blue">
          &nbsp;
        </div>
        <div id="bubble-3-12" className="bubble size-1 purple">
          &nbsp;
        </div>
      </div>

      <div id="parallax-4">
        <div id="bubble-4-1" className="bubble size-3 green">
          &nbsp;
        </div>
        <div id="bubble-4-2" className="bubble size-2 purple">
          &nbsp;
        </div>
        <div id="bubble-4-3" className="bubble size-1 orange">
          &nbsp;
        </div>
        <div id="bubble-4-4" className="bubble size-4 green">
          &nbsp;
        </div>
        <div id="bubble-4-5" className="bubble size-1 green">
          &nbsp;
        </div>
        <div id="bubble-4-6" className="bubble size-3 blue">
          &nbsp;
        </div>
        <div id="bubble-4-7" className="bubble size-1 blue">
          &nbsp;
        </div>
        <div id="bubble-4-8" className="bubble size-2 yellow">
          &nbsp;
        </div>
        <div id="bubble-4-9" className="bubble size-4 blue">
          &nbsp;
        </div>
        <div id="bubble-4-10" className="bubble size-2 yellow">
          &nbsp;
        </div>
        <div id="bubble-4-11" className="bubble size-3 green">
          &nbsp;
        </div>
        <div id="bubble-4-12" className="bubble size-2 purple">
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
