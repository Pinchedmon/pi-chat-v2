'use client'
import PostsWall, { PostsType } from '@/widgets/main/PostsWall'
import SearchPostsBar from './components/SearchPostsBar'
import { redirect, useSearchParams } from 'next/navigation'
import { useLayoutEffect } from 'react'
import AddPostForm from './components/AddPostForm'
import { useSession } from 'next-auth/react'


const PostsPage = () => {
    const searchParams = useSearchParams()
    const filter = searchParams.get('filter')
    const session = useSession();

    useLayoutEffect(() => {
        filter === null && redirect('posts?filter=wall')
    }, [filter])

    return (
        <section>
            {filter !== null && session.data &&
                <>
                    <SearchPostsBar />
                    <div>
                        <AddPostForm id={session.data?.user.id} />
                        <PostsWall type={PostsType.SEARCH} id={session.data?.user.id} />
                    </div>
                </>}
        </section>
    )
}

export default PostsPage