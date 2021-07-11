import { useIntl } from "react-intl";

export default function Modal({ modal, toggleModal, video, videoUrl }) {
  const intl = useIntl();

  return (
    <div
      className="modal"
      role="dialog"
      hidden={!modal ? true : null}
      tabIndex="-1"
    >
      <div className="container">
        <div className="grid">
          <div data-column="12" data-column-lg="10" data-start-lg="2">
            <button className="link link-back" onClick={toggleModal}>
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
