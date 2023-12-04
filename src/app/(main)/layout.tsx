import NotificationsButton from '@/widgets/main/NotificationsButton'
import SearchBar from '@/widgets/main/Searchbar/icon'
import Sidebar from '@/widgets/Sidebar/Sidebar'

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <main className='h-full flex justify-center bg-light-bg dark:bg-dark-bg  '>
            <div className='flex w-[1440px] '>
                <Sidebar />
                <div className='mt-[30px] w-full pr-[30px]'>
                    <div className='flex justify-between'>
                        <SearchBar />
                        <NotificationsButton />
                    </div>

                    {children}
                </div>
                <div>
                    {/* <Addition/> */}
                </div>
            </div>

        </main>
    )
}

export default AuthLayout