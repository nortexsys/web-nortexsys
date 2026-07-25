import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  /** restrict to a narrower measure for prose-heavy sections */
  narrow?: boolean;
  as?: ElementType;
  className?: string;
};

export function Container({
  children,
  narrow = false,
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag className={[styles.container, narrow ? styles.narrow : "", className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
