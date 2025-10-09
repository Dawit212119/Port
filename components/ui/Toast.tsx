"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastItem = { id: string; title: string };

const ToastCtx = createContext<{ push: (title: string) => void } | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<ToastItem[]>([]);
	const push = useCallback((title: string) => {
		const id = crypto.randomUUID();
		setItems((s) => [...s, { id, title }]);
		setTimeout(() => setItems((s) => s.filter((i) => i.id !== id)), 3000);
	}, []);
	const value = useMemo(() => ({ push }), [push]);

	return (
		<ToastCtx.Provider value={value}>
			{children}
			<div className="fixed bottom-6 right-6 space-y-2">
				<AnimatePresence>
					{items.map((t) => (
						<motion.div key={t.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="rounded-lg bg-slate-800 text-slate-100 border border-white/10 px-4 py-2 shadow-lg">
							{t.title}
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</ToastCtx.Provider>
	);
}

export function useToast() {
	const ctx = useContext(ToastCtx);
	if (!ctx) throw new Error("useToast must be used within ToastProvider");
	return ctx;
}






