import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const [rows] = await pool.query("SELECT id,title,detail,slug FROM tbl_faq WHERE status = 'Active' AND slug= ? ORDER BY update_date DESC", [slug]);
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Error fetching updates:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch updates" }, { status: 500 });
  }
}
