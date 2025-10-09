"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioResponse {
	keywords: string[];
	response: string;
}

const portfolioResponses: PortfolioResponse[] = [
	{
		keywords: ["projects", "project", "work", "portfolio", "built", "created"],
		response: "I've built several impressive projects including DEVPORTFOLIO (Next.js portfolio), Consultancy App (full-stack), Anbessa Bus System (React + Django), MERN Real Estate app, Document Management System, and Anbessa Admin Panel. Each project showcases different technologies and problem-solving approaches."
	},
	{
		keywords: ["skills", "technologies", "tech", "languages", "frameworks", "tools"],
		response: "My tech stack includes Frontend: React, Next.js, TypeScript, JavaScript, Sass, Redux. Backend: Node.js, Express.js, Python, Java, Go, Laravel. Database: PostgreSQL, MySQL, MongoDB, Redis, Prisma. DevOps: Docker, Firebase, Bash. I'm currently learning AI/ML, Kubernetes, GraphQL, and Web3."
	},
	{
		keywords: ["experience", "years", "background", "career", "professional"],
		response: "I'm a Full-Stack Developer & DevOps Enthusiast with 2+ years of experience. I specialize in building scalable web applications using the MERN stack and Next.js. I have a proven track record of delivering user-centric solutions, from e-commerce platforms to AI-powered SaaS tools."
	},
	{
		keywords: ["contact", "email", "hire", "collaborate", "work together", "available"],
		response: "You can reach me at dawitworkye794@gmail.com. I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel free to check out my GitHub profile or connect with me on LinkedIn!"
	},
	{
		keywords: ["github", "repositories", "code", "commits", "activity"],
		response: "You can find all my projects on GitHub at github.com/Dawit212119. I have 37 repositories including DEVPORTFOLIO, Consultancy, Anbessa-Bus, mern-esate, DMS, and Anbessa-Admin. I'm actively contributing and always working on new projects!"
	},
	{
		keywords: ["about", "who", "dawit", "ethiopia", "location"],
		response: "I'm Dawit Workye, a passionate Full-Stack Developer from Ethiopia. I love turning ideas into reality through code and enjoy working with modern technologies. When I'm not coding, I'm exploring new tech trends and contributing to open source projects."
	},
	{
		keywords: ["resume", "cv", "download", "pdf"],
		response: "You can download my resume by clicking the 'Download Resume' button in the hero section or contact section. It contains detailed information about my experience, skills, and projects."
	},
	{
		keywords: ["services", "what can you do", "offer", "freelance"],
		response: "I offer full-stack web development services including frontend development (React, Next.js), backend development (Node.js, Python), database design, API development, and DevOps solutions. I can help with everything from simple websites to complex enterprise applications."
	}
];

const defaultResponse = "I can only answer questions about my portfolio, skills, projects, and professional background. Please ask me about my work, technologies I use, or how to contact me!";

export default function Chatbot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Array<{ type: "user" | "bot"; content: string }>>([]);
	const [input, setInput] = useState("");

	const findResponse = (userInput: string): string => {
		const lowerInput = userInput.toLowerCase();
		
		// Check if it's a portfolio-related question
		const isPortfolioRelated = portfolioResponses.some(response => 
			response.keywords.some(keyword => lowerInput.includes(keyword))
		);

		if (!isPortfolioRelated) {
			return defaultResponse;
		}

		// Find the best matching response
		for (const response of portfolioResponses) {
			if (response.keywords.some(keyword => lowerInput.includes(keyword))) {
				return response.response;
			}
		}

		return defaultResponse;
	};

	const handleSend = async () => {
		if (!input.trim()) return;

		const userMessage = { type: "user" as const, content: input };
		setMessages(prev => [...prev, userMessage]);
		setInput("");

		// Get response without API call
		setTimeout(() => {
			const botResponse = findResponse(input);
			const botMessage = { type: "bot" as const, content: botResponse };
			setMessages(prev => [...prev, botMessage]);
		}, 500);
	};

	return (
		<>
			{/* Floating Chat Button */}
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-lg flex items-center justify-center text-white"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				animate={{ scale: [1, 1.05, 1] }}
				transition={{ repeat: Infinity, duration: 2 }}
			>
				<AnimatePresence mode="wait">
					{isOpen ? (
						<motion.svg
							key="close"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</motion.svg>
					) : (
						<motion.svg
							key="chat"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
						</motion.svg>
					)}
				</AnimatePresence>
			</motion.button>

			{/* Chat Window */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.8 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.8 }}
						className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-slate-800 rounded-lg shadow-xl border border-slate-700 flex flex-col"
					>
						{/* Header */}
						<div className="p-4 border-b border-slate-700">
							<h3 className="text-white font-semibold">Ask My Portfolio</h3>
							<p className="text-slate-400 text-sm">Ask me about my work, skills, or projects!</p>
						</div>

						{/* Messages */}
						<div className="flex-1 p-4 overflow-y-auto space-y-3">
							{messages.length === 0 && (
								<div className="text-slate-400 text-sm">
									<p>Hi! I'm Dawit's portfolio assistant. Ask me about:</p>
									<ul className="mt-2 space-y-1 text-xs">
										<li>• My projects and technologies</li>
										<li>• My skills and experience</li>
										<li>• How to contact me</li>
										<li>• My GitHub repositories</li>
										<li>• My background and services</li>
									</ul>
									<p className="mt-2 text-xs text-cyan-400">
										Note: I only answer questions about my portfolio!
									</p>
								</div>
							)}
							{messages.map((msg, i) => (
								<motion.div 
									key={i} 
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
								>
									<div className={`max-w-[80%] p-3 rounded-lg text-sm ${
										msg.type === "user" 
											? "bg-cyan-500 text-white" 
											: "bg-slate-700 text-slate-200"
									}`}>
										{msg.content}
									</div>
								</motion.div>
							))}
						</div>

						{/* Input */}
						<div className="p-4 border-t border-slate-700">
							<div className="flex gap-2">
								<input
									type="text"
									value={input}
									onChange={(e) => setInput(e.target.value)}
									onKeyPress={(e) => e.key === "Enter" && handleSend()}
									placeholder="Ask about my portfolio..."
									className="flex-1 bg-slate-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
								/>
								<button
									onClick={handleSend}
									className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
								>
									Send
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}