const posts: post[] = [
    {
        id: 1,
        content: 'Текст, небольшой',
        author: 'Pinchedmon',
        tag: '@pinchedmon',
        publishedAt: new Date(),
        likes: 23,
        avatar: '/assets/profileIcon.png',
        comments: 2,
        imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg'
    },
    {
        id: 2,
        content: 'Текст, небольшой',
        author: 'Pinchedmon',
        tag: '@pinchedmon',
        avatar: '/assets/profileIcon.png',
        publishedAt: new Date(),
        likes: 23,
        comments: 2
    },
    {
        id: 3,
        content: 'Текст, небольшой',
        author: 'Pinchedmon',
        tag: '@pinchedmon',
        publishedAt: new Date(),
        avatar: '/assets/profileIcon.png',
        likes: 23,
        comments: 2
    },

    {
        id: 4,
        content: 'Текст, небольшой',
        author: 'Pinchedmon',
        tag: '@pinchedmon',
        publishedAt: new Date(),
        avatar: '/assets/profileIcon.png',
        likes: 23,
        comments: 2,
        imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg'
    },
]
import { Post } from "@/components/Post";
import { post } from "@/utils/types/post";

import clsx from "clsx";
import { memo } from "react";
export const enum PostsType {
    PROFILE = ' lg:columns-2',
    WALL = 'wall',
    GROUP = 'lg:columns-2',
    SEARCH = '',
    ONLYFRIENDS = 'onlyFriends'
}

export interface PostsWall {
    posts?: post[];
    type: PostsType;
}

const PostsWall = (props: PostsWall) => {
    return (
        <div className={clsx([props.type, "z-0 space-y-4 w-full mt-[10px] mb-[20px] "])} >
            {
                posts.map((post: post) => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div >
    )

}

export default memo(PostsWall)