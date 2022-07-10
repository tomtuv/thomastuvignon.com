import { motion, AnimatePresence } from "framer-motion";
import { useIntl } from "react-intl";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Close from "./Close";
import "@reach/dialog/styles.css";
import styles from "./Modal.module.css";

const MotionDialogOverlay = motion(DialogOverlay);
const MotionDialogContent = motion(DialogContent);

export default function Modal({ isOpen, onDismiss, videoURL }) {
  const { formatMessage } = useIntl();

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDialogOverlay
          className={styles.root}
          isOpen={isOpen}
          onDismiss={onDismiss}
          initial={{ "--backdrop-opacity": 0 }}
          animate={{ "--backdrop-opacity": 1 }}
          exit={{ "--backdrop-opacity": 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionDialogContent
            className={styles.content}
            aria-label={formatMessage({ id: "video" })}
          >
            <motion.button
              className={styles.close}
              onClick={onDismiss}
              title={formatMessage({ id: "close" })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Close />
            </motion.button>
            <div data-container="">
              <motion.video
                className={styles.video}
                width={1920}
                height={1080}
                controls
                playsInline
                preload="none"
                poster="/og-image.jpg"
                autoPlay
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <source src={videoURL} type="video/mp4" />
              </motion.video>
            </div>
          </MotionDialogContent>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
  );
}
