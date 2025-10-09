"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
	const { theme, setTheme } = useTheme();

	return (
		<nav className="fixed inset-x-0 top-0 z-50">
			{/* Progress bar */
			}
			<motion.div style={{ scaleX }} className="h-0.5 origin-left bg-cyan-400" />
			<div className="mx-auto max-w-6xl px-4 py-3">
				<div className="glass flex items-center justify-between rounded-xl px-4 py-2 transition-colors">
					<a href="#top" className="font-semibold tracking-tight text-slate-100">Dawit Workye</a>
					<div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
						<a href="#projects" className="hover:text-cyan-300">Projects</a>
						<a href="#skills" className="hover:text-cyan-300">Skills</a>
						<a href="#about" className="hover:text-cyan-300">About</a>
						<a href="#contact" className="hover:text-cyan-300">Contact</a>
						<a href="#blog" className="hover:text-cyan-300">Blog</a>
					</div>
					<button 
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
						aria-label="Toggle theme" 
						className="focus-ring rounded-lg px-3 py-1.5 text-slate-200 hover:text-cyan-300 relative h-8 w-8 grid place-items-center overflow-hidden"
					>
						<AnimatePresence mode="popLayout" initial={false}>
							{theme === "dark" ? (
								<motion.span key="moon" className="theme-icon" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
									🌙
								</motion.span>
							) : (
								<motion.span key="sun" className="theme-icon" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
									🌞
								</motion.span>
							)}
						</AnimatePresence>
					</button>
				</div>
			</div>
		</nav>
	);
}


