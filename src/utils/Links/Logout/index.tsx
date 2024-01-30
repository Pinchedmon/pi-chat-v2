'use client'
import { signOut } from 'next-auth/react'
import LogoutIcon from './LogoutIcon'
import { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const LogoutButton = () => {
    const router = useRouter()
    // useEffect(() => {
    //     axios.get('/api').then(res => (!res.data.authenticated && router.push('/signin')))
    // }, [])

    return (
        <button
            onClick={() => {
                signOut({ redirect: true, callbackUrl: '/signin' })
            }}
            className={'z-100 border-2 md:border-0 rounded-[20px] px-[27px] py-[17px] hover:outline-[2px] bg-white dark:bg-dark-bg-content dark:hover:outline hover:outline hover:outline-red-400'}>
            <LogoutIcon width={26} height={26} fill={'#B2B2B2'} />
        </button>
    )
}

export default LogoutButton