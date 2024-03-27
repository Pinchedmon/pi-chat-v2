import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {

    const body = await req.json();
    const { id } = body;


    if (!id) {
      return NextResponse.json({ message: "Group id is required" }, { status: 400 });
    }

    const post = await db.post.deleteMany({
      where: { groupId: Number(id) }
    })

    const group = await db.group.delete({
      where: { id: Number(id) },
    });

    if (!group) {
      return NextResponse.json({ post: null, message: "Group not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Group deleted successfully" }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: err }, { status: 500 });
  }
}