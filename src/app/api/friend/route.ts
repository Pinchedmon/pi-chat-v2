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
            data: { friends: { push: Number(friendId) } },
        });
        await db.user.update({
            where: { id: Number(friendId) },
            data: { friends: { push:  Number(userId) } },
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
        
    const friend = await db.user.findUnique({
    where: {
      id: Number(friendId),
    },
})
if (!friend) {
    return NextResponse.json({friend: null, message: "User with this tag already exists"}, {status: 409})
}
    if (friend.friends.includes(Number(userId))){
        return NextResponse.json({ friend: true}, {status: 200});
    } else {
        return NextResponse.json({ friend: false}, {status: 200});
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
        const friend = await db.user.findUnique({
            where: { id: Number(friendId) },
        })
        await db.user.update({
            where: { id: Number(userId) },
            data: { friends: { push: Number(friendId) } },
        });
        const updatedUser = await db.user.update({
            where: { id: Number(userId) },
            data: {
              friends: {
                set: Array.from(
                  (
                   user!.friends.filter(
                      (id: number) => id !== Number(friendId) 
                    ) 
                  ).values()
                ),
              },
            },
          });
        const updatedFriend = await db.user.update({
            where: { id: Number(friendId) },
            data: {
              friends: {
                set: Array.from(
                  (
                   friend!.friends.filter(
                      (id: number) => id !== Number(userId)
                    ) 
                  ).values()
                ),
              },
            },
          });
        return NextResponse.json({ message: "Сomment created successfully"}, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }

}