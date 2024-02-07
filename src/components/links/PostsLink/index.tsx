'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import HashIcon from './HashIcon'

const PostsLink = () => {
    const pathname = usePathname()
    return (
        <Link className='flex-col md:flex-row duration-100 flex outline-[1px] hover:outline-[1px] md:hover:outline hover:rounded-xl outline-gray-text  outline-offset-[5px] items-center' href={'posts?filter=wall'}>
            <HashIcon width={26} height={26} fill={pathname === '/posts' ? '#37B34A' : '#B5B5B5'} />
            <p className={`md:ml-[12px] font-medium `}>Лента</p>
        </Link>
    )
}

export default PostsLink