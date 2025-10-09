import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, message } = body ?? {};
		if (!name || !email || !message) {
			return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
		}
		// Placeholder: integrate with email service or database
		await new Promise((r) => setTimeout(r, 500));
		return NextResponse.json({ ok: true });
	} catch (e) {
		return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
	}
}



