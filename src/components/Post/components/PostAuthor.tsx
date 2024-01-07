'use client'

import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
    tag: string;
    author: string;
}
const PostAuthor = (props: Props) => {
    return (
        <Link className="cursor-pointer" href={`profile?tag=${props.tag}`}>
            <p className="font-medium text-[12px] text-gray-text">
                {props.tag}
            </p>
            <p className="mt-[2px] font-bold text-[20px]">
                {props.author}
            </p>
        </Link>
    )
}

export default PostAuthor