import Link from "next/link"

const MobileHeader = () => {
    return (
        <Link href="posts?filter=wall" className="ml-[7px] flex  md:hidden rounded-[20px] font-bold border-2 px-4 items-center bg-white dark:bg-dark-bg-content border-green text-[20px] dark:text-white text-black">/ π  /</Link>
    )
}

export default MobileHeader
