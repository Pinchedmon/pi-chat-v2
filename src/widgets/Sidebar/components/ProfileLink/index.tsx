'use client'

import React from 'react'
import ProfileIcon from './ProfileIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ProfileLink = () => {
    const pathname = usePathname()
    return (
        <Link className='outline-[1px] duration-100 flex hover:outline-[1px] hover:outline hover:rounded-xl outline-gray-text  outline-offset-[5px]' href={'profile'}>
            <ProfileIcon width={26} height={26} fill={pathname === '/profile' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium`}>Профиль</p>
        </Link>
    )
}

export default ProfileLink