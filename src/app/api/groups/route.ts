import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        let groups;
        if ( userId) {
            groups = await db.group.findMany({
                where: {
                  userId: Number(userId),
                },
            })
        } else {
            groups = await db.group.findMany({
            })
        }
   
    if (!groups) {
        return NextResponse.json({groups: null, message: "No groups"}, {status: 200})
    }   
    return NextResponse.json({groups: groups}, {status: 200})
    
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }
}