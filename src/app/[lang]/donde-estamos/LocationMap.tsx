"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./location.module.css";

type Office = {
  region: string;
  entity: string;
  address: string;
  mapsUrl: string;
};

/**
 * Marker positions as percentages of the map image, by office index.
 * Order matches dict.locationPage.offices: [0] España→Madrid, [1] Latam→Ciudad
 * de Panamá, [2] Estados Unidos→Tucson. Coordinates were measured against the
 * base map (public/brand/localizaciones.png, 1536×1024).
 */
const COORDS: { left: number; top: number }[] = [
  { left: 45.6, top: 40.2 }, // Madrid
  { left: 22.0, top: 55.5 }, // Ciudad de Panamá
  { left: 17.1, top: 43.0 }, // Tucson
];

const CARD_WIDTH = 264;

type CardPos = { left: number; top: number; above: boolean };

export function LocationMap({
  offices,
  viewMapLabel,
  alt,
}: {
  offices: Office[];
  viewMapLabel: string;
  alt: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState<CardPos | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (active === null || !wrapRef.current || !COORDS[active]) {
      setPos(null);
      return;
    }
    const w = wrapRef.current.clientWidth;
    const h = wrapRef.current.clientHeight;
    const c = COORDS[active];
    const mx = (c.left / 100) * w;
    const my = (c.top / 100) * h;
    const left = Math.min(Math.max(mx - CARD_WIDTH / 2, 8), w - CARD_WIDTH - 8);
    // Card drops below the marker unless it's in the lower half of the map.
    const above = my > h * 0.55;
    const top = above ? my - 22 : my + 22;
    setPos({ left, top, above });
  }, [active]);

  return (
    <div
      ref={wrapRef}
      className={styles.mapWrap}
      onMouseLeave={() => setActive(null)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.mapImage}
        src="/brand/localizaciones.png"
        alt={alt}
        width={1536}
        height={1024}
      />

      {offices.map((o, i) =>
        COORDS[i] ? (
          <button
            key={o.region}
            type="button"
            className={`${styles.marker} ${active === i ? styles.markerActive : ""}`}
            style={{ left: `${COORDS[i].left}%`, top: `${COORDS[i].top}%` }}
            aria-label={`${o.region} — ${o.entity}`}
            aria-expanded={active === i}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive((cur) => (cur === i ? null : i))}
            onBlur={() => setActive((cur) => (cur === i ? null : cur))}
          >
            <span className={styles.markerDot} aria-hidden="true" />
            <span className={styles.markerPulse} aria-hidden="true" />
          </button>
        ) : null,
      )}

      {active !== null && pos && offices[active] ? (
        <div
          className={`${styles.mapCard} ${pos.above ? styles.mapCardAbove : ""}`}
          style={{ left: pos.left, top: pos.top, width: CARD_WIDTH }}
          role="dialog"
          aria-label={offices[active].region}
        >
          <p className={styles.cardRegion}>{offices[active].region}</p>
          <p className={styles.cardEntity}>{offices[active].entity}</p>
          <p className={styles.cardAddress}>{offices[active].address}</p>
          <a
            className={styles.cardMapLink}
            href={offices[active].mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {viewMapLabel}
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
