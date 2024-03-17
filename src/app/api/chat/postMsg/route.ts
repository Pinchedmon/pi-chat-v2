import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import Pusher from "pusher"
export async function POST(req: Request) {

    try {
        const body = await req.json();
        const { content, chatId, userId, senderId, img}  = body;
        let chat;
        if (chatId){
          chat = await db.chat.findUnique({
            where: {
              id: Number(chatId)
            }
          })
          console.log(chat)
        } else {

        
         chat = await db.chat.findFirst({
            where: {
                AND: [
                    { participants: { some: { id: Number(userId) } } },
                    { participants: { some: { id: Number(senderId) } } }
                ]
            }
        });
      }
        let message;
        if (!chat) {
            const newChat = await db.chat.create({
                data: {
                    name: '',
                    img: '',
                    participants: {
                        connect: [
                          { id: Number(userId) },
                          { id: Number(senderId) },
                        ],
                      },
                },
            })
             message = await db.message.create({
                data: {
                  content ,
                  chatId: newChat.id,
                  senderId: Number(senderId),
                  img,
                },
            
              });
        } else {
             message = await db.message.create({
                data: {
                  content ,
                  chatId: chat.id,
                  senderId: Number(senderId),
                  img,
                },
              });
        }

        const pusher = new Pusher({
        
            appId: process.env.PUSHER_APP_ID as string,
            key: process.env.NEXT_PUBLIC_PUSHER_KEY as string,
            secret: process.env.PUSHER_SECRET as string,
            cluster: "eu",
            useTLS: true,
        });
           pusher.trigger('chat', 'new_message', {
            message: message,
        })
             
        return NextResponse.json({ message: "Message created successfully"}, {status: 201});
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: err}, {status: 500});
    }
}