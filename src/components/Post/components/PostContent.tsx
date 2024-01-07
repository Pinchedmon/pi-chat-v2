'use client'
import Image from "next/image";
import Link from "next/link";

interface Props {
    id: number;
    content: string;
    image: string | undefined;
}

const PostContent = (props: Props) => {
    return (
        <Link href={`post?id=${props.id}`}>
            <p className="mt-[6px]">
                {props.content}
            </p>
            {props.image &&
                <div className="mt-[12px]">
                    <Image src={props.image} alt={""} width={200} height={200} />
                </div>}
        </Link>

    )
}

export default PostContent