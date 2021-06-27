import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Bubbles from "./bubbles";
import Modal from "./modal";

export default function Header({ isHomePage }) {
  const [modal, setModal] = useState(false);
  const video = useRef(null);
  const pageTitle =
    `project?.title` || `intl.formatMessage({ id: "404.title" })`;

  function toggleModal() {
    setModal(!modal ? true : false);
    !modal ? video.current.play() : video.current.pause();
  }

  useEffect(() => {
    function closeModal(event) {
      if (modal && event.key === "Escape") {
        setModal(false);
        video.current.pause();
      }
    }

    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, [modal]);

  return (
    <header className="header">
      <Bubbles />
      <div className="container">
        {isHomePage ? (
          <div className="grid">
            <div data-column="12" data-column-lg="4">
              {/* <Image
                src={`homePage.profilePicture.url`}
                alt={`homePage.title`}
              /> */}
            </div>
            <div data-column="12" data-column-lg="8">
              <h1>{`homePage.title`}</h1>
              <p>{`homePage.jobTitle`}</p>
              <button className="link" onClick={toggleModal}>
                {`intl.formatMessage({ id: "modal.button" })`}
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              href="/"
              className="link link-back"
              aria-label={`intl.formatMessage({ id: "general.back" })`}
            >
              <a>{`homePage.title`}</a>
            </Link>
            <h1>{pageTitle}</h1>
          </>
        )}
      </div>
      {isHomePage && (
        <Modal modal={modal} toggleModal={toggleModal} video={video} />
      )}
    </header>
  );
}
