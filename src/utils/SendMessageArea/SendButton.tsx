
interface svgProps {
    width: number;
    height: number;
    onClick: () => void;

}
const SendButton = (props: svgProps) => {
    const { width, height, onClick } = props;
    return (
        <button onClick={onClick} className=" flex justify-center items-center cursor-pointer  border-2 bg-white dark:bg-dark-bg-content  rounded-[20px] border-green min-w-[42px] min-h-[42px] hover:border-gray-text">
            <svg className=" fill-black  dark:fill-white" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
                <path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" />
            </svg>
        </button>

    )
}

export default SendButton