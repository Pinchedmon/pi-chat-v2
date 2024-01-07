import ThemeChanger from '@/utils/ThemeChanger'
import Circles from './(auth)/components/circles'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className=' overflow-hidden h-full relative bg-[#37B34A] dark:bg-[#1F1E1F]'>
            <div className='absolute left-[40px] top-[40px]'>
                <ThemeChanger />
            </div>
            <Circles />
            <div className='flex flex-col lg:flex-row justify-center h-full items-center gap-[5%] md:gap-[12%] '>
                <div className='flex flex-col'>
                    <p className='text-6xl lg:text-8xl xl:text-9xl font-semibold text-white text-center dark:text-[#37B34A]'>/ π /</p>
                    <p className='text-3xl lg:text-5xl xl:text-6xl font-medium text-white dark:text-[#37B34A]'>твоё будущее</p>
                </div>
                <div className="flex flex-col items-center border-[3px] rounded-3xl px-4 py-4 border-[#424530] bg-white dark:bg-[#2C2C2C] dark:border-[#5b5b5b]">
                    <div className="flex justify-center">
                        <p className="border-[3px] py-2.5 px-6 text-xl font-bold rounded-xl text-center border-red-500 dark:text-white">
                            Не найдена
                        </p>
                    </div>
                    <p className="mt-4 text-center text-lg">Страницы по данному  url-адресу  нет</p>
                    <Link className='mt-4 font-semibold hover:border-gray-text border-green border-2 rounded-[20px] px-4 py-2' href='login'>
                        Войти на главную
                    </Link>
                </div>
            </div>

        </div>
    )
}