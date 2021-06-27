export default function Modal({ modal, toggleModal, video }) {
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
              {`intl.formatMessage({ id: "general.back" })`}
            </button>
            <video
              width="1920"
              height="1080"
              controls
              playsInline
              preload="none"
              poster={`poster.publicURL`}
              ref={video}
            >
              <source
                src={`data.contentfulHomePage.video.localFile.publicURL`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
