import styles from "./Icon.module.css";

/**
 * Nortex icon system — hand-drawn line icons (stroke = currentColor).
 * Single grid (24x24), consistent 1.6 stroke, square caps.
 * Icons inherit color from parent text via currentColor, so they tint
 * with the surrounding token automatically.
 */

export type IconName =
  | "web" // 01 Digitalización y presencia web
  | "code" // 02 Software a medida
  | "layers" // 03 Plataformas y productos digitales
  | "agent" // 04 IA agéntica y automatización
  | "shield" // 05 Sectores regulados
  | "plug" // 06 Integración con proveedores y clientes
  | "catalog" // 07 Digitalización de catálogos
  | "sales" // 08 IA para incremento de ventas
  | "legacy" // 09 Inteligencia a partir de datos legacy
  | "discover" // 5D — Discover
  | "define" // 5D — Define
  | "design" // 5D — Design
  | "deliver" // 5D — Deliver
  | "demonstrate"; // 5D — Demonstrate

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  title?: string;
};

const paths: Record<IconName, React.ReactNode> = {
  web: (
    <>
      <rect x="2" y="3.5" width="20" height="17" rx="2" />
      <path d="M2 8h20" />
      <path d="M5 5.75h.01M7.5 5.75h.01M10 5.75h.01" />
      <path d="M8 14.5l-2.2 2 2.2 2" />
      <path d="M16 14.5l2.2 2-2.2 2" />
      <path d="M13 12.5l-2 7" />
    </>
  ),
  code: (
    <>
      <path d="M8.5 7.5L3.5 12l5 4.5" />
      <path d="M15.5 7.5l5 4.5-5 4.5" />
      <path d="M13.5 5.5l-3 13" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5l8.5 4.5L12 12.5 3.5 8z" />
      <path d="M3.5 12l8.5 4.5L20.5 12" />
      <path d="M3.5 15.5L12 20l8.5-4.5" />
    </>
  ),
  agent: (
    <>
      <rect x="4.5" y="5.5" width="15" height="11" rx="2.5" />
      <path d="M12 3.5v2" />
      <path d="M9 10.5h.01M15 10.5h.01" />
      <path d="M9.5 14.5h5" />
      <path d="M2.5 10v2M21.5 10v2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 2.5v5.5c0 4.8-3.2 8.3-7.5 10-4.3-1.7-7.5-5.2-7.5-10V5.5z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3.5v4M15 3.5v4" />
      <path d="M7 7.5h10v3.5a5 5 0 0 1-10 0z" />
      <path d="M12 16v4.5" />
    </>
  ),
  catalog: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M8 4.5v15" />
      <path d="M11 8.5h6M11 12h6M11 15.5h4" />
    </>
  ),
  sales: (
    <>
      <path d="M4.5 20.5h13l2.5-5h-3.5v-3a2 2 0 0 0-4 0v3h-6a2 2 0 0 0-2-2z" />
      <path d="M9.5 9.5l5-5" />
      <path d="M13 4.5h2.5V7" />
    </>
  ),
  legacy: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.5" />
      <path d="M4.5 6v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V6" />
      <path d="M4.5 12v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-6" />
      <path d="M10 17l4-2" />
    </>
  ),
  discover: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5l5 5" />
    </>
  ),
  define: (
    <>
      <path d="M4 19.5h16" />
      <path d="M5 16l3.5-9 4 4-3.5 9z" />
      <path d="M9 8.5l4 4" />
    </>
  ),
  design: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 6.5h.01" />
    </>
  ),
  deliver: (
    <>
      <path d="M2.5 6.5h13v9h-13z" />
      <path d="M15.5 9.5h4l2.5 3v3h-6.5z" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="18.5" cy="17.5" r="1.8" />
    </>
  ),
  demonstrate: (
    <>
      <path d="M4.5 19.5h15" />
      <path d="M5 19.5L9 8M9 19.5l3-10M13 19.5l2-9M16 19.5l1.5-7" />
    </>
  ),
};

export function Icon({ name, size = 24, className, title }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="square"
      strokeLinejoin="miter"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      className={[styles.icon, className].filter(Boolean).join(" ")}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
