import React from 'react'
import LogoutIcon from './LogoutIcon'
import Link from 'next/link'

const LogoutButton = () => {
    return (
        <Link href='/login' className={'rounded-[20px] px-[27px] py-[17px] outline-[1px] bg-white dark:bg-dark-bg-content dark:hover:outline hover:outline hover:outline-red-400'}>
            <LogoutIcon width={26} height={26} fill={'#B2B2B2'} />
        </Link>
    )
}

export default LogoutButton