/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "16", 10); // Default limit: 10
    const offset = (page - 1) * limit; // Calculate offset for pagination
    // Fetch paginated results
    const [rows] = (await pool.query(
      `SELECT 
        group_concat(distinct(studentfor)) as course_name, group_concat(distinct(batch_year)) as batch_year
        from tbl_result
        where status = 'active'
        `,
      [limit, offset]
    )) as any[];
    
    return NextResponse.json({
      success: true, filters: rows[0]
    });
  } catch (error) {
    console.error("Error fetching updates:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch updates" }, { status: 500 });
  }
}

