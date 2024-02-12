'use client'

import CommentIcon from "@/components/buttons/CommentButton/CommentIcon";
import LikeIcon from "@/components/buttons/LikeButton/LikeIcon";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
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
    const { likes, comments, id, userId } = props;
    const handleLike = async () => {
        await axios.post(`/api/post/like`, { postId: id, userId: userId })
            .then(response => {
                pathname == '/posts' ? mutate(`/api/posts/${userId}?filter=wall`) : mutate(`/api/post/${id}`)
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