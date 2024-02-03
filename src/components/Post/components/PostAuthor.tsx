import Link from "next/link";

interface Props {
    tag: string;
    userId: string;
    author: string;
}
const PostAuthor = (props: Props) => {
    return (
        <div className="flex flex-col cursor-pointer" >
            <div>
                <Link className=" font-medium text-[10px] md:text-[12px] text-gray-text" href={`profile?id=${props.userId}`}>
                    {props.tag}
                </Link>
            </div>
            <div>
                <Link className="mt-[2px] font-bold text-[16px] md:text-[20px]" href={`profile?id=${props.userId}`}>
                    {props.author}
                </Link>
            </div>
        </div>
    )
}

export default PostAuthor