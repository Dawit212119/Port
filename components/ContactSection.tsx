// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useToast } from "./ui/Toast";

// export default function ContactSection() {
// 	const [loading, setLoading] = useState(false);
// 	const [success, setSuccess] = useState(false);
// 	const [error, setError] = useState<string | null>(null);

// 	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
// 		e.preventDefault();
// 		setLoading(true);
// 		setError(null);
// 		const fd = new FormData(e.currentTarget);
// 		const payload = Object.fromEntries(fd.entries());
// 		try {
// 			const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
// 			const data = await res.json();
// 			if (data.ok) {
// 				setSuccess(true);
// 				e.currentTarget.reset();
// 				try { useToast().push("Message sent! I’ll get back to you soon."); } catch {}
// 			} else {
// 				setError(data.error ?? "Something went wrong");
// 			}
// 		} catch (e) {
// 			setError("Network error");
// 		} finally {
// 			setLoading(false);
// 		}
// 	}

// 	return (
// 		<section id="contact" className="relative mx-auto max-w-xl px-6 py-20">
// 			<div className="mb-8 text-center">
// 				<h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
// 				<p className="text-slate-300 text-sm">Let’s build something great together.</p>
// 			</div>
// 			<form onSubmit={onSubmit} className="glass rounded-2xl border border-white/10 p-6 space-y-4">
// 				<input name="name" placeholder="Your name" className="w-full rounded-lg bg-white/5 px-4 py-3 border border-white/10 focus-ring" required />
// 				<input name="email" placeholder="Your email" type="email" className="w-full rounded-lg bg-white/5 px-4 py-3 border border-white/10 focus-ring" required />
// 				<textarea name="message" placeholder="Tell me about your project" rows={5} className="w-full rounded-lg bg-white/5 px-4 py-3 border border-white/10 focus-ring" required />
// 				<button disabled={loading} className="w-full btn btn-primary">
// 					{loading ? "Sending..." : "Send Message"}
// 				</button>
// 				<AnimatePresence>
// 					{success && (
// 						<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-6 right-6 rounded-lg bg-green-500 text-white px-4 py-2 shadow-lg">
// 							✓ Message sent! I’ll get back to you soon.
// 						</motion.div>
// 					)}
// 					{error && (
// 						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center text-red-300">
// 							{error}
// 						</motion.div>
// 					)}
// 				</AnimatePresence>
// 			</form>
// 		</section>
// 	);
// }
"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegram, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        <p className="text-slate-300 text-sm">I am available at</p>
      </div>

      <div className="glass rounded-2xl border border-white/10 p-6 space-y-6 text-center">
        <div className="flex items-center justify-center gap-2 text-green-400">
          <FaPhoneAlt />
          <span>+251920245372</span>
          <span></span>
        </div>

        <div className="flex items-center justify-center gap-2 text-green-400">
          <MdEmail />
          <a href="mailto:dawitworkye794@gmail.com">dawitworkye794@gmail.com</a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4 text-green-400 text-xl">
          <a
            href="https://t.me/DAVE2119"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.linkedin.com/in/dawit-workye-bb8b27285/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <span className="opacity-50" aria-label="Twitter (disabled)">
            <FaXTwitter />
          </span>
          <a
            href="https://github.com/Dawit212119"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
