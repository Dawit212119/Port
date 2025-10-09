"use client";

import { motion } from "framer-motion";

export default function Footer() {
	return (
		<footer className="relative border-t border-white/10 px-6 py-12 mt-20">
			<div className="mx-auto max-w-6xl">
				<motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-slate-400">
					Built with ❤️ by Dawit using Next.js, Tailwind CSS, and Framer Motion.
				</motion.p>
				<motion.a
					href="#top"
					className="fixed bottom-6 right-6 grid place-items-center size-10 rounded-full bg-cyan-400 text-slate-900 shadow-lg"
					animate={{ y: [0, -4, 0] }}
					whileTap={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 1.8 }}
				>
					↑
				</motion.a>
			</div>
		</footer>
	);
}


