interface svgProps {
    width: number;
    height: number;
    fill: string;
}
const LogoutIcon = (props: svgProps) => {
    const { width, height, fill } = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 26" fill="none">
            <path d="M5.41667 22.75C4.82083 22.75 4.31076 22.5378 3.88646 22.1135C3.46215 21.6892 3.25 21.1792 3.25 20.5833V5.41667C3.25 4.82083 3.46215 4.31076 3.88646 3.88646C4.31076 3.46215 4.82083 3.25 5.41667 3.25H13V5.41667H5.41667V20.5833H13V22.75H5.41667ZM17.3333 18.4167L15.8438 16.8458L18.6062 14.0833H9.75V11.9167H18.6062L15.8438 9.15417L17.3333 7.58333L22.75 13L17.3333 18.4167Z" fill={fill} />
        </svg>
    )
}

export default LogoutIcon