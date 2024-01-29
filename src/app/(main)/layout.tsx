import NotificationsButton from '@/widgets/main/NotificationsButton'
import PostsBar from '@/widgets/main/PostsBar'
import SearchBar from '@/widgets/main/Searchbar'
import MobileHeader from '@/widgets/mobile/MobileHeader'
import MobileSidebar from '@/widgets/mobile/MobileSidebar'
import Sidebar from '@/widgets/Sidebar/Sidebar'
import { getSession, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'


const AuthLayout = async ({
    children,
}: {
    children: React.ReactNode
}) => {


    return (

        <main className='w-screen h-screen flex justify-center overflow-y-auto bg-light-bg dark:bg-dark-bg  '>
            <div className='flex-col  md:flex-row relative flex  w-[1440px]'>
                <Sidebar />
                <div className='flex  md:pr-[30px] pb-[70px] md:pb-[0px] w-full'>
                    <div className='w-full  flex flex-col'>
                        <div className='flex z-50 sticky mt-[7px] top-[7px] md:top-[30px] md:mt-[30px] justify-between'>
                            <SearchBar />
                            <MobileHeader />
                            <NotificationsButton />
                        </div>
                        {children}
                    </div>
                    <PostsBar />
                </div>
                <MobileSidebar />
            </div>
        </main>
    )
}

export default AuthLayout