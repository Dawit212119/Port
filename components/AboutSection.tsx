"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-4xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
      </div>
      <div className="glass rounded-2xl border border-white/10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-28 h-28 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-green-400"
          >
            <Image
              src="/images/dave.jpg"
              width={100}
              height={100}
              alt="Profile image"
              className="rounded-full"
            />
          </motion.div>

          <div className="space-y-3 text-slate-200">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              I love turning complex backend logic into simple user experiences.
              Passionate about performance, automation, and scalable systems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              When I’m not debugging Redis, I’m sipping Ethiopian coffee ☕️ or
              exploring new frameworks.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
