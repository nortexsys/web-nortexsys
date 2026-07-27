import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import styles from "./LegalDoc.module.css";

// A legal document renders as a long-form article: one H1 (the doc title),
// a last-updated line, then numbered sections (each an H2 + body). The body
// of each section is free-form so callers can pass paragraphs and lists.
export type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalDocProps = {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalDoc({ title, updatedAt, sections }: LegalDocProps) {
  return (
    <Container as="article" className={styles.doc} narrow>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p className={styles.updated}>{updatedAt}</p>
      </header>
      {sections.map((s, i) => (
        <section key={i} className={styles.section}>
          <h2>{s.title}</h2>
          {s.body}
        </section>
      ))}
    </Container>
  );
}
