import ThemeChanger from "@/utils/ThemeChanger"
import Link from "next/link"
import ProfileLink from "@/components/links/ProfileLink"
import ChatLink from "@/components/links/ChatLink"
import GroupLink from "@/components/links/GroupLink"
import LogoutButton from "@/utils/Logout"
import PostsLink from "@/components/links/PostsLink"
import FriendsLink from "@/components/links/FriendsLink"

const Sidebar = () => {
    return (
        <nav className="hidden  md:flex flex-col h-full" >
            <section className="w-[188px] mx-[30px] sticky top-[16px] ">
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
                        <FriendsLink />
                        <GroupLink />

                    </div>
                </div>
                <div className="mt-[16px] flex bottom-0 gap-[28px] justify-center mb-[20px]">
                    <ThemeChanger />
                    <LogoutButton />
                </div>
            </section>
        </nav>
    )
}

export default Sidebar