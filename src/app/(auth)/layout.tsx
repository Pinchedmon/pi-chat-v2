import ThemeChanger from '@/utils/ThemeChanger'
import Circles from './components/circles'


const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <div className='overflow-hidden h-screen relative bg-[#37B34A] dark:bg-[#1F1E1F]'>
            <div className='absolute left-[40px] top-[40px]' >
                <ThemeChanger />
            </div>
            <div>
                <Circles />
            </div>
            <div className='flex flex-col lg:flex-row justify-center h-full items-center gap-[5%] md:gap-[12%] '>
                <div className='flex flex-col'>
                    <p className='text-6xl lg:text-8xl xl:text-9xl font-semibold text-white text-center dark:text-[#37B34A]'>/ π /</p>
                    <p className='text-3xl lg:text-5xl xl:text-6xl font-medium text-white dark:text-[#37B34A]'>твоё будущее</p>
                </div>
                {children}
            </div>

        </div >
    )
}

export default AuthLayout