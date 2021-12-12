import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useIntl, FormattedMessage } from "react-intl";
import Bubbles from "./bubbles";
import Modal from "./modal";

export default function Header({ page }) {
  const { formatMessage } = useIntl();
  const [showModal, setShowModal] = useState(false);
  const videoEl = useRef(null);

  const openModal = () => {
    setShowModal(true);
    videoEl.current.play();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    videoEl.current.pause();
    document.body.removeAttribute("style");
  };

  useEffect(() => {
    const handleKeyDown = (event) => event.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="header">
      <Bubbles />
      <div className="grid">
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
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=${page.profilePicture.url}&w=16&q=1`}
                  priority
                />
              </figure>
            </div>
            <div style={{ "--grid-column-lg": "span 8" }}>
              <h1>{page.title}</h1>
              <p>{page.jobTitle}</p>
              <button
                className="link"
                onClick={openModal}
                aria-controls="modal"
              >
                <FormattedMessage id="modalButton" />
              </button>
              <Modal
                show={showModal}
                close={closeModal}
                videoEl={videoEl}
                videoUrl={page.video.url}
              />
            </div>
          </>
        ) : (
          <div>
            <Link href="/" aria-label={formatMessage({ id: "back" })}>
              <a className="link link-back">Thomas Tuvignon</a>
            </Link>
            <h1>{page.title}</h1>
          </div>
        )}
      </div>
    </header>
  );
}
