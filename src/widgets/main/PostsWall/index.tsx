type post = {
    id: number;
    content: string;
    author: string;
    tag: string;
    publishedAt: Date;
    likes: number;
    comments: number;
    avatar: string;
    imageUrl?: string;
}
const posts: post[] = [
    {
        id: 1,
        content: 'Текст, небольшой',
        author: 'Pinchedmon',
        tag: '@pinchedmon',
        publishedAt: new Date(),
        likes: 23,
        avatar: '/assets/profileIcon.png',
        comments: 2
    },
    {
        id: 2,
        content: 'Текст, небольшой',
        author: 'Pinchedmon',
        tag: '@pinchedmon',
        avatar: '/assets/profileIcon.png',
        publishedAt: new Date(),
        likes: 23,
        comments: 2
    },
    {
        id: 3,
        content: 'Текст, небольшой',
        author: 'Pinchedmon',
        tag: '@pinchedmon',
        publishedAt: new Date(),
        avatar: '/assets/profileIcon.png',
        likes: 23,
        comments: 2
    },

]
type PostProps = {
    post: post
}
import Image from "next/image";
import EditButton from "../EditButton";
import LikeIcon from "./Components/LikeIcon";
import CommentIcon from "./Components/CommentIcon";
const Post: React.FC<PostProps> = (props) => {
    return (
        <div className="flex w-full mb-[12px] rounded-[20px] px-4 pt-4 pb-4 bg-bg-content dark:bg-dark-bg-content ">
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
                <EditButton width={26} height={26} fill={"#b5b5b5"} />
            </div>
        </div>
    )
}
const PostsWall = () => {
    return (
        <div className="w-full mt-[20px]">
            {posts.map((post: post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostsWall