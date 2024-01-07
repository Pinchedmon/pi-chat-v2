import ThemeChanger from "@/utils/ThemeChanger"
import ChatLink from "./components/ChatLink"
import EventLink from "./components/EventLink"
import FriendsLink from "./components/FriendsLink"
import GroupLink from "./components/GroupLink"
import PostsLink from "./components/PostsLink"
import ProfileLink from "./components/ProfileLink"
import LogoutButton from "./components/Logout"
import { memo } from "react"
import Link from "next/link"

const Sidebar = () => {
    return (
        <div className="flex flex-col   h-full" >
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