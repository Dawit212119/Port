"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastItem = { id: string; title: string };

const ToastCtx = React.createContext(null as unknown as {
  push: (title: string) => void;
} | null);

// Use `any` for children to avoid relying on React's type namespace in this setup
export function ToastProvider({ children }: { children: any }) {
  const [items, setItems] = React.useState([] as ToastItem[]);
  const push = React.useCallback((title: string) => {
    const id =
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2);
    setItems((s: ToastItem[]) => [...s, { id, title }]);
    setTimeout(
      () => setItems((s: ToastItem[]) => s.filter((i) => i.id !== id)),
      3000
    );
  }, []);
  const value = React.useMemo(() => ({ push }), [push]);

  return (
    <ToastCtx.Provider value={value}>
      {children}
      <div className="fixed bottom-6 right-6 space-y-2">
        <AnimatePresence>
          {items.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="rounded-lg bg-slate-800 text-slate-100 border border-white/10 px-4 py-2 shadow-lg"
            >
              {t.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
