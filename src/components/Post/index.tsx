'use client'


import { post } from "@/utils/types/post"
import EditButton from "@/components/buttons/EditButton"
import { EditOption } from "@/utils/types/editButton"
import PostAuthorImage from "./components/PostAuthorImage"
import PostAuthor from "./components/PostAuthor"
import PostContent from "./components/PostContent"

import { memo } from "react"
import PostButtons from "./components/PostButtons"
import PostGroupImage from "./components/PostGroupImage"
import PostGroup from "./components/PostGroup"
import { useSession } from "next-auth/react"
type PostProps = {
    post: post
    userId: number | string;

}
const Post = (props: PostProps) => {
    const session = useSession()
    const { post, userId } = props
    return (
        <article className="  flex  w-full rounded-[20px] px-2 md:px-4 py-2 md:py-4 bg-bg-content dark:bg-dark-bg-content ">
            {post.author && <PostAuthorImage image={post.author.avatar} />}
            {post.group && <PostGroupImage img={post.group?.img} />}
            <div className="flex grow flex-col" >
                {post.author && <PostAuthor tag={post.author.tag} author={post.author.username} userId={post.author.id} />}
                {post.group && <PostGroup id={post.group.id} name={post.group.name} />}
                <PostContent content={post.content} image={post.img} id={post.id} />
                <PostButtons likes={post.likes} comments={post.comments} id={post.id} userId={userId} />
            </div>
            {((userId == post?.author?.id || post?.group?.userId) || session.data?.user.isAdmin) &&
                <div className=" ">
                    <EditButton option={EditOption.POST} widthIcon={26} widthButton={42} fill={"#b5b5b5"} id={post.id} data={{ content: post.content, img: post.img }} />
                </div>
            }
            {/* {(userId == || session.data?.user.isAdmin) &&
                <div className=" ">
                    <EditButton option={EditOption.POST} widthIcon={26} widthButton={42} fill={"#b5b5b5"} id={post.id} data={{ content: post.content, img: post.img }} />
                </div>
            } */}
        </article>
    )
}
export default memo(Post);
