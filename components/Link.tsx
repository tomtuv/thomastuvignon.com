import type { ReactNode, AnchorHTMLAttributes } from "react";
import NextLink, { type LinkProps } from "next/link";
import styles from "./Link.module.css";

type Props = {
  variant?: "underline" | "underline-inverse";
  children: ReactNode;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ href, variant, children, ...props }: Props) {
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
