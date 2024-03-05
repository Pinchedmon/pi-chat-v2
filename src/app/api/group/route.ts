import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({friend: null, message: "Group with this tag already exists"}, {status: 409})
        }
    const group = await db.group.findUnique({
    where: {
      id: Number(id),
    },
})
    if (!group) {
        return NextResponse.json({follow: null, message: "No groups"}, {status: 200})
    }   
    return NextResponse.json({group: group}, {status: 200})
    
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }
}