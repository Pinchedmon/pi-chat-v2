import Post from "@/components/Post";
import { postsWallSlice } from "@/lib/features/posts/PostsWallSlice";
import { fetcher } from "@/lib/fetcher";
import { useAppDispatch } from "@/lib/hooks";
import { post } from "@/utils/types/post";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

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
    FRIENDS = 'follows'
}

export interface PostsWall {
    // posts?: post[];
    type: PostsType;
    search: SearchType
    id: number | string;
    searchQuery?: string;
}

export const getKey = (pageIndex: number, id: number | string, page: number, filter: string, search: string, searchQuery: string) => {
    const baseUrl = `/api/posts/${id}`;
    const queryParams = new URLSearchParams();
    if (filter) {
        queryParams.append('filter', filter);
    } else {
        queryParams.append('filter', search);
    }
    if (searchQuery) {
        queryParams.append('search', searchQuery);
    }
    queryParams.append('page', String(pageIndex + page));
    return `${baseUrl}?${queryParams.toString()}`;
};

const PostsWall = (props: PostsWall) => {
    const [page, setPage] = useState(1);
    const filter = useSearchParams().get('filter')
    const dispatch = useAppDispatch();
    const session = useSession()

    // const { data, error } = useSWR(`/api/posts/${props.id}?filter=${filter ? filter : props.search}`, fetcher);

    const { data, error, mutate, size, setSize } = useSWRInfinite((pageIndex: number) => getKey(pageIndex, props.id, page, filter as string, props.search, props.searchQuery || ''), fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    dispatch(postsWallSlice.actions.setMutate(mutate))

    if (error) {
        return <div>Error loading posts!</div>;
    }

    if (!data) {
        return <div>Loading posts...</div>;
    }
    const posts = data.flatMap(response => response.posts);
    console.log(posts[0])
    return (
        <div className=" pb-[100px]">
            {
                session.data &&
                <div className={clsx([props.type, "z-0 space-y-4 w-full mt-[10px] mb-[20px] "])}>
                    {posts[0] && posts.map((post: post) => (
                        <Post key={post.id} post={post} userId={session.data?.user.id} />
                    ))}
                    {!posts[0] && <p className="text-center mt-[22px]">Нет постов</p>}
                </div>
            }
            {
                posts.length == 8 && <button
                    className="border border-green rounded-xl p-2"
                    onClick={() => {
                        setPage(page + 1);
                        setSize(page)
                        mutate()
                    }}>Следующая стр.</button>
            }
            {
                page > 1 &&
                <button
                    className="border border-green rounded-xl p-2"
                    onClick={() => {
                        setPage(page - 1);
                        setSize(page)
                        mutate()
                    }}>Предущая стр.</button>
            }
        </div>
    );
}

export default PostsWall