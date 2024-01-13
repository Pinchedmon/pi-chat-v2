
import { post } from "@/utils/types/post"
import EditButton from "@/utils/EditButton"
import { EditOption } from "@/utils/types/editButton"
import PostAuthorImage from "./components/PostAuthorImage"
import PostAuthor from "./components/PostAuthor"
import PostContent from "./components/PostContent"
import PostButtons from "./components/PostButtons"
type PostProps = {
    post: post
}
export const Post: React.FC<PostProps> = (props) => {

    return (

        <div className="  flex  w-full rounded-[20px] px-2 md:px-4 py-2 md:py-4 bg-bg-content dark:bg-dark-bg-content ">
            <PostAuthorImage image={props.post.avatar} />
            <div className="flex grow flex-col" >
                <PostAuthor tag={props.post.tag} author={props.post.author} />
                <PostContent content={props.post.content} image={props.post.imageUrl} id={props.post.id} />
                <PostButtons likes={props.post.likes} comments={props.post.comments} />
            </div>
            <div className=" ">
                <EditButton option={EditOption.POST} widthIcon={26} widthButton={42} fill={"#b5b5b5"} />
            </div>
        </div>
    )
}