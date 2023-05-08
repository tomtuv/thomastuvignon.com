import NextLink from "next/link";
import styles from "./Link.module.css";

export default function Link({
  href,
  variant,
  ...props
}: React.ComponentProps<typeof NextLink> & {
  variant?: "underline" | "underline-inverse";
}) {
  return (
    <NextLink
      className={styles.root}
      href={href}
      data-variant={variant}
      {...props}
    />
  );
}
