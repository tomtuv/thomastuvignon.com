import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";
import { useDataContext } from "context/data";
import Bubbles from "components/bubbles";
import Modal from "components/modal";

export default function Header() {
  const { homePage, project, page } = useDataContext();
  const { formatMessage } = useIntl();
  const [modal, setModal] = useState(null);
  const videoEl = useRef(null);

  function openModal() {
    setModal(true);
    videoEl.current.play();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModal(null);
    videoEl.current.pause();
    document.body.removeAttribute("style");
  }

  function handleClick() {
    !modal ? openModal() : closeModal();
  }

  useEffect(() => {
    function handleKeyDown(event) {
      event.key === "Escape" && closeModal();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="header">
      <Bubbles />
      <div className="grid">
        {homePage ? (
          <>
            <div style={{ "--grid-column-lg": "span 4" }}>
              <figure>
                <Image
                  src={homePage.profilePicture.url}
                  alt={homePage.title}
                  width={homePage.profilePicture.width}
                  height={homePage.profilePicture.height}
                  layout="responsive"
                  sizes="(min-width: 75em) 170px, (min-width: 64em) 160px, 130px"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=${homePage.profilePicture.url}&w=16&q=1`}
                  priority
                />
              </figure>
            </div>
            <div style={{ "--grid-column-lg": "span 8" }}>
              <h1>{homePage.title}</h1>
              <p>{homePage.jobTitle}</p>
              <button
                className="link"
                onClick={handleClick}
                aria-controls="modal"
              >
                <FormattedMessage id="modalButton" />
              </button>
            </div>
          </>
        ) : (
          <div>
            <Link href="/" aria-label={formatMessage({ id: "back" })}>
              <a className="link link-back">Thomas Tuvignon</a>
            </Link>
            <h1>{project ? project.title : page.title}</h1>
          </div>
        )}
      </div>
      {homePage && (
        <Modal
          modal={modal}
          handleClick={handleClick}
          videoEl={videoEl}
          videoUrl={homePage.video.url}
        />
      )}
    </header>
  );
}
