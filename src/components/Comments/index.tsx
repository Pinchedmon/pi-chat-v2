import { comment } from "@/utils/types/comment"
import Comment from "../Comment"
interface CommentsProps {
    comments: comment[]
}

const Comments = (props: CommentsProps) => {
    return (
        <section>{
            props.comments.map((comment: comment) => (
                <Comment key={comment.id} comment={comment} />
            ))
        }</section>
    )
}

export default Comments