import { post } from "@/utils/types/post"
import EditButton from "../../../../components/EditButton"
import CommentIcon from "./CommentIcon"
import LikeIcon from "./LikeIcon"
import Image from "next/image"
type PostProps = {
    post: post
}
export const Post: React.FC<PostProps> = (props) => {
    return (
        <div className="  flex  w-full rounded-[20px] px-4 pt-4 pb-4 bg-bg-content dark:bg-dark-bg-content ">
            <div className="mr-4 ">
                <Image src={props.post.avatar} alt={"avatar"} width={50} height={50} style={{ borderRadius: '50px' }} />
            </div>
            <div className="flex grow flex-col">
                <p className="font-medium text-[12px] text-gray-text">
                    {props.post.tag}
                </p>
                <p className="mt-[2px] font-bold text-[20px]">
                    {props.post.author}
                </p>
                <p className="mt-[6px]">
                    {props.post.content}
                </p>
                {props.post.imageUrl &&
                    <div className="mt-[12px]">
                        <Image src={props.post.imageUrl} alt={""} width={200} height={200} />
                    </div>}
                <div className="mt-[10px] flex gap-[14px]">
                    <div className="flex cursor-pointer gap-[8px]">
                        <LikeIcon width={24} height={24} fill={"#b5b5b5"} />
                        <p className="font-normal text-gray-text">{props.post.likes}</p>
                    </div>
                    <div className="flex cursor-pointer gap-[10px]">
                        <CommentIcon width={24} height={24} fill={"#b5b5b5"} />
                        <p className="font-normal text-gray-text">{props.post.comments}</p>
                    </div>
                </div>
            </div>
            <div className=" ">
                <EditButton widthIcon={26} widthButton={42} fill={"#b5b5b5"} />
            </div>
        </div>
    )
}