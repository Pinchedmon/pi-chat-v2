'use client'

import Link from 'next/link'

import EventIcon from './EventIcon'
import { usePathname } from 'next/navigation'

const EventLink = () => {
    const pathname = usePathname()
    return (
        <Link className='duration-100 flex hover:outline hover:outline-[1px] outline-[1px] hover:rounded-xl outline-gray-text  outline-offset-[5px] items-center' href={'events'}>
            <EventIcon width={26} height={26} fill={pathname === '/events' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium `}>Мероприятия</p>
        </Link>
    )
}

export default EventLink