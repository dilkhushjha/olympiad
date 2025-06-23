import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { GALLERY_IMAGE_PATH } from "@/lib/constants";

export async function GET() {
  try {
    const [rows] = await pool.query(`SELECT cat_id as id,cat_name as title,CONCAT('${GALLERY_IMAGE_PATH}', coverphoto) as thumbnail, slug  FROM tbl_gallerycategory WHERE status = 'Active' ORDER BY add_date DESC`);
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Error fetching updates:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch updates" }, { status: 500 });
  }
}
