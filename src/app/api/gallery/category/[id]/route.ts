/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import pool from "@/lib/db"; // Import database connection
import { GALLERY_IMAGE_PATH } from "@/lib/constants";

export async function GET(req: Request) {
    try {
        // Extract category ID from request URL
        const url = new URL(req.url);
        const categoryId = url.pathname.split("/").pop(); // Get the last segment as ID

        if (!categoryId || isNaN(Number(categoryId))) {
            return NextResponse.json({ success: false, message: "Invalid category ID" }, { status: 400 });
        }

        // Fetch category data from MySQL
        const [rows] = (await pool.query(
            "SELECT CONCAT(?, image) AS image FROM tbl_gallery WHERE category = ? AND status = 'Active'",
            [GALLERY_IMAGE_PATH, categoryId]
        )) as any[];

        if (!rows.length) {
            return NextResponse.json({ success: false, message: "Category not found" }, { status: 404 });
        }

        // Extract images from rows
        const images = rows.map((row: { image: string }) => row.image);
        return NextResponse.json({ success: true, data: images });

    } catch (error) {
        console.error("Error fetching category:", error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
