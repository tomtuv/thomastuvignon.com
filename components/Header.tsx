import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIntl, FormattedMessage } from "react-intl";
import Bubbles from "./Bubbles";
import Image from "./Image";
import Modal from "./Modal";
import { HomePage, Project, Page } from "../interfaces";
import styles from "./Header.module.css";

type Props = {
  page: HomePage | Project | Page;
};

export default function Header({ page }: Props) {
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
            <div
              style={{ "--grid-column-lg": "span 4" } as React.CSSProperties}
            >
              <figure>
                <Image
                  src={page.profilePicture.url}
                  alt=""
                  width={page.profilePicture.width}
                  height={page.profilePicture.height}
                  sizes="(min-width: 1200px) 170px, (min-width: 1024px) 160px, 130px"
                  priority
                />
              </figure>
            </div>
            <div
              style={{ "--grid-column-lg": "span 8" } as React.CSSProperties}
            >
              <h1>{page.title}</h1>
              <p>{page.jobTitle}</p>
              <button data-link="" onClick={showModal}>
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
