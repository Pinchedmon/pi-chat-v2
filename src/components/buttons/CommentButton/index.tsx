import CommentIcon from "./CommentIcon"
interface buttonProps {
    width: number;
    height: number;
    fill: string;
}
const CommentButton = ({ props }: { props: buttonProps }) => {
    return (
        <><CommentIcon width={props.width} height={props.height} fill={props.fill} /></>
    )
}

export default CommentButton