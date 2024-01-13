import PostsWall, { PostsType } from '@/widgets/main/PostsWall'
import SearchPostsBar from './components/SearchPostsBar'
import FilterCheck from './components/FilterCheck'

const PostsPage = () => {
    return (
        <div>
            <FilterCheck />
            <SearchPostsBar />
            <PostsWall type={PostsType.SEARCH} />
        </div>
    )
}

export default PostsPage