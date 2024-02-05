'use client';
import { Post } from "@/components/Post"
import Comment from "@/components/Comment"
import PreviousButton from "@/utils/PreviousButton"
import Chatarea from "@/utils/SendMessageArea"
import useSWR from "swr"
import { fetcher } from "@/lib/fetcher"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react";

const PostPage = () => {
    const id = useSearchParams().get('id');
    const session = useSession()
    const { data, error } = useSWR(`/api/post/${id}`, fetcher);
    console.log(data)
    return (
        <>
            {data && session.data &&
                <div className="mt-[10px] relative">
                    <PreviousButton href="posts?filter=wall" />
                    <Post post={data.post} userId={session.data?.user.id} />
                    <div className="ml-[30px] mb-[60px] md:mb-0">
                        {data.comments.length !== 0 ?
                            data.comments.map((comment: any) => (
                                <Comment key={comment.id} comment={comment} />


                            )) :
                            <p className="text-center mt-[22px]">Нет постов</p>
                        }
                        <div className="z-[60] fixed md:sticky bottom-[70px] md:bottom-0 w-full p-2">
                            <Chatarea type={"post"} userId={session.data.user.id} />
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default PostPage