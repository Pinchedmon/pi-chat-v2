'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
const Circles = () => {
    const { theme } = useTheme();
    return (
        <div className='hidden md:inline-block'> <div className='absolute left-[-92px] bottom-[-77px] fill-white dark:fill-[#37B34A]'>
            {theme === 'light' ? <Image
                src="/circleW.svg"
                width={297}
                height={297}
                alt="circle"
            /> : <Image
                src="/circleG.svg"
                width={297}
                height={297}
                alt="circle"
            />}

        </div>
            <div className='absolute right-[-148px] top-[-39px] fill-white dark:stroke-[#37B34A]'>
                {theme === 'light' ? <Image
                    src="/circleW.svg"
                    width={297}
                    height={297}
                    alt="circle"
                /> : <Image
                    src="/circleG.svg"
                    width={297}
                    height={297}
                    alt="circle"
                />}
            </div></div>
    )
}

export default Circles