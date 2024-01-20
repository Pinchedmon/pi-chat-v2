'use client'
import PostsWall, { PostsType } from '@/widgets/main/PostsWall'
import SearchPostsBar from './components/SearchPostsBar'
import { redirect, useSearchParams } from 'next/navigation'
import { useLayoutEffect } from 'react'

const PostsPage = () => {
    const searchParams = useSearchParams()
    const filter = searchParams.get('filter')
    useLayoutEffect(() => {
        filter === null && redirect('posts?filter=wall')
    }, [filter])
    return (
        <section>
            {filter !== null &&
                <>
                    <SearchPostsBar />
                    <PostsWall type={PostsType.SEARCH} />
                </>}
        </section>
    )
}

export default PostsPage