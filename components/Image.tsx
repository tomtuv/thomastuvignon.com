import { useState } from "react";
import NextImage from "next/image";
import type { ImageProps } from "next/image";
import styles from "./Image.module.css";

export default function Image({ src, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <span className={styles.root}>
      <NextImage
        src={src}
        data-loading={isLoading}
        onLoadingComplete={handleLoadingComplete}
        {...props}
      />
    </span>
  );
}
