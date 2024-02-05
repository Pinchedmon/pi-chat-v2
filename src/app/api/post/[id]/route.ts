import {db} from '@/lib/db';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextApiRequest, route: { params: { id: string } }) {
  try {

    const id = route.params.id;
    if (typeof id !== 'string' || !Number.isInteger(Number(id))) {
      return NextResponse.json({ message: "Invalid post ID" }, { status: 400 });
    }
    const likeCount = await db.postLike.count({
      where: {
        postId: Number(id),
      },
    });
    const commentCount = await db.comment.count({
      where: {
        postId: Number(id),
      },
    });
    const comments = await db.comment.findMany({
      where: {
        postId: Number(id),
      },
      select: {
        content: true,
        id: true,
        author: {
          select: {
            tag: true,
            username: true,
            id: true,
            avatar: true,
          },
        },
      }
    })
    const post = await db.post.findFirst({
        where: {id: Number(id)},
        select: {
          id: true,
          content: true,
          author: {
            select: {
              tag: true,
              username: true,
              id: true,
              avatar: true
            },
          },
        },
      });
    if (!post) {
      return NextResponse.json({ post: null, message: "Posts with this tag already exists" }, { status: 409 });
    }

    return NextResponse.json({ post: {...post, likes: likeCount, comments: commentCount}, comments: comments }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}