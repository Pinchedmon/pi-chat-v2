import {db} from '@/lib/db';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextApiRequest, route: { params: { id: string } }) {
  try {

    const id = route.params.id;
    if (typeof id !== 'string' || !Number.isInteger(Number(id))) {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const user = await db.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const profile = await db.profile.findUnique({
      where: { userId: Number(id) },
    });

    if (!profile) {
      return NextResponse.json({ profile: null, message: "User with this tag already exists" }, { status: 409 });
    }

    return NextResponse.json({ profile: profile, user: {username: user.username, tag: user.tag, img: user.avatar}}, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}