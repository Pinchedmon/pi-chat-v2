'use client'

import CommentIcon from "@/components/buttons/CommentButton/CommentIcon";
import LikeIcon from "@/components/buttons/LikeButton/LikeIcon";
import { useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSWRConfig } from "swr";

interface Props {
    likes: number;
    comments: number;
    id: number
    userId: string | number;
}

const PostButtons = ((props: Props) => {
    const router = useRouter()
    const { mutate } = useSWRConfig();
    const pathname = usePathname();
    const groupid = useSearchParams().get('id');
    const { likes, comments, id, userId } = props;
    const { mutate: mutatePosts } = useAppSelector((state) => state.postsWall)
    mutatePosts && mutatePosts()
    const handleLike = async () => {
        await axios.post(`/api/post/like`, { postId: id, userId: userId })
            .then(response => {
                switch (pathname) {
                    case '/post': {
                        mutate(`/api/post/${id}`)
                        mutatePosts && mutatePosts()
                    }
                    case '/posts': {
                        mutate(`/api/posts/${userId}?filter=wall`)
                        mutatePosts && mutatePosts()
                    }
                    case '/group': {
                        mutate(`/api/posts/${groupid}?filter=group`)
                        mutatePosts && mutatePosts()
                    }
                    case '/profile': {
                        mutate(`/api/posts/${userId}?filter=profile`)
                        mutatePosts && mutatePosts()
                    }
                }
            })
    }
    return (
        <div className="mt-[10px] flex gap-[14px]">
            <button className="flex cursor-pointer gap-[8px]" onClick={() => handleLike()}>
                <LikeIcon width={24} height={24} fill={"#b5b5b5"} />
                <p className="font-normal text-gray-text text-[14px] md:text-[16px]">{likes}</p>
            </button>
            <button onClick={() => router.push(`/post?id=${props.id}`)} className="flex cursor-pointer gap-[10px]">
                <CommentIcon width={24} height={24} fill={"#b5b5b5"} />
                <p className="font-normal text-gray-text text-[14px] md:text-[16px]">{comments}</p>
            </button>
        </div>
    )
})

export default PostButtons;