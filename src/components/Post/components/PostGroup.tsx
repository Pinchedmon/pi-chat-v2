import Link from "next/link";

interface Props {
    id: string;
    name: string;
}
const PostGroup = (props: Props) => {
    return (
        <div className="flex flex-col cursor-pointer" >
            <div>
                <Link className="mt-[2px] font-bold text-[16px] md:text-[20px]" href={`group?id=${props.id}`}>
                    {props.name}
                </Link>
            </div>
        </div>
    )
}

export default PostGroup