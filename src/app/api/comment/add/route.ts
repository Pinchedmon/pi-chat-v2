import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { content, authorId, postId}  = body;
        if (!content || !authorId) {
            return NextResponse.json({post: null, message: "User with this tag already exists"}, {status: 409})
        }
        const comment = await db.comment.create({
            data: {
                content: content,
                authorId: Number(authorId),
                postId: Number(postId)
            },
          });
        const user = await db.user.update({
            where: { id: Number(authorId) },
            data: { comments: { connect: { id: comment.id } } },
        });
        return NextResponse.json({comment: comment, message: "Сomment created successfully"}, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }

}