import { useState, useEffect } from "react";
import Close from "./close";

export default function Modal({ show, close, videoEl, videoUrl }) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, [hasLoaded]);

  if (!hasLoaded) return null;

  return (
    <div
      id="modal"
      className="modal"
      role={show === false ? null : "dialog"}
      aria-modal={show === false ? null : true}
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
      <div className="modal-backdrop" onClick={close} />
    </div>
  );
}
