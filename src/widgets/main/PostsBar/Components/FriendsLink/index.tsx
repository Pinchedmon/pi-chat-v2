'use client'
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import FriendsIcon from "./FriendsIcon";


const FriendsLink = () => {
    const searchParams = useSearchParams();
    return (
        <Link href="/posts?filter=friends" className="w-full duration-100 outline-[1px] hover:outline-[1px] hover:outline hover:rounded-xl outline-gray-text  outline-offset-[5px] flex gap-[14px] align-center items-center text-center ">
            <FriendsIcon width={26} height={26} fill={searchParams.get('filter') === 'friends' ? '#37B34A' : '#B5B5B5'} />
            Друзья
        </Link>
    )
}

export default FriendsLink