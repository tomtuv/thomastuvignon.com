import { useState } from "react";
import NextImage, { ImageProps } from "next/future/image";
import styles from "./Image.module.css";

export default function Image({ src, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <NextImage
      src={src}
      className={styles.root}
      data-loading={isLoading ? "true" : undefined}
      onLoadingComplete={handleLoadingComplete}
      {...props}
    />
  );
}
