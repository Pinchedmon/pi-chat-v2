import Link from "next/link"

import { useSearchParams } from "next/navigation"
import SearchIcon from "./SearchIcon";


const SearchLink = () => {
    const searchParams = useSearchParams();
    return (
        <Link href="/posts?filter=search" className="duration-100 outline-[1px] hover:outline-[1px] hover:outline hover:rounded-xl outline-gray-text  outline-offset-[5px] flex gap-[14px] mx-[30px]  items-center text-center ">
            <SearchIcon width={26} height={26} fill={searchParams.get('filter') === 'search' ? '#37B34A' : '#B5B5B5'} />
            Поиск
        </Link>
    )
}

export default SearchLink