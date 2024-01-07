import EditButton from "@/utils/EditButton"
import { comment } from "@/utils/types/comment"
import { EditOption } from "@/utils/types/editButton"
import Image from "next/image"
interface CommentProps {
    comment: comment
}
const Comment = (props: CommentProps) => {
    return (
        <div className="mt-[10px] flex  w-full rounded-[50px] px-4 pt-4 pb-4 bg-bg-content dark:bg-dark-bg-content ">
            <div className="mr-4 ">
                <Image src={props.comment.avatar} alt={"avatar"} width={50} height={50} style={{ borderRadius: '50px' }} />
            </div>
            <div className="flex grow flex-col">
                <p className="font-medium text-[12px] text-gray-text">
                    {props.comment.tag}
                </p>
                <p className="mt-[2px] font-bold text-[20px]">
                    {props.comment.author}
                </p>
                <p className="mt-[6px]">
                    {props.comment.content}
                </p>
            </div>
            <div className="">
                <EditButton option={EditOption.COMMENT} widthIcon={26} widthButton={42} fill={"#b5b5b5"} />
            </div>
        </div>
    )
}

export default Comment