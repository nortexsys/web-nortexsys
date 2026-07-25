import type { ElementType, ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  as?: ElementType;
  /** make the whole card hover-lift (for clickable cards) */
  interactive?: boolean;
  className?: string;
};

export function Card({
  children,
  as: Tag = "div",
  interactive = false,
  className,
}: CardProps) {
  return (
    <Tag
      className={[styles.card, interactive ? styles.interactive : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
