"use client";

import useMemo from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects as allProjects } from "../data/projects";
import { Button } from "./ui/Button";
import { Dialog } from "./ui/Dialog";
import Link from "next/link";

const tabs = ["All", "Full Stack", "Backend", "Frontend"] as const;

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return allProjects;
    return allProjects.filter((p) => p.type === active);
  }, [active]);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Projects With A Bang</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-lg px-4 py-2 text-sm border transition-colors focus-ring ${
                active === t
                  ? "border-cyan-400/60 text-cyan-300 bg-cyan-400/10"
                  : "border-white/10 text-slate-300 hover:text-cyan-200 hover:border-cyan-400/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="space-y-16">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex flex-col lg:flex-row gap-8 items-center ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 shadow-2xl">
                  {p.media ? (
                    <img
                      src={p.media}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      🚀
                    </div>
                  )}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </div>

            {/* Project Description */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm rounded-full px-3 py-1 bg-cyan-400/20 text-cyan-200 border border-cyan-400/30">
                  {p.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {p.title}
              </h3>

              <div className="bg-cyan-500/20 rounded-lg p-4 border border-cyan-400/30">
                <p className="text-white text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded px-3 py-1 bg-white/10 text-slate-200 border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {p.liveUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Button>
                )}
                {p.repoUrl && (
                  <Link href={p.repoUrl}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <span>GitHub</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Button>
                  </Link>
                )}
                <Button size="sm" variant="outline">
                  Case Study
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!openId} onClose={() => setOpenId(null)}>
        <h4 className="text-xl font-semibold mb-2">Tech Deep Dive</h4>
        <p className="text-slate-300 text-sm">
          Architecture overview, diagrams, and schema go here. Replace with real
          content later.
        </p>
        <div className="mt-4 flex justify-end">
          <Button variant="outline">Close</Button>
        </div>
      </Dialog>
    </section>
  );
}
