import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { TESTIMONIAL_IMAGE_PATH } from "@/lib/constants";

export async function GET() {
  try {
    const [rows] = await pool.query(`SELECT id,testimonial_name as name,testimonial as detail, CONCAT('${TESTIMONIAL_IMAGE_PATH}', testimonial_image) as image, 
        IFNULL(CONCAT(IFNULL(college, ''), ', ', IFNULL(branch, '')), '') AS branch
        FROM tbl_testimonials WHERE status = 'Active' ORDER BY add_date DESC`);
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Error fetching updates:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch updates" }, { status: 500 });
  }
}
