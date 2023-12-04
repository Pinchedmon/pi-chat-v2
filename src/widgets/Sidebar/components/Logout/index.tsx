import React from 'react'
import LogoutIcon from './LogoutIcon'

const LogoutButton = () => {
    return (
        <button className={'rounded-[20px] px-[27px] py-[17px] bg-white dark:bg-dark-bg-content dark:hover:outline hover:outline'}>
            <LogoutIcon width={26} height={26} fill={'#B2B2B2'} />
        </button>
    )
}

export default LogoutButton