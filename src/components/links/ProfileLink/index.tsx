'use client'

import { useSession } from 'next-auth/react'
import ProfileIcon from './ProfileIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ProfileLink = () => {
    const pathname = usePathname()
    const session = useSession();
    return (
        <>

            <Link className='flex-col md:flex-row items-center  outline-[1px] duration-100 flex hover:outline-[1px] md:hover:outline hover:rounded-xl outline-gray-text  outline-offset-[5px]' href={`/profile?id=${session.data?.user.id}`}>
                <ProfileIcon width={26} height={26} fill={pathname == '/profile' ? '#37B34A' : '#B5B5B5'} />
                <p className={`md:ml-[12px] font-medium`}>Профиль</p>
            </Link>
        </>
    )
}

export default ProfileLink