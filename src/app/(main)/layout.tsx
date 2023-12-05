import NotificationsButton from '@/widgets/main/NotificationsButton'
import SearchBar from '@/widgets/main/Searchbar'
import Sidebar from '@/widgets/Sidebar/Sidebar'
import PostBar from './posts/components/PostBar'

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <main className='w-full h-full flex justify-center bg-light-bg dark:bg-dark-bg  '>
            <div className='flex w-[1440px] '>
                <Sidebar />
                <div className='overflow-auto  w-full pr-[30px]'>
                    <div className='flex mt-[30px] justify-between'>
                        <SearchBar />
                        <NotificationsButton />
                    </div>

                    {children}
                </div>
                <div>
                    <PostBar />
                </div>
            </div>

        </main>
    )
}

export default AuthLayout