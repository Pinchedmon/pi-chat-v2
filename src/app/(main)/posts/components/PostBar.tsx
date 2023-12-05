'use client'

import { usePathname } from "next/navigation"

const PostBar = () => {
    const pathname = usePathname()
    return (
        <>
            {pathname === '/posts' ?
                <div className='w-[188px] flex mr-[30px] mt-[16px] flex-col dark:bg-dark-bg-content bg-bg-content rounded-[20px] '>

                    <div className='flex  flex-col  gap-[32px] mt-[22px]  mb-[24px]   first-letter:justify-center'>
                        <div className="text-center ">
                            Стена
                        </div>
                        <div className="text-center ">
                            Поиск
                        </div>
                        <div className="text-center ">
                            Друзья
                        </div>
                    </div>
                </div>
                : <></>}

        </>

    )
}

export default PostBar