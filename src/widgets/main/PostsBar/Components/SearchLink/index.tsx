import Link from "next/link"

import { useSearchParams } from "next/navigation"
import SearchIcon from "./SearchIcon";


const SearchLink = () => {
    const searchParams = useSearchParams();
    return (
        <Link href="/posts?filter=search" className="flex gap-[14px] ml-[30px]  items-center text-center ">
            <SearchIcon width={26} height={26} fill={searchParams.get('filter') === 'search' ? '#37B34A' : '#B5B5B5'} />
            Поиск
        </Link>
    )
}

export default SearchLink