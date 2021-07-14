import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import { useAppContext } from "../context/app-context";
import Bubbles from "./bubbles";
import Modal from "./modal";

export default function Header({ isHomePage }) {
  const data = useAppContext();
  const intl = useIntl();
  const [modal, setModal] = useState(null);
  const video = useRef(null);
  const { homePage, project, page } = data;

  function handleClick() {
    setModal(!modal ? true : null);
    !modal ? video.current.play() : video.current.pause();
    document.body.style.overflow = !modal ? "hidden" : "";
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setModal(null);
        video.current.pause();
        document.body.removeAttribute("style");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="header">
      <Bubbles />
      <div className="container">
        {isHomePage ? (
          <div className="grid">
            <div data-column="12" data-column-lg="4">
              <figure>
                <Image
                  src={homePage.profilePicture.url}
                  alt={homePage.title}
                  width={homePage.profilePicture.width}
                  height={homePage.profilePicture.height}
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=${homePage.profilePicture.url}&w=16&q=1`}
                  priority
                />
              </figure>
            </div>
            <div data-column="12" data-column-lg="8">
              <h1>{homePage.title}</h1>
              <p>{homePage.jobTitle}</p>
              <button
                className="link"
                onClick={handleClick}
                aria-controls="modal"
              >
                {intl.formatMessage({ id: "modalButton" })}
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link href="/" aria-label={intl.formatMessage({ id: "back" })}>
              <a className="link link-back">Thomas Tuvignon</a>
            </Link>
            <h1>{project ? project.title : page.title}</h1>
          </>
        )}
      </div>
      {isHomePage && (
        <Modal
          modal={modal}
          handleClick={handleClick}
          video={video}
          videoUrl={homePage.video.url}
        />
      )}
    </header>
  );
}
