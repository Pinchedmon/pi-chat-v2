'use client';
import Image from "next/image";
interface Props {
    image: string;
}
const PostAuthorImage = (props: Props) => {
    return (
        <div className="mr-2 md:mr-4 ">
            <Image src={props.image} alt={"avatar"} width={50} height={50} style={{ borderRadius: '50px' }} />
        </div>
    )
}

export default PostAuthorImage