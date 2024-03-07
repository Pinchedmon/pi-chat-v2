import Post from "@/components/Post";
import { fetcher } from "@/lib/fetcher";
import { post } from "@/utils/types/post";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export const enum PostsType {
    PROFILE = ' ',
    WALL = 'wall',
    GROUP = '',
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
    // posts?: post[];
    type: PostsType;
    search: SearchType
    id: number | string;
}

const PostsWall = (props: PostsWall) => {
    const filter = useSearchParams().get('filter')
    const session = useSession()
    const { data, error } = useSWR(`/api/posts/${props.id}?filter=${filter ? filter : props.search}`, fetcher);
    if (error) {
        return <div>Error loading posts!</div>;
    }
    if (!data) {
        return <div>Loading posts...</div>;
    }

    return (
        <>
            {
                session.data &&
                <div className={clsx([props.type, "z-0 space-y-4 w-full mt-[10px] mb-[20px] "])}>
                    {data.posts && data.posts.map((post: post) => (
                        <Post key={post.id} post={post} userId={session.data?.user.id} />
                    ))}
                    {!data.posts || data?.posts?.length == 0 && <p className="text-center mt-[22px]">Нет постов</p>}
                </div>
            }
        </>
    );

}

export default PostsWall