import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ message: "Post id is required" }, { status: 400 });
    }

    const comment = await db.comment.delete({
      where: { id: Number(id) },
    });

    if (!comment) {
      return NextResponse.json({ comment: null, message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Comment deleted successfully" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}