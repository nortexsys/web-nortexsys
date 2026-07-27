import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "inverse" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  /**
   * Mark the link as external: opens in a new tab with rel="noopener noreferrer".
   * Use for links that leave the site (Google Maps, shop, etc.).
   */
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  inverse: styles.inverse,
  ghost: styles.ghost,
};

const sizeClass: Record<Size, string> = {
  md: styles.md,
  lg: styles.lg,
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.btn,
    variantClass[variant],
    sizeClass[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href !== undefined) {
    const { href, external } = rest;
    // External links render a plain <a> (not next/link) so target/rel apply
    // and the router doesn't try to prefetch a foreign origin.
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
