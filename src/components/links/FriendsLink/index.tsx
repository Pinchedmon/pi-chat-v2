'use client'

import Link from 'next/link'

import FriendsIcon from './FriendsIcon'
import { usePathname } from 'next/navigation'

const FriendsLink = () => {
    const pathname = usePathname()
    return (
        <Link className='duration-100 flex hover:outline hover:outline-[1px] outline-[1px] hover:rounded-xl outline-gray-text  outline-offset-[5px] items-center' href={'friends'}>
            <FriendsIcon width={26} height={26} fill={pathname === '/friends' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium `}>Друзья</p>
        </Link>
    )
}

export default FriendsLink