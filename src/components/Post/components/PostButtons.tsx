'use client'

import CommentIcon from "@/utils/CommentButton/CommentIcon"
import LikeIcon from "@/utils/LikeButton/LikeIcon"

interface Props {
    likes: number;
    comments: number;
}
const PostButtons = (props: Props) => {
    return (
        <div className="mt-[10px] flex gap-[14px]">
            <div className="flex cursor-pointer gap-[8px]">
                <LikeIcon width={24} height={24} fill={"#b5b5b5"} />
                <p className="font-normal text-gray-text">{props.likes}</p>
            </div>
            <div className="flex cursor-pointer gap-[10px]">
                <CommentIcon width={24} height={24} fill={"#b5b5b5"} />
                <p className="font-normal text-gray-text">{props.comments}</p>
            </div>
        </div>
    )
}

export default PostButtons