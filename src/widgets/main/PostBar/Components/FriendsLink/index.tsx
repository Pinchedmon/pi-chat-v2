
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import FriendsIcon from "./FriendsIcon";


const FriendsLink = () => {
    const searchParams = useSearchParams();
    return (
        <Link href="/posts?filter=friends" className="flex gap-[14px] ml-[30px] align-center items-center text-center ">
            <FriendsIcon width={26} height={26} fill={searchParams.get('filter') === 'friends' ? '#37B34A' : '#B5B5B5'} />
            Друзья
        </Link>
    )
}

export default FriendsLink