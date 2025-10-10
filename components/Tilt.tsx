"use client";

import React, { useRef } from "react";

export default function Tilt({
  children,
  intensity = 10,
  className = "",
}: {
  children: any;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef(null as any);
  function onMove(e: any) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${-py * intensity}deg) rotateY(${
      px * intensity
    }deg)`;
  }
  function onLeave() {
    const el = ref.current!;
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  }
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 200ms ease",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
