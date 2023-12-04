'use client'

import Link from 'next/link'
import React from 'react'
import MessageIcon from './MessageIcon'
import { usePathname } from 'next/navigation'

const ChatLink = () => {
    const pathname = usePathname()
    return (
        <Link className='flex  items-center' href={'chat'}>
            <MessageIcon width={26} height={26} fill={pathname === '/chat' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium ${pathname === '/chat' ? 'text-[#37B34A]' : 'text-gray-text'} `}>Сообщения</p>
        </Link>
    )
}

export default ChatLink