import { useEffect, useRef, useState } from "react";

/** Wraps children in a perspective container that tilts toward the pointer. */
export function TiltCard({
  children,
  className = "",
  max = 8,
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

/**
 * Rotating 3D carousel: four panels arranged on the faces of a spinning
 * square prism. Pure CSS 3D transforms, no dependencies.
 */
export function ToolCarousel3D({
  items,
}: {
  items: { img: string; label: string }[];
}) {
  const faces = items.slice(0, 4);
  return (
    <div className="carousel3d-stage">
      <div className="carousel3d-spin">
        {faces.map((f, i) => (
          <figure
            key={f.label}
            className="carousel3d-face"
            style={{ transform: `rotateY(${i * 90}deg) translateZ(var(--c3d-depth))` }}
          >
            <img src={f.img} alt={f.label} loading="lazy" className="carousel3d-img" />
            <figcaption className="carousel3d-cap">{f.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="carousel3d-shadow" />
    </div>
  );
}
