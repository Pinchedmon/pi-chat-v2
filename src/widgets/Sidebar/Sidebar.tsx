import ThemeChanger from "@/components/ThemeChanger"
import ChatLink from "./components/ChatLink"
import EventLink from "./components/EventLink"
import FriendsLink from "./components/FriendsLink"
import GroupLink from "./components/GroupLink"
import PostsLink from "./components/PostsLink"
import ProfileLink from "./components/ProfileLink"
import LogoutButton from "./components/Logout"
import { memo } from "react"

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between h-full" >
            <div className='w-[188px] flex mx-[30px] mt-[16px] flex-col dark:bg-dark-bg-content bg-bg-content rounded-[20px] '>
                <div className='mt-[14px]  border-black flex justify-center'>
                    <p className='border-2 px-[23px] py-[4px] text-[#424530] font-bold text-[20px] border-[#37B34A] rounded-[30px] dark:text-white' >
                        / π - Чат /
                    </p>
                </div>
                <div className='flex ml-[22px] flex-col  gap-[32px] mt-[22px]  mb-[24px]   first-letter:justify-center'>
                    <ProfileLink />
                    <PostsLink />
                    <ChatLink />
                    <GroupLink />
                    <FriendsLink />
                    <EventLink />
                </div>
            </div>
            <div className="flex gap-[28px] justify-center mb-[20px]">
                <ThemeChanger />
                <LogoutButton />
            </div>
        </div>
    )
}

export default memo(Sidebar)