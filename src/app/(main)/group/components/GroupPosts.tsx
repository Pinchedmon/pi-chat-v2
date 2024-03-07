import PostsWall, { PostsType, SearchType } from '@/widgets/main/PostsWall'
import React from 'react'

const GroupPosts = ({ id }: { id: string }) => {
    return (
        <div>
            <PostsWall type={PostsType.GROUP} search={SearchType.GROUP} id={id} />
        </div>
    )
}

export default GroupPosts