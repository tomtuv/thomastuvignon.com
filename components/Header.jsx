import { useRef, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useIntl, FormattedMessage } from "react-intl";
import Bubbles from "./Bubbles";
import CustomImage from "./CustomImage";
import styles from "./Header.module.css";

const Modal = dynamic(() => import("./Modal"), { ssr: false });

export default function Header({ page }) {
  const { formatMessage } = useIntl();
  const modalEl = useRef(null);
  const videoEl = useRef(null);

  const showModal = () => {
    if (modalEl.current.showModal) {
      modalEl.current.showModal();
    } else {
      modalEl.current.setAttribute("open", "");
    }

    document.body.style.overflow = "hidden";
    videoEl.current.play();
  };

  const closeModal = () => {
    if (modalEl.current.close) {
      modalEl.current.close();
    } else {
      modalEl.current.removeAttribute("open");
    }

    document.body.removeAttribute("style");
    videoEl.current.pause();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={styles.root}>
      <Bubbles />
      <div className="container">
        {page.__typename === "HomePage" ? (
          <>
            <div style={{ "--grid-column-lg": "span 4" }}>
              <figure>
                <CustomImage
                  src={page.profilePicture.url}
                  alt=""
                  width={page.profilePicture.width}
                  height={page.profilePicture.height}
                  layout="responsive"
                  sizes="(min-width: 75em) 170px, (min-width: 64em) 160px, 130px"
                  priority
                />
              </figure>
            </div>
            <div style={{ "--grid-column-lg": "span 8" }}>
              <h1>{page.title}</h1>
              <p>{page.jobTitle}</p>
              <button
                className="link"
                onClick={showModal}
                aria-controls="modal"
              >
                <FormattedMessage id="modalButton" />
              </button>
              <Modal
                el={modalEl}
                close={closeModal}
                videoEl={videoEl}
                videoURL={page.video.url}
              />
            </div>
          </>
        ) : (
          <div>
            <Link href="/" aria-label={formatMessage({ id: "back" })}>
              <a className="link" data-link="back">
                Thomas Tuvignon
              </a>
            </Link>
            <h1>{page.title}</h1>
          </div>
        )}
      </div>
    </header>
  );
}
