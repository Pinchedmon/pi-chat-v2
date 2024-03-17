import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import Pusher from "pusher";

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: "Chat id is required" }, { status: 400 });
    }
    const chatMsgs = await db.message.deleteMany({
        where: { chatId: Number(id)}
    })
    const chat = await db.chat.delete({
      where: { id: Number(id) }
    })

    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID as string,
      key: process.env.NEXT_PUBLIC_PUSHER_KEY as string,
      secret: process.env.PUSHER_SECRET as string,
      cluster: "eu",
      useTLS: true,
      
  });
     pusher.trigger('chat', 'refetch', {
      message: true,
  })

    return NextResponse.json({ message: "Chat deleted successfully" }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: err }, { status: 500 });
  }
}