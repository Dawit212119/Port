"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Metrics = {
  activeProjects: number;
  openPRs: number;
  weeklyCommits: number;
};

export default function NowSection() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    fetch("/api/now")
      .then((r) => r.json())
      .then((d) => setMetrics(d.metrics))
      .catch(() =>
        setMetrics({ activeProjects: 2, openPRs: 3, weeklyCommits: 24 })
      );
  }, []);

  return (
    <section id="now" className="relative mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Projects", key: "activeProjects" as const },
          { label: "Open PRs", key: "openPRs" as const },
          { label: "Weekly Commits", key: "weeklyCommits" as const },
        ].map((card, i) => (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl glass border border-white/10 p-6 text-center"
          >
            <div className="text-slate-300 text-sm">{card.label}</div>
            <div className="text-3xl font-bold">
              {metrics ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={metrics[card.key]}
                >
                  {metrics[card.key]}
                </motion.span>
              ) : (
                <span>—</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
