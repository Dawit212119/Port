"use client";

import { motion } from "framer-motion";

export default function ContributionGraph() {
	const rows = 7;
	const cols = 26;
	const cells = Array.from({ length: rows * cols }, (_, i) => i);
	return (
		<section id="graph" className="relative mx-auto max-w-6xl px-6 py-20">
			<h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Contribution Graph</h2>
			<div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 12px)`, gap: 4 }}>
				{cells.map((i) => (
					<motion.div
						key={i}
						className="size-3 rounded-sm bg-white/10"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: (i % cols) * 0.02 }}
					/>
				))}
			</div>
		</section>
	);
}







