import PostsWall, { PostsType } from '@/widgets/main/PostsWall'
import SearchPostsBar from './components/SearchPostsBar'

const PostsPage = () => {
    return (
        <div>
            <SearchPostsBar />
            <PostsWall type={PostsType.SEARCH} />
        </div>
    )
}

export default PostsPage