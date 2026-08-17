import { useEffect, useRef, useState } from "react";

/**
 * Pure-CSS 3D spinning carbide drill.
 * Built from rotated planes forming a cylinder shank + faceted flute body + tip.
 */
export function SpinningDrill({ className = "" }: { className?: string }) {
  const SEGMENTS = 14;
  return (
    <div className={`tool3d-stage ${className}`} aria-hidden="true">
      <div className="tool3d-spin">
        {/* shank */}
        <div className="tool3d-cyl tool3d-shank">
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <span
              key={`s${i}`}
              className="tool3d-face"
              style={{ transform: `rotateY(${(360 / SEGMENTS) * i}deg) translateZ(28px)` }}
            />
          ))}
        </div>
        {/* fluted body */}
        <div className="tool3d-cyl tool3d-body">
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <span
              key={`b${i}`}
              className={`tool3d-face tool3d-flute ${i % 2 === 0 ? "is-groove" : ""}`}
              style={{ transform: `rotateY(${(360 / SEGMENTS) * i}deg) translateZ(24px)` }}
            />
          ))}
        </div>
        {/* tip */}
        <div className="tool3d-tip" />
      </div>
    </div>
  );
}

/** Wraps children in a perspective container that tilts toward the pointer. */
export function TiltCard({
  children,
  className = "",
  max = 10,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) setT({ x: 0, y: 0 });
  }, [active]);

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setT({ x: -py * max * 2, y: px * max * 2 });
      }}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      className={`tilt-scene ${className}`}
    >
      <div
        className="tilt-inner"
        style={{ transform: `rotateX(${t.x}deg) rotateY(${t.y}deg) scale(${active ? 1.02 : 1})` }}
      >
        {children}
      </div>
    </div>
  );
}
