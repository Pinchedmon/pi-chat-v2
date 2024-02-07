import LikeIcon from "./LikeIcon";

interface buttonProps {
    width: number;
    height: number;
    fill: string;
}
const LikeButton = ({ props }: { props: buttonProps }) => {
    return (
        <><LikeIcon width={props.width} height={props.height} fill={props.fill} /></>
    )
}

export default LikeButton