import { db } from "@/lib/db";
import { connect } from "http2";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const Pusher = require('pusher-js')
    try {
        const body = await req.json();
        const { content, chatId, userId, senderId, img}  = body;
    
        const chat = await db.chat.findFirst({
            where: {
                AND: [
                    { participants: { some: { id: Number(userId) } } },
                    { participants: { some: { id: Number(senderId) } } }
                ]
            }
        });
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

        // const pusher = new Pusher({
        //     appId: process.env.PUSHER_APP_ID,
        //     key: process.env.NEXT_PUBLIC_PUSHER_KEY,
        //     secret: process.env.PUSHER_SECRET,
        //     cluster: "eu",
        //     useTLS: "yes",
        // });

        // pusher.trigger('chat', 'hello', {
        //     message: `${JSON.stringify(message)}\n\n`,
        // })

        return NextResponse.json({ message: "Message created successfully"}, {status: 201});
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: err}, {status: 500});
    }
}