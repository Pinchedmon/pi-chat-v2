'use client'

import CommentIcon from "@/utils/CommentButton/CommentIcon"
import LikeIcon from "@/utils/LikeButton/LikeIcon"
import axios from "axios";
import Link from "next/link";
import { useSWRConfig } from "swr";

interface Props {
    likes: number;
    comments: number;
    id: number
    userId: string | number;
}
const PostButtons = (props: Props) => {
    const { mutate } = useSWRConfig();
    const { likes, comments, id, userId } = props;
    const handleLike = async () => {
        await axios.post(`/api/post/like`, { postId: id, userId: userId })
            .then(response => {
                mutate(`/api/posts/${userId}`);
                mutate(`/api/post/${userId}`);
            })
    }
    return (
        <div className="mt-[10px] flex gap-[14px]">
            <button className="flex cursor-pointer gap-[8px]" onClick={() => handleLike()}>
                <LikeIcon width={24} height={24} fill={"#b5b5b5"} />
                <p className="font-normal text-gray-text text-[14px] md:text-[16px]">{likes}</p>
            </button>
            <Link href={`post?id=${props.id}`} className="flex cursor-pointer gap-[10px]">
                <CommentIcon width={24} height={24} fill={"#b5b5b5"} />
                <p className="font-normal text-gray-text text-[14px] md:text-[16px]">{comments}</p>
            </Link>
        </div>
    )
}

export default PostButtons