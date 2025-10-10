"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
	const [pos, setPos] = useState({ x: -1000, y: -1000 });
	useEffect(() => {
		function onMove(e: MouseEvent) {
			setPos({ x: e.clientX, y: e.clientY });
		}
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 z-[-1]">
			<div
				className="absolute size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
				style={{ left: pos.x, top: pos.y, background: "radial-gradient(closest-side, rgba(34,211,238,0.12), transparent)" }}
			/>
		</div>
	);
}







