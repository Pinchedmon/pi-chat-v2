import {db} from '@/lib/db';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, route: { params: { id: string } }) {
  try {
    const { searchParams } = new URL(req.url);
    const filter = searchParams.get('filter');
    const id = route.params.id;
    if (typeof id !== 'string' || !Number.isInteger(Number(id))) {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }
    console.log(filter)
    const user = await db.user.findUnique({
        where: { id: Number(id) },
      });
  
   
    let posts;
    switch(filter) {
      case 'group': {
        const getPostsWithLikeCounts = async () => {
          const posts = await db.post.findMany({
            where: {
                  groupId:  Number(id)
            },
            select: {
              id: true,
              content: true,
              img: true,
              group: {
                select: {
                  name: true,
                  id: true,
                  img: true,
                  userId: true
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
              const commentCount = await db.comment.count({
                where: {
                  postId: post.id,
                },
              });
              return { ...post, likes: likeCount, comments: commentCount };
            })
          );
        
          return postsWithLikeCounts;
        };
         posts = await getPostsWithLikeCounts();
         break;
      }
      case 'follows': {
        const getPostsWithLikeCounts = async () => {
          if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
          }   
          const posts = await db.post.findMany({
            where: {
                  authorId: {
                    in: user.follows
                  },
            },
  
            select: {
              id: true,
              content: true,
              img: true,
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
              const commentCount = await db.comment.count({
                where: {
                  postId: post.id,
                },
              });
              return { ...post, likes: likeCount, comments: commentCount };
            })
          );
        
          return postsWithLikeCounts;
        };
         posts = await getPostsWithLikeCounts();
         break;
      }
      case 'wall':{
        const getPostsWithLikeCounts = async () => {
          const posts = await db.post.findMany({ 
            where:{
              groupId: null
            },
            select: {
              id: true,
              content: true,
              img: true,
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
              const commentCount = await db.comment.count({
                where: {
                  postId: post.id,
                },
              });
              return { ...post, likes: likeCount, comments: commentCount };
            })
          );
        
          return postsWithLikeCounts;
        };
        posts = await getPostsWithLikeCounts();
        break;
      }
      case 'search':{
        const getPostsWithLikeCounts = async () => {
          const posts = await db.post.findMany({ 
            where: {
              content: {
                contains: '',
                mode: 'insensitive',
              },
            },
            select: {
              id: true,
              content: true,
              img: true,
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
              const commentCount = await db.comment.count({
                where: {
                  postId: post.id,
                },
              });
              return { ...post, likes: likeCount, comments: commentCount };
            })
          );
        
          return postsWithLikeCounts;
        };
        posts = await getPostsWithLikeCounts();
        break;
      }
      case 'profile': {
        const getPostsWithLikeCounts = async () => {
          const posts = await db.post.findMany({
            where: {
             authorId:  parseInt(id)
            },
  
            select: {
              id: true,
              content: true,
              img: true,
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
              const commentCount = await db.comment.count({
                where: {
                  postId: post.id,
                },
              });
              return { ...post, likes: likeCount, comments: commentCount };
            })
          );
        
          return postsWithLikeCounts;
        };
        posts = await getPostsWithLikeCounts();
        break;
      }
    }
      
    
     
    if (!posts) {
      return NextResponse.json({ posts: undefined, message: "Не могу найти" }, { status: 409 });
    }

    return NextResponse.json({ posts: posts,}, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}