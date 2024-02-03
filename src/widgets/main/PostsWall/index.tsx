import { Post } from "@/components/Post";
import { fetcher } from "@/lib/fetcher";
import { post } from "@/utils/types/post";
import clsx from "clsx";
import { memo } from "react";
import useSWR from "swr";

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
    id: number | string;
}

const PostsWall = (props: PostsWall) => {
    const { data, mutate, error } = useSWR(`/api/post/${props.id}`, fetcher);

    return (
        <div className={clsx([props.type, "z-0 space-y-4 w-full mt-[10px] mb-[20px] "])} >
            {
                data ?
                    data.posts.map((post: post) => (
                        <Post key={post.id} post={post} userId={props.id} />
                    )) :
                    <p className="text-center mt-[22px]">Нет постов</p>
            }
        </div >
    )

}

export default memo(PostsWall)