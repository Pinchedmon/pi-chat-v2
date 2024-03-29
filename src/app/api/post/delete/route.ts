import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {

    const body = await req.json();
    const { id } = body;
    console.log(id)

    if (!id) {
      return NextResponse.json({ message: "Post id is required" }, { status: 400 });
    }

    const postLike = await db.postLike.deleteMany({
      where: { postId: Number(id) }
    })

    const post = await db.post.delete({
      where: { id: Number(id) },
    });

    if (!post) {
      return NextResponse.json({ post: null, message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: err }, { status: 500 });
  }
}