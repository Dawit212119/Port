import type { ReactNode } from "react";
import { cn } from "./utils";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
	return <div className={cn("rounded-2xl glass border border-white/10", className)}>{children}</div>;
}

export function CardHeader({ className, children }: { className?: string; children: ReactNode }) {
	return <div className={cn("p-5 border-b border-white/10", className)}>{children}</div>;
}

export function CardContent({ className, children }: { className?: string; children: ReactNode }) {
	return <div className={cn("p-5", className)}>{children}</div>;
}





