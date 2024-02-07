'use client'

import Link from 'next/link'

import MessageIcon from './MessageIcon'
import { usePathname } from 'next/navigation'

const ChatLink = () => {
    const pathname = usePathname()
    return (
        <Link className='flex-col md:flex-row duration-100 flex md:hover:outline hover:outline-[1px] outline-[1px] hover:rounded-xl outline-gray-text  outline-offset-[5px] items-center' href={'chat'}>
            <MessageIcon width={26} height={26} fill={pathname === '/chat' ? '#37B34A' : '#B5B5B5'} />
            <p className={`md:ml-[12px] font-medium`}>Сообщения</p>
        </Link>
    )
}

export default ChatLink