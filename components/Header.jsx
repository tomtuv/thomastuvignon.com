import { useRef, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useIntl, FormattedMessage } from "react-intl";
import Bubbles from "./Bubbles";
import Image from "./Image";
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
    <motion.header className={styles.root} layoutId="header">
      <Bubbles />
      <motion.div className="container" layout>
        {page.__typename === "HomePage" ? (
          <>
            <div style={{ "--grid-column-lg": "span 4" }}>
              <figure>
                <Image
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
            <Link
              className="link"
              href="/"
              aria-label={formatMessage({ id: "back" })}
              data-variant="back"
            >
              Thomas Tuvignon
            </Link>
            <h1>{page.title}</h1>
          </div>
        )}
      </motion.div>
    </motion.header>
  );
}
