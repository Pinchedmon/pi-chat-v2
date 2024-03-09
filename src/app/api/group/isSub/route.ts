import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        const id = searchParams.get('id');
        const subscribes = await db.group.findUnique({where: { id: Number(id),
      }, include: {
        members: true
      },
    }) 
        const isMember = subscribes?.members.some((member) => member.id === Number(userId));
        return NextResponse.json({ isSub: isMember}, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }

}