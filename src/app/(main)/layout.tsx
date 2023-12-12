import NotificationsButton from '@/widgets/main/NotificationsButton'
import PostBar from '@/widgets/main/PostBar'
import SearchBar from '@/widgets/main/Searchbar'
import Sidebar from '@/widgets/Sidebar/Sidebar'


const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <main className='w-full h-full flex justify-center bg-light-bg dark:bg-dark-bg  '>
            <div className='flex w-[1440px] pr-[30px] '>
                <Sidebar />
                <div className=' flex overflow-auto  w-full '>
                    <div className='w-full flex flex-col'>
                        <div className='flex mt-[30px] justify-between'>
                            <SearchBar />
                            <NotificationsButton />
                        </div>

                        {children}
                    </div>
                    <div className='relative'>
                        <PostBar />
                    </div>
                </div>

            </div>

        </main>
    )
}

export default AuthLayout