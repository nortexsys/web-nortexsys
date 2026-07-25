import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  /** visual variant for the band */
  tone?: "default" | "muted" | "inverse";
  as?: ElementType;
  id?: string;
  className?: string;
};

export function Section({
  children,
  tone = "default",
  as: Tag = "section",
  id,
  className,
}: SectionProps) {
  const toneClass =
    tone === "muted" ? styles.muted : tone === "inverse" ? styles.inverse : "";
  return (
    <Tag id={id} className={[styles.section, toneClass, className].filter(Boolean).join(" ")}>
      <Container>{children}</Container>
    </Tag>
  );
}
