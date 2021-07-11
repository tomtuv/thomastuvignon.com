import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import { useAppContext } from "./context";
import Bubbles from "./bubbles";
import Modal from "./modal";

export default function Header({ isHomePage }) {
  const data = useAppContext();
  const intl = useIntl();
  const [modal, setModal] = useState(false);
  const video = useRef(null);
  const homePage = data.homePage;
  const project = data.project;

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
              <Image
                src={homePage.profilePicture.url}
                alt={homePage.title}
                width={170}
                height={170}
              />
            </div>
            <div data-column="12" data-column-lg="8">
              <h1>{homePage.title}</h1>
              <p>{homePage.jobTitle}</p>
              <button className="link" onClick={toggleModal}>
                {intl.formatMessage({ id: "modalButton" })}
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              href="/"
              className="link link-back"
              aria-label={intl.formatMessage({ id: "back" })}
            >
              <a>Thomas Tuvignon</a>
            </Link>
            <h1>{project.title}</h1>
          </>
        )}
      </div>
      {isHomePage && (
        <Modal
          modal={modal}
          toggleModal={toggleModal}
          video={video}
          videoUrl={homePage.video.url}
        />
      )}
    </header>
  );
}
