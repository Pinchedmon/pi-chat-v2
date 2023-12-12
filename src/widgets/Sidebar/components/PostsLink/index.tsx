'use client'

import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'
import HashIcon from './HashIcon'

const PostsLink = () => {
    const pathname = usePathname()
    return (
        <Link className='flex items-center' href={'posts?filter=wall'}>
            <HashIcon width={26} height={26} fill={pathname === '/posts' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium `}>Лента</p>
        </Link>
    )
}

export default PostsLink