import {db} from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const page = parseInt(searchParams.get('page') as string) || 1; 

    if (typeof id !== 'string' || !Number.isInteger(Number(id))) {
      return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }
    
    console.log(page)
    const limit = 5;
    const skipIndex = (page - 1) * limit;
    console.log(limit, skipIndex)

  const messages = await db.chat.findMany({
    where: { id: Number(id) },
   
    // select: {
    //   messages: true
    // },
    include: {
      messages:{
        skip: Number(skipIndex),
        take: Number(limit),
        orderBy: {
          createdAt: 'desc', // 'asc' for ascending order
        },
      }
    }
  });

  if (messages && messages[0] && messages[0].messages){
    messages[0].messages.reverse();
    return NextResponse.json({msgs: messages }, { status: 200 });
  } else {
    return NextResponse.json({ error: true }, { status: 404 });
  }
  
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}