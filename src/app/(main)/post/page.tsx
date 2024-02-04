'use client';
import { Post } from "@/components/Post"
import Comment from "@/components/Comment"
import PreviousButton from "@/utils/PreviousButton"
import Chatarea from "@/utils/Chatarea"
import useSWR from "swr"
import { fetcher } from "@/lib/fetcher"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react";

const PostPage = () => {
    const id = useSearchParams().get('id');
    const session = useSession()
    const { data, error } = useSWR(`/api/post/${id}`, fetcher);
    console.log(data)
    return (<>
        {data && session.data &&
            <div className="mt-[10px] relative">
                <PreviousButton href="posts?filter=wall" />
                <Post post={data.post} userId={session.data?.user.id} />
                <div className="ml-[30px] mb-[60px] md:mb-0">

                    {/* <Comment comment={{
                        id: 1,
                        content: "Кажется твой пост не любят бро",
                        author: "Антон",
                        tag: "Антонио",
                        publishedAt: new Date(),
                        avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',

                    }} />
                    <Comment comment={{
                        id: 1,
                        content: "Кажется твой пост не любят бро",
                        author: "Антон",
                        tag: "Антонио",
                        publishedAt: new Date(),
                        avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',

                    }} />

                    <Comment comment={{
                        id: 2,
                        content: "Мяу",
                        author: "Маркет",
                        tag: "Яндекс",
                        publishedAt: new Date(),
                        avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',

                    }} />
                    <Comment comment={{
                        id: 3,
                        content: "Гаф",
                        author: "Пырзя",
                        tag: "Пончик",
                        publishedAt: new Date(),
                        avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',

                    }} /> */}
                </div>
                {/* <CommentWall/> */}

                <div className="z-[60] fixed md:sticky bottom-[70px] md:bottom-0 w-full p-2">
                    <Chatarea />
                </div>

            </div>
        }
    </>
    )
}

export default PostPage