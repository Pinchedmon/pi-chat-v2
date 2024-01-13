import ThemeChanger from "@/utils/ThemeChanger"


import Link from "next/link"
import ProfileLink from "@/utils/Links/ProfileLink"
import ChatLink from "@/utils/Links/ChatLink"
import EventLink from "@/utils/Links/EventLink"
import GroupLink from "@/utils/Links/GroupLink"
import LogoutButton from "@/utils/Links/Logout"
import PostsLink from "@/utils/Links/PostsLink"
import FriendsLink from "@/utils/Links/FriendsLink"
import { memo } from "react"


const Sidebar = () => {
    return (
        <div className="hidden  md:flex flex-col   h-full" >
            <div className="w-[188px] mx-[30px] sticky top-[16px] ">
                <div className='flex   flex-col dark:bg-dark-bg-content bg-bg-content rounded-[20px] '>
                    <div className='mt-[14px]  border-black flex justify-center'>
                        <Link href='/posts?filter=wall' className='border-2 px-[23px] py-[4px] text-[#424530] font-bold text-[20px] border-[#37B34A] rounded-[30px] dark:text-white' >
                            / π - Чат /
                        </Link>
                    </div>
                    <div className='flex mx-[22px] flex-col  gap-[32px] mt-[22px]  mb-[24px]'>
                        <ProfileLink />
                        <PostsLink />
                        <ChatLink />
                        <GroupLink />
                        <FriendsLink />
                        <EventLink />
                    </div>
                </div>
                <div className="mt-[16px] flex bottom-0 gap-[28px] justify-center mb-[20px]">
                    <ThemeChanger />
                    <LogoutButton />
                </div>
            </div>


        </div>
    )
}

export default memo(Sidebar)