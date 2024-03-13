import {db} from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const page = parseInt(searchParams.get('page') as string) || 1; 

    // if (typeof id !== 'string' || !Number.isInteger(Number(id))) {
    //   return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    // }
    const limit = 10;
  
    const skip = (page - 1) * limit;
    const chats = await db.user.findFirst({
        where: {
            id: Number(id)
        },
        select: {
          chats: {
        
            include: {
              participants: {
                where: {
                    NOT: {
                        id: Number(id)
                    }
                  },
                select: {
                  id: true,
                  username: true,
                  avatar: true
                }
              }
            }
          }
        }
      });
       
     
    // const data = await db.user.findUnique({
    //     where: { id: Number(id) },
    //     select: {
    //         follows: true
    //     }
    //   }) ;
    //   console.log(data)
    //   if (!data) {
    //     return NextResponse.json({Message: 'no follows' }, { status: 404 });
    //   }
      
    
        
    
    return NextResponse.json({chats: chats }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}