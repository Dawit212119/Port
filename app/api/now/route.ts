import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({ metrics: { activeProjects: 3, openPRs: 2, weeklyCommits: 27 } });
}








