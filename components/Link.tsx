import React, { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";
import styles from "./Link.module.css";

type Props = {
  variant?: "underline" | "underline-inverse";
  children: ReactNode;
};

export default function Link({
  href,
  variant,
  children,
  ...props
}: Props & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink
      className={styles.root}
      href={href}
      data-variant={variant}
      {...props}
    >
      {children}
    </NextLink>
  );
}
