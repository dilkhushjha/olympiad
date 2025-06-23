import { NextResponse } from "next/server";
import pool from "@/lib/db";
// import { GALLERY_IMAGE_PATH } from "@/lib/constants";

export async function GET() {
  try {
    const [rows] = await pool.query(`SELECT vgid as id, title, url FROM tbl_videoGallery WHERE status = 'Active' ORDER BY addDate DESC`);
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Error fetching updates:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch updates" }, { status: 500 });
  }
}
