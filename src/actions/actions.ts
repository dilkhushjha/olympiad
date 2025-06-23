/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import pool from "@/lib/db";

const dbGet = async (query: string, params?:string[]) : Promise<any[]> => {
    const [rows] = await pool.query(query, params);
    // Ensure rows is an array before calling map
    if (!Array.isArray(rows)) {
      throw new Error("Query result is not an array");
    }
    return rows;
};

export async function getExamDownloads(examName: string) {
    const query = `SELECT 
                        id,
                        exam,
                        detail,
                        (
                            SELECT CONCAT('[', GROUP_CONCAT(
                                JSON_OBJECT(
                                    'linkpageurl', linkpageurl,
                                    'file', file,
                                    'detail', detail
                                )
                            ), ']')
                            FROM tbl_download 
                            WHERE tbl_download.exam_id = tbl_exam.id
                        ) AS downloads
                    FROM tbl_exam 
                    WHERE slug = 'downloads' 
                    AND status = 'Active' 
                    AND exam LIKE ?
                    ORDER BY orderby DESC;`;
    try {
        const rows: any[] = await dbGet(query, [`%${examName}%`]);
        return rows.map((row: any) => ({
            ...row,
            downloads: row.downloads ? JSON.parse(row.downloads) : [],
        }))[0];
    } catch (error) {
        console.log(error);
        return [];
    }
}