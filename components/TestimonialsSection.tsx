"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Leul Melkamu",
    role: "CEO",
    company: "Agazh",
    content:
      "Dawit’s backend work is like a secret superpower 🦸‍♂️ — connecting users with experts effortlessly while keeping everything running flawlessly!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael",
    role: "Team Leader at Zemenay Tech",
    company: "Efuye Gela",
    content:
      "Dawit consistently delivers high-quality full-stack solutions, handling complex projects with skill and reliability",
    rating: 5,
  },
  {
    id: 3,
    name: "Addis Alemayehu",
    role: "Full Stack Developer",
    company: "Zulu Tech",
    content:
      "Full-stack wizardry at its best 🧙‍♂️! Dawit helped build document systems, consultancy platforms, and EG e-commerce. A must-have for any team",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-7xl px-6 py-20 overflow-hidden"
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">What People Say</h2>
        <p className="text-slate-300 mt-2">
          Testimonials from satisfied clients and collaborators
        </p>
      </div>

      <div className="relative">
        {/* Sliding container */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -100 * (testimonials.length - 1)],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="min-w-[300px] max-w-[400px] flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl border border-white/10 p-6 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-slate-100">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
