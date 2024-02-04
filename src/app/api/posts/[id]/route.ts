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

      const getPostsWithLikeCounts = async () => {
        const posts = await db.post.findMany({
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
      
        const postsWithLikeCounts = await Promise.all(
          posts.map(async (post) => {
            const likeCount = await db.postLike.count({
              where: {
                postId: post.id,
              },
            });
      
            return { ...post, likes: likeCount };
          })
        );
      
        return postsWithLikeCounts;
      };
      const posts = await getPostsWithLikeCounts();
    if (!posts) {
      return NextResponse.json({ posts: null, message: "Posts with this tag already exists" }, { status: 409 });
    }

    return NextResponse.json({ posts: posts,}, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}