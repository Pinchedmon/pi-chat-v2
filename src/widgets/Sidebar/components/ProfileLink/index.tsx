'use client'

import React from 'react'
import ProfileIcon from './ProfileIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ProfileLink = () => {
    const pathname = usePathname()
    return (
        <Link className=' flex' href={'profile'}>
            <ProfileIcon width={26} height={26} fill={pathname === '/profile' ? '#37B34A' : '#B5B5B5'} />
            <p className={`ml-[12px] font-medium  ${pathname === '/profile' ? 'text-[#37B34A]' : 'text-gray-text'}`}>Профиль</p>
        </Link>
    )
}

export default ProfileLink