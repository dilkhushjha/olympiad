/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { ALUMNI_IMAGE_PATH } from "@/lib/constants";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "16", 15); // Default limit: 10
    const offset = (page - 1) * limit; // Calculate offset for pagination
    const course = searchParams.get("course");
    const batch = searchParams.get("batch");
    const search = searchParams.get("search");
    let filterQuery = '';
    if(course){
      filterQuery = filterQuery +` AND studentfor = '${course}'`;
    }
    if(batch){
      filterQuery = filterQuery +` AND batch_year = '${batch}'`;
    }
    if(search){
      filterQuery = filterQuery +` AND CONCAT(student_name, ' ', selected_in, ' ', student_rollno) LIKE '%${search}%'`;
    }
    // Fetch paginated results
    const [rows] = (await pool.query(
      `SELECT 
        r_id AS id,
        student_name AS name, 
        CONCAT('${ALUMNI_IMAGE_PATH}', student_image) AS image,
        selected_in AS college,
        REPLACE(batch_year, '-', '-') AS batch,
        student_f_name AS parent,
        student_rollno AS rollNo,
        priority AS rank,
        rank_achived AS address
      FROM tbl_result 
      WHERE status = 'Active'
      ${filterQuery}
      ORDER BY added_date DESC 
      LIMIT ? OFFSET ?`,
      [limit, offset]
    )) as any[];
    // Get total count of records
    const [result] = (await pool.query(
      `SELECT COUNT(*) AS total FROM tbl_result WHERE status = 'Active' ${filterQuery}`
    )) as any;
    const total = result[0].total;
    return NextResponse.json({
      success: true, data: rows, pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: offset + rows.length < total,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Error fetching updates:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch updates" }, { status: 500 });
  }
}

