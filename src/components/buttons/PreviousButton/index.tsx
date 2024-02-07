import Link from "next/link"
interface Props {
    href: string
}
const PreviousButton = (props: Props) => {
    return (
        <div className="ml-[7px] md:ml-0 mb-[10px]">
            <Link href={props.href}>
                <button className="bg-white dark:bg-dark-bg-content border-2 border-green p-2 rounded-[20px] ">
                    <svg className={"fill-black dark:fill-white  "} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.37302 12.75L13.0692 18.4461L12 19.5L4.5 12L12 4.5L13.0692 5.55383L7.37302 11.25H19.5V12.75H7.37302Z" />
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default PreviousButton