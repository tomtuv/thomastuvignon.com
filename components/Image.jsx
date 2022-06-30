import { useState } from "react";
import NextImage from "next/image";
import styles from "./Image.module.css";

export default function Image({ alt, ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <NextImage
      {...props}
      className={styles.root}
      alt={alt}
      data-loading={isLoading ? "true" : null}
      onLoadingComplete={handleLoadingComplete}
    />
  );
}
