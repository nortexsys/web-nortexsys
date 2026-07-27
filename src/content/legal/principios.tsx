// NORTEX AI Engineering Principles — source: docs/principios_ingenieria.md (EN).
// Per PO decision F4-2: published in English only. The Spanish route shows a
// notice pointing to the English version (no translation provided).

export const principiosTitle = "The NORTEX AI Engineering Principles";
export const principiosSubtitle = "Engineering Trustworthy Artificial Intelligence";
export const principiosMetaDescription =
  "The NORTEX AI Engineering Principles — how we engineer reliable, secure, transparent and maintainable AI systems.";

export const principiosIntro: string[] = [
  "At NORTEX, we believe Artificial Intelligence should be engineered — not improvised.",
  "Every solution we design is built upon a set of engineering principles intended to maximize reliability, transparency, security, and long-term maintainability.",
  "These principles guide every AI system, workflow, automation, and intelligent agent we develop.",
];

export type Principle = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const principiosPrinciples: Principle[] = [
  {
    title: "1. Human-Centered AI",
    paragraphs: [
      "Artificial Intelligence exists to augment human capabilities — not replace human judgment.",
      "Our systems are designed to assist professionals, allowing people to remain in control of important decisions.",
    ],
    bullets: ["Whenever appropriate, critical outputs require human validation."],
  },
  {
    title: "2. Security by Design",
    paragraphs: ["Security is not an afterthought.", "Every AI solution is designed considering:"],
    bullets: [
      "Secure architectures",
      "Authentication",
      "Authorization",
      "Encryption",
      "Secret management",
      "Infrastructure hardening",
      "Least-privilege access",
    ],
  },
  {
    title: "3. Privacy by Design",
    paragraphs: [
      "Personal information deserves protection.",
      "Whenever personal data is involved we follow principles including:",
    ],
    bullets: [
      "Data minimization",
      "Purpose limitation",
      "Access control",
      "Encryption",
      "Secure storage",
      "Regulatory compliance",
    ],
  },
  {
    title: "4. Explainability",
    paragraphs: ["AI should never become a black box.", "Whenever possible, our systems provide:"],
    bullets: [
      "reasoning traces",
      "confidence indicators",
      "decision context",
      "audit information",
    ],
  },
  {
    title: "5. Reliability",
    paragraphs: ["Production AI must behave predictably.", "We prioritize:"],
    bullets: [
      "deterministic workflows",
      "validation pipelines",
      "automated testing",
      "rollback mechanisms",
      "graceful failure",
    ],
  },
  {
    title: "6. Human-in-the-Loop",
    paragraphs: [
      "Critical decisions should never rely solely on AI.",
      "Our systems allow human intervention before executing actions involving:",
    ],
    bullets: [
      "financial operations",
      "legal decisions",
      "medical information",
      "industrial control",
      "safety-critical environments",
    ],
  },
  {
    title: "7. Continuous Evaluation",
    paragraphs: [
      "Models evolve.",
      "Businesses evolve.",
      "Requirements evolve.",
      "Therefore AI systems require continuous monitoring, testing, benchmarking, and improvement throughout their lifecycle.",
      "Deployment is the beginning — not the end.",
    ],
  },
  {
    title: "8. Vendor Independence",
    paragraphs: [
      "Technology changes rapidly.",
      "Whenever possible we design solutions that avoid unnecessary dependency on a single provider.",
      "Our architectures favor interoperability and portability.",
    ],
  },
  {
    title: "9. Observability",
    paragraphs: ["Every production AI system should be observable.", "We implement monitoring capable of measuring:"],
    bullets: [
      "latency",
      "cost",
      "quality",
      "failures",
      "hallucination rates",
      "token consumption",
      "user feedback",
    ],
  },
  {
    title: "10. Responsible Automation",
    paragraphs: [
      "Automation must increase productivity without compromising ethics, security or compliance.",
      "Every automated workflow should remain understandable, controllable and auditable.",
    ],
  },
  {
    title: "11. Continuous Learning",
    paragraphs: ["Artificial Intelligence evolves faster than almost any technology.", "We continuously evaluate:"],
    bullets: [
      "emerging models",
      "benchmarks",
      "architectures",
      "prompting techniques",
      "agentic frameworks",
      "orchestration tools",
      "security practices",
    ],
  },
  {
    title: "12. Open Standards",
    paragraphs: ["Whenever technically appropriate, we favor:"],
    bullets: [
      "open protocols",
      "documented APIs",
      "interoperable architectures",
      "modular systems",
    ],
  },
  {
    title: "13. Engineering Excellence",
    paragraphs: ["We treat AI systems as software engineering projects.", "This means:"],
    bullets: [
      "version control",
      "documentation",
      "testing",
      "code review",
      "reproducibility",
      "CI/CD",
      "monitoring",
      "maintenance",
    ],
  },
  {
    title: "14. Ethics",
    paragraphs: ["Technology should improve people's lives.", "We reject the development of systems intended to:"],
    bullets: [
      "deceive users",
      "manipulate vulnerable individuals",
      "facilitate cybercrime",
      "generate harmful content",
      "violate human rights",
    ],
  },
];

export const principiosCommitment: string[] = [
  "We do not build demonstrations.",
  "We build production-ready AI systems.",
  "Reliable.",
  "Secure.",
  "Scalable.",
  "Maintainable.",
  "Transparent.",
  "That is what engineering means.",
  "That is what NORTEX stands for.",
];

// Spanish notice shown on /es/principios-ingenieria (decision F4-2).
export const principiosEsNotice = {
  title: "Principios de Ingeniería de IA",
  body: "Este documento está disponible únicamente en inglés. Puedes consultarlo en su versión original a continuación.",
  link: "Ver versión en inglés",
};
