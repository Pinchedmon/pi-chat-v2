import { comment } from "@/utils/types/comment"
import Comment from "../Comment"
interface CommentsProps {
    comments: comment[]
}

const Comments = (props: CommentsProps) => {
    return (
        <div>{
            props.comments.map((comment: comment) => (
                <Comment key={comment.id} comment={comment} />
            ))
        }</div>
    )
}

export default Comments