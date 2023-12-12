import Link from "next/link"
import HashIcon from "./HashIcon"
import { useSearchParams } from "next/navigation"


const HashLink = () => {
    const searchParams = useSearchParams();
    return (
        <Link href="/posts?filter=wall" className="flex gap-[14px] ml-[30px] items-center text-center ">
            <HashIcon width={26} height={26} fill={searchParams.get('filter') === 'wall' ? '#37B34A' : '#B5B5B5'} />
            Стена
        </Link>
    )
}

export default HashLink