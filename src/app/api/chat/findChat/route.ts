import {db} from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const userId = searchParams.get('userId');
    const page = parseInt(searchParams.get('page') as string) || 1; 
    
    // if (typeof id !== 'string' || !Number.isInteger(Number(id))) {
    //   return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    // }
    const limit = 10;
    
    const skip = (page - 1) * limit;
    const chat = await db.chat.findUnique({
          where: { id: Number(id) },
        //   skip,
        //   take: limit,
        // }
        include: {
            participants: {
              where: {
                  NOT: {
                      id: Number(userId)
                  }
                },
              select: {
                id: true,
                username: true,
                avatar: true
              }
            }
        }
    });
    if (!chat){
      return NextResponse.json({ message: "No chat" }, { status: 400 });
    }
        
    return NextResponse.json({chat: chat }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}