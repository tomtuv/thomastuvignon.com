import { useIntl } from "react-intl";
import Close from "./Close";
import styles from "./Modal.module.css";

export default function Modal({ el, close, videoEl, videoUrl }) {
  const { formatMessage } = useIntl();

  return (
    <dialog
      id="modal"
      className={styles.root}
      role="dialog"
      aria-label={formatMessage({ id: "video" })}
      ref={el}
    >
      <button
        className={styles.close}
        onClick={close}
        title={formatMessage({ id: "close" })}
      >
        <Close />
      </button>
      <div className="container">
        <div className={styles.video}>
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
      <div className={styles.backdrop} onClick={close} />
    </dialog>
  );
}
