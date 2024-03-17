import RequireAuth from '@/lib/RequireAuth'
import NotificationsButton from '@/widgets/main/NotificationsButton'
import PostsBar from '@/widgets/main/PostsBar'
import SearchBar from '@/widgets/main/Searchbar'
import MobileHeader from '@/widgets/mobile/MobileHeader'
import MobileSidebar from '@/widgets/mobile/MobileSidebar'
import Sidebar from '@/widgets/Sidebar/Sidebar'


const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <main className='w-screen h-full flex  justify-center overflow-y-auto bg-light-bg dark:bg-dark-bg  '>
            <div className='flex-col  h-full   md:flex-row  flex w-[1440px]'>
                <div className='sticky  top-0'>
                    <Sidebar />
                </div>
                <div className='flex  overflow-y-auto  md:pr-[30px] pb-[70px] md:pb-[0px] w-full'>
                    <div className='w-full  flex flex-col'>
                        <div className='flex z-[80] sticky mt-[7px] top-[7px] md:top-[30px] md:mt-[30px] justify-between'>

                            {/* //TODO: not in cursovaya  */}
                            {/* <SearchBar /> */}
                            <MobileHeader />
                            {/* <NotificationsButton /> */}
                        </div>
                        <RequireAuth>
                            {children}
                        </RequireAuth>
                    </div>
                    <PostsBar />
                </div>
                <MobileSidebar />
            </div>
        </main>
    )
}

export default AuthLayout