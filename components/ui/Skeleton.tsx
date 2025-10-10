import { cn } from "./utils";
import React from "react";

export function Skeleton({
  className,
  ...props
}: any) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-200/20", className)}
      {...props}
    />
  );
}
