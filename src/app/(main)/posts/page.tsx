'use client'
import PostsWall, { PostsType, SearchType } from '@/widgets/main/PostsWall'
import { redirect, useSearchParams } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import AddPostForm from './components/AddPostForm'
import { useSession } from 'next-auth/react'
import { useAppSelector } from '@/lib/hooks'
import { useDebounce } from 'use-debounce'


const PostsPage = () => {
    const searchParams = useSearchParams()
    const filter = searchParams.get('filter')
    const session = useSession();
    const [searchPost, setSearchPost] = useState('')
    const [debouncedValue] = useDebounce(searchPost, 700);
    useLayoutEffect(() => {
        filter === null && redirect('posts?filter=wall')
    }, [filter])
    return (
        <section>
            {filter !== null && session.data &&
                <>
                    {searchParams.get('filter') === 'search' ? <div className="mt-[12px] rounded-[20px] p-3 flex bg-bg-content dark:bg-dark-bg-content">
                        <input
                            value={searchPost}
                            onChange={(e) => setSearchPost(e.target.value)}
                            className="bg-white dark:bg-dark-bg-content border border-gray-text mr-[12px] rounded-[20px] px-4" placeholder="поиск" />
                    </div> : <></>}
                    <div>
                        <AddPostForm id={session.data?.user.id} filter={filter} search={SearchType.WALL} />
                        <PostsWall searchQuery={debouncedValue} search={SearchType.WALL} type={PostsType.SEARCH} id={session.data?.user.id} />
                    </div>
                </>}
        </section>
    )
}

export default PostsPage