import { useIntl } from "react-intl";

export default function Modal({ modal, handleClick, video, videoUrl }) {
  const intl = useIntl();

  return (
    <div
      id="modal"
      className="modal"
      aria-modal={modal}
      tabIndex={-1}
      role={modal ? "dialog" : null}
    >
      <div className="container">
        <div className="grid">
          <div data-column="12" data-column-lg="10" data-start-lg="2">
            <button className="link link-back" onClick={handleClick}>
              {intl.formatMessage({ id: "back" })}
            </button>
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
    </div>
  );
}
