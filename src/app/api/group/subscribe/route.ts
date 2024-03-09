import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { groupId, userId}  = body;
  
        const subscribes = await db.group.findUnique({where: { id: Number(groupId),
      }, include: {
        members: true
      },
    })
       
        const isMember = subscribes?.members.some((member) => member.id === Number(userId));
        if (isMember){
            await await db.group.update({where: { id: Number(groupId),
            }, select: {
              members: true
            },
            data: { members: { disconnect: { id: Number(userId) } } },
          })
        }
        if (!isMember){
         await await db.group.update({where: { id: Number(groupId),
         }, select: {
           members: true
         },
         data: { members: { connect: { id: Number(userId) } } },
       })
         }
           
        
        return NextResponse.json({ message: "Post liked successfully"}, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }

}