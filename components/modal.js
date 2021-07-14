import Close from "./close";

export default function Modal({ modal, handleClick, video, videoUrl }) {
  return (
    <div
      id="modal"
      className="modal"
      aria-modal={modal}
      tabIndex={-1}
      role={modal ? "dialog" : null}
    >
      <button className="modal-button" onClick={handleClick}>
        <Close />
      </button>
      <div className="container">
        <div className="grid">
          <div data-column="12" data-column-lg="10" data-start-lg="2">
            <video
              width="1920"
              height="1080"
              controls
              playsInline
              preload="none"
              poster="/og-image.jpg"
              ref={video}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <button
        className="modal-backdrop"
        onClick={handleClick}
        aria-hidden="true"
      />
    </div>
  );
}
