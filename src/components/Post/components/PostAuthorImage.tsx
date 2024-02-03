'use client';
import Image from "next/image";
interface Props {
    image: string;
}
const PostAuthorImage = (props: Props) => {
    return (
        <div className="mr-2 md:mr-4 ">
            <Image src={props.image ? props.image : 'https://i.pinimg.com/564x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg'} alt={"avatar"} width={50} height={50} style={{ borderRadius: '50px' }} />
        </div>
    )
}

export default PostAuthorImage