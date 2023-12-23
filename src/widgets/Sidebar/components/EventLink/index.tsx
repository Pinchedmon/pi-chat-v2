'use client'

import Link from 'next/link'
import React from 'react'
import EventIcon from './EventIcon'
import { usePathname } from 'next/navigation'

const EventLink = () => {
    const pathname = usePathname()
    return (
        <Link className='flex hover:outline outline-[1px] hover:rounded-xl outline-gray-text  outline-offset-[5px] items-center' href={'events'}>
            <EventIcon width={26} height={26} fill={pathname === '/events' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium `}>Мероприятия</p>
        </Link>
    )
}

export default EventLink