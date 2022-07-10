import { useState } from "react";
import NextImage from "next/image";
import styles from "./Image.module.css";

export default function Image({ ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <NextImage
      {...props}
      className={styles.root}
      data-loading={isLoading ? "true" : null}
      onLoadingComplete={handleLoadingComplete}
    />
  );
}
