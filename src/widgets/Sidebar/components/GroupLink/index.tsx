'use client'

import Link from 'next/link'
import React from 'react'
import GroupIcon from './GroupIcon'
import { usePathname } from 'next/navigation'

const GroupLink = () => {
    const pathname = usePathname()
    return (
        <Link className='flex  items-center' href={'groups'}>
            <GroupIcon width={26} height={26} fill={pathname === '/groups' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium ${pathname === '/groups' ? 'text-[#37B34A]' : 'text-gray-text'} `}>Группы</p>
        </Link>
    )
}

export default GroupLink