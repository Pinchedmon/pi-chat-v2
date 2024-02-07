import Post from "@/components/Post";
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

export const enum SearchType {
    PROFILE = 'profile',
    WALL = 'wall',
    GROUP = 'group',
    SEARCH = 'search',
    FRIENDS = 'friends'
}
export interface PostsWall {
    posts?: post[];
    type: PostsType;
    search: SearchType
    id: number | string;
}

const PostsWall = (props: PostsWall) => {
    const { data, error } = useSWR(`/api/posts/${props.id}?filter=${props.search}`, fetcher);
    if (error) {
        return <div>Error loading posts!</div>;
    }
    console.log(data)
    if (!data) {
        return <div>Loading posts...</div>;
    }

    return (
        <div className={clsx([props.type, "z-0 space-y-4 w-full mt-[10px] mb-[20px] "])}>
            {data.posts && data.posts.map((post: post) => (
                <Post key={post.id} post={post} userId={props.id} />
            ))}
            {!data.posts || data?.posts?.length == 0 && <p className="text-center mt-[22px]">Нет постов</p>}
        </div>
    );

}

export default memo(PostsWall)