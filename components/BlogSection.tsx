"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: "Better-Auth Monitor: Failed Login Tracker",
    title: "Better-Auth Monitor — Intelligent Login Attempt Tracker",
    tags: ["BetterAuth", "Realtime"],
    link: "",
    image: "/images/better.png",
    description:
      "Smart plugin for tracking failed logins and preventing brute-force attacks. Keeps Better Auth safe",
  },
  //   {
  //     id: "redis-caching",
  //     title: "Optimizing Next.js API Routes with Redis Caching",
  //     tags: ["Next.js", "Redis"],
  //     image: "/images/api-caching.jpg",
  //     description:
  //       "Implementing intelligent caching strategies to achieve blazing-fast API responses.",
  //   },
  {
    id: "PrismaMonorepoPlugin",
    title: "PrismaMonorepoPlugin For Production",
    tags: ["Prisma", "Typescript"],
    link: "https://github.com/Dawit212119/PrismaMonorepoPlugin/blob/main/README.md",
    image: "/images/prisma.png",
    description:
      "Seamlessly integrates Prisma ORM in monorepos, sharing clients across Next.js and Express.js while automating schema generation",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Blog & Case Studies</h2>
        <p className="text-slate-300 mt-2">
          Technical insights and project deep dives
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 h-80"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Floating Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full px-2 py-1 bg-cyan-400/20 text-cyan-200 border border-cyan-400/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-200 text-sm opacity-90">
                {p.description}
              </p>
            </motion.div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
