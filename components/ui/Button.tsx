"use client";

import type { HTMLAttributes } from "react";
import { cn } from "./utils";
import type ReactNode from "react"
type Props = HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: typeof ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-ring disabled:opacity-60 disabled:cursor-not-allowed";
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };
  const variants = {
    primary: "bg-cyan-400 text-slate-900 hover:bg-cyan-300",
    outline:
      "border border-white/10 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 glass",
    ghost: "text-slate-200 hover:bg-white/5",
  };
  return (
    <button
      className={cn(
        base,
        sizes[size],
        variants[variant],
        "relative overflow-hidden",
        className
      )}
      {...rest}
      onMouseMove={(e) => {
        const t = e.currentTarget as HTMLElement;
        const r = t.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        t.style.setProperty("--ripple-x", `${x}px`);
        t.style.setProperty("--ripple-y", `${y}px`);
      }}
    >
      <span
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: "var(--ripple-x)",
          top: "var(--ripple-y)",
          width: 140,
          height: 140,
          background:
            variant === "primary"
              ? "rgba(255,255,255,0.3)"
              : "rgba(34,211,238,0.2)",
          filter: "blur(20px)",
          transition: "opacity 400ms ease",
          opacity: 0,
        }}
      />
      <span className="relative z-[1]">{children}</span>
    </button>
  );
}
