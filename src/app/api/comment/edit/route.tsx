import { db } from '@/lib/db';
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { commentId, content, img } = body;

        const existingComment = await db.comment.findUnique({ where: { id: parseInt(commentId) } });
        if (!existingComment) {
            return NextResponse.json({ message: "Post not found!" }, { status: 404 });
        }
        await db.comment.update({
            where: { id: parseInt(commentId) },
            data: {
                content: content,
                img: img ? img : existingComment.img
            },
        });
        return NextResponse.json({ message: "Comment updated successfully" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 500 });
    }
}