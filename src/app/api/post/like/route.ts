import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { postId, userId}  = body;
  
        const likes = await db.postLike.findFirst({where: { userId: Number(userId),
          postId: postId,}})
        if (likes){
          await db.postLike.deleteMany({where: { userId: Number(userId),
            postId: postId
          }       
         })
        }
        if (!likes){
         await db.postLike.create({
            data: {
              userId: Number(userId),
              postId: postId,
            },
          });
        }
           
        
        return NextResponse.json({ message: "Post liked successfully"}, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }

}