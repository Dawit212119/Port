"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Activity = { id: string; type: string; repo: string; time: string };

export default function GitHubFeed() {
	const [items, setItems] = useState<Activity[]>([]);

	useEffect(() => {
		fetch("/api/github").then((r) => r.json()).then((d) => setItems(d.activities)).catch(() => setItems([]));
	}, []);

	return (
		<section id="github" className="relative mx-auto max-w-6xl px-6 py-20">
			<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">GitHub Activity</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{items.map((a, i) => (
					<motion.div key={a.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-xl glass border border-white/10 p-4">
						<div className="text-sm text-slate-300">{a.time}</div>
						<div className="font-semibold">{a.type}</div>
						<div className="text-slate-300 text-sm">{a.repo}</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}








