import EditButton from "@/utils/EditButton"
import { comment } from "@/utils/types/comment"
import { EditOption } from "@/utils/types/editButton"
import Image from "next/image"
interface CommentProps {
    comment: comment
}
const Comment = (props: CommentProps) => {
    return (
        <>
            {props &&
                <article className="mt-[7px] md:mt-[10px] flex  w-full rounded-[20px] px-4 py-2 first-letter:md:py-4 bg-bg-content dark:bg-dark-bg-content ">
                    <div className="mr-4 ">
                        <Image src={props.comment.author.avatar ? props.comment.author.avatar : 'https://i.pinimg.com/564x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg'} alt={"avatar"} width={50} height={50} style={{ borderRadius: '50px' }} />
                    </div>
                    <div className="flex grow flex-col">
                        <p className="font-medium text-[10px] md:text-[12px] text-gray-text">
                            {props.comment.author.tag}
                        </p>
                        <p className="mt-[2px] font-bold text-[16px] md:text-[20px]">
                            {props.comment.author.username}
                        </p>
                        <p className="text-[14px] md:text-[16px] mt-[6px]">
                            {props.comment.content}
                        </p>
                    </div>
                    <div className="">
                        <EditButton option={EditOption.COMMENT} widthIcon={26} widthButton={42} fill={"#b5b5b5"} id={props.comment.id} />
                    </div>
                </article>
            }
        </>
    )
}

export default Comment