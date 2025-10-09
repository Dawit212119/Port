import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		activities: [
			{ id: "1", type: "Pushed to main", repo: "Dawit212119/awesome-project", time: "2h ago" },
			{ id: "2", type: "Opened PR #42", repo: "Dawit212119/dev-portfolio", time: "1d ago" },
			{ id: "3", type: "Commented on issue", repo: "org/infra", time: "3d ago" },
		],
	});
}





