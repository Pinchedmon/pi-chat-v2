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

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        const friendId = searchParams.get('friendId');
        if (!userId || !friendId) {
            return NextResponse.json({friend: null, message: "User with this tag already exists"}, {status: 409})
        }
        
    const follows = await db.user.findUnique({
    select: {
        follows: true,
    },
    where: {
      id: Number(userId),
    },
})
if (!follows) {
    return NextResponse.json({follow: null, message: "User with this tag already exists"}, {status: 409})
}
    if (follows.follows.includes(Number(friendId))){
        return NextResponse.json({ follow: true}, {status: 200});
    } else {
        return NextResponse.json({ follow: false}, {status: 200});
    }  
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        const friendId = searchParams.get('friendId');
        if (!userId || !friendId) {
            return NextResponse.json({friend: null, message: "User with this tag already exists"}, {status: 409})
        }
        const user = await db.user.findUnique({
            where: { id: Number(userId) },
        })
        const updatedUser = await db.user.update({
            where: { id: Number(userId) },
            data: {
              follows: {
                set: Array.from(
                  (
                   user!.follows.filter(
                      (id: number) => id !== Number(friendId) 
                    ) 
                  ).values()
                ),
              },
            },
          });
       
        return NextResponse.json({ message: "Сomment created successfully", updatedUser}, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }

}