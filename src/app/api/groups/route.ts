import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        const search = searchParams.get('search');
   
        const page = parseInt(searchParams.get('page') as string) || 1; 
        console.log(page)
        const limit = 10; // set the number of records per page
        let groups;
        if ( userId) {
            groups = await db.group.findMany({
                where: {
                  userId: Number(userId),
                  name: { contains: search || '' }
                },
                skip: (page - 1) * limit,
                take: limit,
            })
        } else {
            groups = await db.group.findMany({
                where: {
                    name: { contains: search || '' }
                  },
                  skip: (page - 1) * limit,
                  take: limit,
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