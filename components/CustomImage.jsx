import { useState } from "react";
import Image from "next/image";
import styles from "./CustomImage.module.css";

export default function CustomImage({ alt, ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Image
      {...props}
      className={styles.root}
      alt={alt}
      data-loading={isLoading ? "true" : null}
      onLoadingComplete={handleLoadingComplete}
    />
  );
}
