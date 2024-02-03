import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { content, authorId}  = body;
        if (!content || !authorId) {
            return NextResponse.json({post: null, message: "User with this tag already exists"}, {status: 409})
        }
        const post = await db.post.create({
            data: {
                content: content,
                authorId: Number(authorId)
            },
          });
        const user = await db.user.update({
            where: { id: Number(authorId) },
            data: { posts: { connect: { id: post.id } } },
        });
        return NextResponse.json({post: post, message: "Post created successfully"}, {status: 201});
    } catch (err) {
        return NextResponse.json({ message: err}, {status: 500});
    }

}