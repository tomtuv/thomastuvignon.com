"use client";

import NextImage, { type ImageProps } from "next/image";
import { useState } from "react";
import styles from "./image.module.css";

export default function Image({ src, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <span className={styles.root}>
      <NextImage
        src={src}
        data-loading={isLoading}
        onLoad={handleLoad}
        {...props}
      />
    </span>
  );
}
