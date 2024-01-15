
import ChatLink from "@/utils/Links/ChatLink"
import MobileMenuLink from "@/utils/Links/MoblieMenuLink"
import PostsLink from "@/utils/Links/PostsLink"
import ProfileLink from "@/utils/Links/ProfileLink"

const MobileSidebar = () => {
    return (
        <div className="fixed w-screen bg-white dark:bg-dark-bg-content  rounded-t-[20px] justify-between px-[30px] py-2 flex bottom-0 md:hidden">
            <MobileMenuLink />
            <PostsLink />
            <ChatLink />
            <ProfileLink />
        </div>
    )
}

export default MobileSidebar