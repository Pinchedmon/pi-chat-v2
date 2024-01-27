
import LogoutIcon from './LogoutIcon'
import Link from 'next/link'

const LogoutButton = () => {
    return (
        <Link href='/signin' className={'z-100 border-2 md:border-0 rounded-[20px] px-[27px] py-[17px] hover:outline-[2px] bg-white dark:bg-dark-bg-content dark:hover:outline hover:outline hover:outline-red-400'}>
            <LogoutIcon width={26} height={26} fill={'#B2B2B2'} />
        </Link>
    )
}

export default LogoutButton