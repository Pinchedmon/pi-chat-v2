'use client'

import Link from 'next/link'
import React from 'react'
import FriendsIcon from './FriendsIcon'
import { usePathname } from 'next/navigation'

const FriendsLink = () => {
    const pathname = usePathname()
    return (
        <Link className='flex  items-center' href={'friends'}>
            <FriendsIcon width={26} height={26} fill={pathname === '/friends' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium `}>Друзья</p>
        </Link>
    )
}

export default FriendsLink