import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIntl, FormattedMessage } from "react-intl";
import Bubbles from "./Bubbles";
import Image from "./Image";
import Modal from "./Modal";
import styles from "./Header.module.css";

export default function Header({
  title,
  jobTitle,
  profilePicture,
  video,
}: any) {
  const router = useRouter();
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
        {router.pathname === "/" ? (
          <>
            <div
              style={{ "--grid-column-lg": "span 4" } as React.CSSProperties}
            >
              <figure>
                <Image
                  src={profilePicture.url}
                  alt=""
                  width={profilePicture.width}
                  height={profilePicture.height}
                  sizes="(min-width: 1200px) 170px, (min-width: 1024px) 160px, 130px"
                  priority
                />
              </figure>
            </div>
            <div
              style={{ "--grid-column-lg": "span 8" } as React.CSSProperties}
            >
              <h1>{title}</h1>
              <p>{jobTitle}</p>
              <button data-link="" onClick={showModal}>
                <FormattedMessage id="modalButton" />
              </button>
              <Modal
                isOpen={isModalOpen}
                onDismiss={closeModal}
                videoURL={video.url}
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
            <h1>{title}</h1>
          </div>
        )}
      </motion.div>
    </motion.header>
  );
}
