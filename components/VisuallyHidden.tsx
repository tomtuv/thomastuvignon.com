import styles from "./VisuallyHidden.module.css";

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

export default function VisuallyHidden({
  as: Component = "span",
  children,
  ...props
}: Props) {
  return (
    <Component className={styles.root} {...props}>
      {children}
    </Component>
  );
}
