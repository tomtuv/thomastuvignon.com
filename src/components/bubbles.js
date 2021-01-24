import React, { useEffect } from "react";

const Bubbles = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrolled =
        window.scrollY ||
        window.scrollTop ||
        document.querySelector("html").scrollTop;

      document.querySelector('[data-parallax="1"]').style = `top: ${
        0 - scrolled * 0.1
      }px`;
      document.querySelector('[data-parallax="2"]').style = `top: ${
        0 - scrolled * 0.2
      }px`;
      document.querySelector('[data-parallax="3"]').style = `top: ${
        0 - scrolled * 0.3
      }px`;
      document.querySelector('[data-parallax="4"]').style = `top: ${
        0 - scrolled * 0.4
      }px`;
    });
  }, []);

  return (
    <div className="bubbles" aria-hidden="true">
      <div className="bubbles-parallax" data-parallax="1">
        <div className="bubbles-item" data-bubble="1">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="2">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="3">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="4">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="5">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="6">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="7">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="8">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="9">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="10">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="11">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="12">
          &nbsp;
        </div>
      </div>

      <div className="bubbles-parallax" data-parallax="2">
        <div className="bubbles-item" data-bubble="13">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="14">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="15">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="16">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="17">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="18">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="19">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="20">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="21">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="22">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="23">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="24">
          &nbsp;
        </div>
      </div>

      <div className="bubbles-parallax" data-parallax="3">
        <div className="bubbles-item" data-bubble="25">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="26">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="27">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="28">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="29">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="30">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="31">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="32">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="33">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="34">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="35">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="36">
          &nbsp;
        </div>
      </div>

      <div className="bubbles-parallax" data-parallax="4">
        <div className="bubbles-item" data-bubble="37">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="38">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="39">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="40">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="41">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="42">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="43">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="44">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="45">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="46">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="47">
          &nbsp;
        </div>
        <div className="bubbles-item" data-bubble="48">
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
