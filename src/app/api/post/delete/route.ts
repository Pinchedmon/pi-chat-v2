import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ message: "Post id is required" }, { status: 400 });
    }

    const post = await db.post.delete({
      where: { id: Number(id) },
    });

    if (!post) {
      return NextResponse.json({ post: null, message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}