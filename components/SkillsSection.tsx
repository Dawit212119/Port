"use client";

import { motion } from "framer-motion";
import { techIcons } from "../data/techIcons";

// const categories = [
//   {
//     key: "frontend",
//     label: "Frontend",
//     skills: ["React", "Next.js", "TypeScript", "JavaScript", "Sass", "Redux"],
//   },
//   {
//     key: "backend",
//     label: "Backend",
//     skills: ["Node.js", "Express.js", "Python", "Java", "Go", "Laravel"],
//   },
//   {
//     key: "database",
//     label: "Database",
//     skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
//   },
//   {
//     key: "devops",
//     label: "DevOps & Tools",
//     skills: ["Docker", ""],
//   },
// ];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">My Skillsets Include</h2>
        <p className="text-slate-300">
          Technologies I use to build and ship amazing products
        </p>
      </motion.div>

      {/* Technology Icons Grid */}
      <motion.div
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {Object.entries(techIcons).map(([name, tech], i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="group"
          >
            <div className="glass rounded-xl border border-white/10 p-4 aspect-square flex flex-col items-center justify-center hover:border-cyan-400/30 transition-all duration-300">
              <div className={`text-2xl mb-1 ${tech.color}`}>{tech.icon}</div>
              <span className="text-xs text-slate-300 group-hover:text-cyan-200 transition-colors text-center">
                {name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Categorized Skills
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c, i) => (
          <motion.div
            key={c.key}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl glass border border-white/10 p-5"
          >
            <h3 className="font-semibold mb-3 text-cyan-200">{c.label}</h3>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((skill) => {
                const tech = techIcons[skill];
                return (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.06 }}
                    className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200 border border-white/10"
                  >
                    {tech && (
                      <span className={`text-xs ${tech.color}`}>
                        {tech.icon}
                      </span>
                    )}
                    <span>{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div> */}

      {/* Currently Learning */}
      <motion.div
        className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="font-semibold mb-2 text-cyan-200">
          🚧 Currently Learning
        </h3>
        <div className="flex flex-wrap gap-3">
          {["Go"].map((skill) => (
            <motion.span
              key={skill}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="rounded-full border border-cyan-400/30 text-cyan-200 px-3 py-1 text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
