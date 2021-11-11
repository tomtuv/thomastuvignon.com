import { useRef, useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Close from "./close";

export default function Modal({ videoUrl }) {
  const [showModal, setShowModal] = useState(false);
  const videoEl = useRef(null);

  const open = () => {
    setShowModal(true);
    videoEl.current.play();
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setShowModal(false);
    videoEl.current.pause();
    document.body.removeAttribute("style");
  };

  useEffect(() => {
    const handleKeyDown = (event) => event.key === "Escape" && close();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button className="link" onClick={open} aria-controls="modal">
        <FormattedMessage id="modalButton" />
      </button>
      <div
        id="modal"
        className="modal"
        role={showModal ? "dialog" : null}
        aria-modal={showModal ? true : null}
        tabIndex={-1}
      >
        <button className="modal-button" onClick={close}>
          <Close />
        </button>
        <div className="grid">
          <div className="modal-video">
            <video
              width={1920}
              height={1080}
              controls
              playsInline
              preload="none"
              poster="/og-image.jpg"
              ref={videoEl}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="modal-backdrop" onClick={close} aria-hidden="true" />
      </div>
    </>
  );
}
