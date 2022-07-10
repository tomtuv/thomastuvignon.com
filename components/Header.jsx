import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIntl, FormattedMessage } from "react-intl";
import Bubbles from "./Bubbles";
import Image from "./Image";
import Modal from "./Modal";
import styles from "./Header.module.css";

export default function Header({ page }) {
  const { formatMessage } = useIntl();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.header className={styles.root} layoutId="header">
      <Bubbles />
      <motion.div data-container="" layout>
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
                  sizes="(min-width: 1200px) 170px, (min-width: 1024px) 160px, 130px"
                  priority
                />
              </figure>
            </div>
            <div style={{ "--grid-column-lg": "span 8" }}>
              <h1>{page.title}</h1>
              <p>{page.jobTitle}</p>
              <button data-link="" onClick={showModal} aria-controls="modal">
                <FormattedMessage id="modalButton" />
              </button>
              <Modal
                isOpen={isModalOpen}
                onDismiss={closeModal}
                videoURL={page.video.url}
              />
            </div>
          </>
        ) : (
          <div>
            <Link
              href="/"
              data-link=""
              data-variant="back"
              aria-label={formatMessage({ id: "back" })}
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
