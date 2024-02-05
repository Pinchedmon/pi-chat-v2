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

      const getCommentsWithLikeCounts = async () => {
        const comments = await db.comment.findMany({
          select: {
            id: true,
            content: true,
            author: {
              select: {
                tag: true,
                username: true,
                id: true,
                avatar: true,
              },
            },
          },
        });
      
        const commentsWithLikeCounts = await Promise.all(
          comments.map(async (comment) => {
            const likeCount = await db.commentLike.count({
              where: {
                commentId: comment.id,
              },
            });
      
            return { ...comment, likes: likeCount };
          })
        );
      
        return commentsWithLikeCounts;
      };
      const comments = await getCommentsWithLikeCounts();
    if (!comments) {
      return NextResponse.json({ comments: null, message: "Posts with this tag already exists" }, { status: 409 });
    }

    return NextResponse.json({ comments: comments}, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}