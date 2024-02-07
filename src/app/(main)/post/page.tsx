'use client';
import Post from "@/components/Post"
import Comment from "@/components/Comment"
import PreviousButton from "@/utils/PreviousButton"
import Chatarea from "@/utils/SendMessageArea"
import useSWR from "swr"
import { fetcher } from "@/lib/fetcher"
import { redirect, useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react";
import { useEffect } from "react";
const PostPage = () => {
    const id = useSearchParams().get('id');
    const session = useSession();
    const { data, isLoading } = useSWR(`/api/post/${id}`, fetcher);
    useEffect(() => {
        if (!data?.post && !isLoading) {
            redirect('/posts')
        }
    }, [data?.post, isLoading])
    return (
        <>
            {data && data?.post && session.data &&
                <div className="mt-[10px] relative">
                    <PreviousButton href="posts?filter=wall" />
                    {data.post && <Post post={data.post} userId={session.data?.user.id} />}
                    <div className="ml-[30px] mb-[60px] md:mb-0">
                        {data.comments ?
                            data.comments.map((comment: any) => (
                                <Comment key={comment.id} comment={comment} />
                            )) :
                            <p className="text-center mt-[22px]">Нет постов</p>
                        }
                        <div className=" fixed md:sticky bottom-[70px] md:bottom-0 w-full p-2">
                            <Chatarea type={"post"} userId={session.data.user.id} />
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default PostPage