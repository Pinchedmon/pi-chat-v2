import {db} from '@/lib/db';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {postId, content, img}  = body;
      
        const existingPost = await db.post.findUnique({ where: { id: parseInt(postId) } });
            if (!existingPost) {
                 return NextResponse.json({ message: "Post not found!" }, { status: 404 });
            }
        await db.post.update({
            where: { id: parseInt(postId) },
            data: {
              content: content,
              img: img ? img : existingPost.img
            },
          });
        return NextResponse.json({message: "Post updated successfully"}, {status: 200});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }
}