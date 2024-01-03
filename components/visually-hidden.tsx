import styles from "./visually-hidden.module.css";

export default function VisuallyHidden({
  as: Component = "span",
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
}) {
  return (
    <Component className={styles.root} {...props}>
      {children}
    </Component>
  );
}
