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
      `SELECT *
   FROM tbl_updates 
   WHERE status = 'active' 
   ORDER BY add_date DESC 
   LIMIT ? OFFSET ?`,
      [limit, offset]
    )) as any[];

    // Get total count of records
    const [{ total }] = (await pool.query(
      `SELECT COUNT(*) AS total FROM tbl_updates WHERE status = 'active'`
    )) as any;

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
