import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId, friendId}  = body;
        if (!userId || !friendId) {
            return NextResponse.json({friend: null, message: "User with this tag already exists"}, {status: 409})
        }
        await db.user.update({
            where: { id: Number(userId) },
            data: { follows: { push: Number(friendId) } },
        });
        return NextResponse.json({ message: "Сomment created successfully"}, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }
}