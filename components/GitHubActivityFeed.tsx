"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GitHubEvent {
	id: string;
	type: string;
	created_at: string;
	repo: {
		name: string;
		html_url: string;
	};
	payload?: {
		action?: string;
		ref?: string;
		commits?: Array<{
			message: string;
			sha: string;
		}>;
	};
}

export default function GitHubActivityFeed() {
	const [events, setEvents] = useState<GitHubEvent[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchGitHubActivity = async () => {
			try {
				const response = await fetch('https://api.github.com/users/Dawit212119/events/public?per_page=5', {
					headers: {
						'Accept': 'application/vnd.github.v3+json',
					}
				});

				if (!response.ok) {
					throw new Error('Failed to fetch GitHub activity');
				}

				const data = await response.json();
				setEvents(data);
			} catch (err) {
				console.error('Error fetching GitHub activity:', err);
				// Fallback to mock data
				setEvents(generateMockActivity());
			} finally {
				setLoading(false);
			}
		};

		fetchGitHubActivity();
	}, []);

	// Generate mock activity data as fallback (limited to 5)
	const generateMockActivity = (): GitHubEvent[] => {
		const mockEvents: GitHubEvent[] = [
			{
				id: "1",
				type: "PushEvent",
				created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
				repo: {
					name: "Dawit212119/DEVPORTFOLIO",
					html_url: "https://github.com/Dawit212119/DEVPORTFOLIO"
				},
				payload: {
					commits: [{
						message: "Update portfolio with new animations",
						sha: "abc123"
					}]
				}
			},
			{
				id: "2",
				type: "CreateEvent",
				created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
				repo: {
					name: "Dawit212119/Consultancy",
					html_url: "https://github.com/Dawit212119/Consultancy"
				}
			},
			{
				id: "3",
				type: "PushEvent",
				created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
				repo: {
					name: "Dawit212119/Anbessa-Bus",
					html_url: "https://github.com/Dawit212119/Anbessa-Bus"
				},
				payload: {
					commits: [{
						message: "Fix bus route optimization",
						sha: "def456"
					}]
				}
			},
			{
				id: "4",
				type: "PushEvent",
				created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
				repo: {
					name: "Dawit212119/mern-esate",
					html_url: "https://github.com/Dawit212119/mern-esate"
				},
				payload: {
					commits: [{
						message: "Add property search filters",
						sha: "ghi789"
					}]
				}
			},
			{
				id: "5",
				type: "PushEvent",
				created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
				repo: {
					name: "Dawit212119/DMS",
					html_url: "https://github.com/Dawit212119/DMS"
				},
				payload: {
					commits: [{
						message: "Implement document versioning",
						sha: "jkl012"
					}]
				}
			}
		];
		return mockEvents;
	};

	const getEventIcon = (type: string) => {
		switch (type) {
			case 'PushEvent':
				return '📝';
			case 'CreateEvent':
				return '🆕';
			case 'WatchEvent':
				return '⭐';
			case 'ForkEvent':
				return '🍴';
			default:
				return '📋';
		}
	};

	const getEventDescription = (event: GitHubEvent) => {
		switch (event.type) {
			case 'PushEvent':
				return `Pushed ${event.payload?.commits?.length || 1} commit(s) to`;
			case 'CreateEvent':
				return 'Created repository';
			case 'WatchEvent':
				return 'Starred repository';
			case 'ForkEvent':
				return 'Forked repository';
			default:
				return 'Updated';
		}
	};

	const formatTimeAgo = (dateString: string) => {
		const date = new Date(dateString);
		const now = new Date();
		const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

		if (diffInSeconds < 60) return 'just now';
		if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
		if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
		return `${Math.floor(diffInSeconds / 86400)}d ago`;
	};

	if (loading) {
		return (
			<section className="relative mx-auto max-w-6xl px-6 py-20">
				<div className="mb-8 text-center">
					<h2 className="text-2xl md:text-3xl font-bold">Recent Activity</h2>
					<p className="text-slate-300 mt-2">Loading GitHub activity...</p>
				</div>
				<div className="glass rounded-2xl border border-white/10 p-6">
					<div className="space-y-4">
						{Array.from({ length: 5 }).map((_, i) => (
							<div key={i} className="animate-pulse flex items-center gap-4">
								<div className="w-8 h-8 bg-slate-700 rounded-full" />
								<div className="flex-1">
									<div className="h-4 bg-slate-700 rounded w-3/4 mb-2" />
									<div className="h-3 bg-slate-700 rounded w-1/2" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="relative mx-auto max-w-6xl px-6 py-20">
			<motion.div 
				className="mb-8 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-2xl md:text-3xl font-bold">Recent Activity</h2>
				<p className="text-slate-300 mt-2">Latest updates from my GitHub repositories</p>
			</motion.div>

			<motion.div 
				className="glass rounded-2xl border border-white/10 p-6"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<div className="space-y-4">
					{events.map((event, index) => (
						<motion.div
							key={event.id}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
						>
							<div className="text-2xl">{getEventIcon(event.type)}</div>
							<div className="flex-1">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-slate-200 text-sm">
										{getEventDescription(event)}
									</span>
									<a
										href={event.repo.html_url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
									>
										{event.repo.name}
									</a>
								</div>
								{event.payload?.commits?.[0] && (
									<p className="text-slate-400 text-xs">
										"{event.payload.commits[0].message}"
									</p>
								)}
							</div>
							<span className="text-slate-500 text-xs">
								{formatTimeAgo(event.created_at)}
							</span>
						</motion.div>
					))}
				</div>

				<div className="mt-6 pt-4 border-t border-white/10">
					<a
						href="https://github.com/Dawit212119"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
					>
						View all activity on GitHub
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				</div>
			</motion.div>
		</section>
	);
}
