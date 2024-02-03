
import { post } from "@/utils/types/post"
import EditButton from "@/utils/EditButton"
import { EditOption } from "@/utils/types/editButton"
import PostAuthorImage from "./components/PostAuthorImage"
import PostAuthor from "./components/PostAuthor"
import PostContent from "./components/PostContent"
import PostButtons from "./components/PostButtons"
type PostProps = {
    post: post
    userId: number | string;

}
export const Post: React.FC<PostProps> = (props) => {
    const { post, userId } = props
    return (

        <article className="  flex  w-full rounded-[20px] px-2 md:px-4 py-2 md:py-4 bg-bg-content dark:bg-dark-bg-content ">
            <PostAuthorImage image={post.author.avatar} />
            <div className="flex grow flex-col" >
                <PostAuthor tag={post.author.tag} author={post.author.username} userId={post.author.id} />
                <PostContent content={post.content} image={post.imageUrl} id={post.id} />
                <PostButtons likes={post.likes} comments={post.comments} />
            </div>
            {userId == post.author.id &&
                <div className=" ">
                    <EditButton option={EditOption.POST} widthIcon={26} widthButton={42} fill={"#b5b5b5"} id={post.id} />
                </div>
            }
        </article>
    )
}