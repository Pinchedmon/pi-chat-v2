'use client'

import Link from 'next/link'
import React from 'react'
import GroupIcon from './GroupIcon'
import { usePathname } from 'next/navigation'

const GroupLink = () => {
    const pathname = usePathname()
    return (
        <Link className='flex  hover:outline outline-[1px] hover:rounded-xl outline-gray-text  outline-offset-[5px] items-center' href={'groups'}>
            <GroupIcon width={26} height={26} fill={pathname === '/groups' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium  `}>Группы</p>
        </Link>
    )
}

export default GroupLink