'use client'

import { usePathname } from "next/navigation"
import HashLink from "./Components/HashLink"
import FriendsLink from "./Components/FriendsLink"
import SearchLink from "./Components/SearchLink"

const PostBar = () => {
    const pathname = usePathname()


    return (
        <>
            {pathname === '/posts' ?
                <div className='sticky ml-[30px] top-[16px]  w-[188px] flex  mt-[16px] flex-col dark:bg-dark-bg-content bg-bg-content rounded-[20px] '>
                    <div className='flex  flex-col  gap-[32px] mt-[22px]  mb-[24px]   first-letter:justify-center'>
                        <HashLink />
                        <SearchLink />
                        <FriendsLink />
                    </div>
                </div>
                : <></>}

        </>

    )
}

export default PostBar