import Link from "next/link"
import HashIcon from "./HashIcon"
import { useSearchParams } from "next/navigation"


const HashLink = () => {
    const searchParams = useSearchParams();
    return (
        <Link href="/posts?filter=wall" className="duration-100 outline-[1px] hover:outline-[1px] hover:outline hover:rounded-xl outline-gray-text  outline-offset-[5px] flex gap-[14px] mx-[30px] items-center text-center ">
            <HashIcon width={26} height={26} fill={searchParams.get('filter') === 'wall' ? '#37B34A' : '#B5B5B5'} />
            Стена
        </Link>
    )
}

export default HashLink