"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const word = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 400, damping: 28 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    // no-op: hook forces re-render when in view to start animations
  }, [isInView]);

  const headline =
    "👋 Hi, I’m Dawit Workye — Full-Stack Developer & DevOps Enthusiast";
  const tagline =
    "I build scalable web apps powered by Next.js, Node.js, and intelligent automation.";

  return (
    <section
      ref={ref}
      className="relative isolate pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden"
    >
      {/* Animated background */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute inset-0 gradient-animated"
      />

      {/* Animated Background Project Cards - Diagonal Movement from Right to Left */}
      {/* <div className="absolute top-20 right-20 overflow-hidden pointer-events-none"> */}
      {/* Project Card 1 - DEVPORTFOLIO */}
      {/* <motion.div
          className="absolute w-48 h-32 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
          animate={{
            x: ["120vw", "-200px"],
            y: ["20vh", "-50px"],
            rotate: [0, -5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 rounded-lg p-2">
              <div className="text-xs text-white/80 font-medium">
                DEVPORTFOLIO
              </div>
              <div className="text-xs text-white/60 mt-1">
                Next.js • Framer Motion
              </div>
            </div>
          </div>
        </motion.div> */}

      {/* Project Card 2 - Consultancy App */}
      {/* <motion.div
          className="absolute w-44 h-28 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
          animate={{
            x: ["130vw", "-180px"],
            y: ["40vh", "-30px"],
            rotate: [0, 3],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg p-2">
              <div className="text-xs text-white/80 font-medium">
                Consultancy
              </div>
              <div className="text-xs text-white/60 mt-1">Next.js • Prisma</div>
            </div>
          </div>
        </motion.div> */}

      {/* Project Card 3 - Anbessa Bus */}
      {/* <motion.div
          className="absolute w-52 h-36 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
          animate={{
            x: ["140vw", "-220px"],
            y: ["60vh", "-40px"],
            rotate: [0, -2],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
            delay: 8,
          }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-lg p-2">
              <div className="text-xs text-white/80 font-medium">
                Anbessa Bus
              </div>
              <div className="text-xs text-white/60 mt-1">React • Django</div>
            </div>
          </div>
        </motion.div> */}

      {/* Project Card 4 - MERN Estate */}
      {/* <motion.div
          className="absolute w-40 h-30 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
          animate={{
            x: ["135vw", "-160px"],
            y: ["30vh", "-20px"],
            rotate: [0, 4],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
            delay: 12,
          }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg p-2">
              <div className="text-xs text-white/80 font-medium">
                MERN Estate
              </div>
              <div className="text-xs text-white/60 mt-1">MERN Stack</div>
            </div>
          </div>
        </motion.div> */}

      {/* Project Card 5 - DMS */}
      {/* <motion.div
          className="absolute w-46 h-34 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
          animate={{
            x: ["125vw", "-190px"],
            y: ["50vh", "-35px"],
            rotate: [0, -3],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
            delay: 16,
          }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-lg p-2">
              <div className="text-xs text-white/80 font-medium">DMS</div>
              <div className="text-xs text-white/60 mt-1">
                Next.js • Express
              </div>
            </div>
          </div>
        </motion.div> */}

      {/* Project Card 6 - Anbessa Admin */}
      {/* <motion.div
          className="absolute w-42 h-26 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
          animate={{
            x: ["145vw", "-170px"],
            y: ["25vh", "-25px"],
            rotate: [0, 2],
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: "linear",
            delay: 20,
          }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-lg p-2">
              <div className="text-xs text-white/80 font-medium">
                Admin Panel
              </div>
              <div className="text-xs text-white/60 mt-1">React • Django</div>
            </div>
          </div>
        </motion.div> */}
      {/* </div>  */}

      {/* Glow behind heading */}
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full blur-3xl opacity-30 bg-cyan-500/20"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-6 text-center"
        >
          {/* Headline word-by-word */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {headline.split(" ").map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className="inline-block mr-2"
              >
                {w}
              </motion.span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-300"
          >
            {tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 pt-2"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-lg px-5 py-3 text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors focus-ring"
            >
              <span className="font-semibold">View My Work</span>
              <span className="size-2 rounded-full bg-slate-900/50 group-hover:scale-125 transition-transform" />
            </a>
            <a
              href="https://flowcv.com/resume/5t9p267ipcdc"
              download
              className="relative inline-flex items-center gap-2 rounded-lg px-5 py-3 border border-white/10 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 glass transition-colors focus-ring"
            >
              <span className="font-semibold">Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.0,
            type: "spring",
            stiffness: 200,
            damping: 18,
          }}
          className="mt-16 flex justify-center"
        >
          <div className="flex flex-col items-center text-slate-400">
            <div className="h-6 w-px bg-slate-600/60 mb-2" />
            <motion.div
              aria-hidden
              className="h-5 w-3 rounded-full border border-slate-600/60 flex items-start justify-center p-0.5"
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </motion.div>
            <span className="mt-2 text-xs">Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
