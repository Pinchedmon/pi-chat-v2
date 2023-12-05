import PostsWall, { PostsType } from '@/widgets/main/PostsWall'
import React from 'react'

const PostsPage = () => {
    return (
        <div><PostsWall type={PostsType.SEARCH} /></div>
    )
}

export default PostsPage