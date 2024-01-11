
import ChatLink from "@/utils/Links/ChatLink"
import PostsLink from "@/utils/Links/PostsLink"
import ProfileLink from "@/utils/Links/ProfileLink"

const MobileSidebar = () => {
    return (
        <div className="fixed w-screen bg-white  rounded-t-[20px] justify-between px-[30px] py-4 flex bottom-0 md:hidden">
            <div className="flex flex-col ">
                Меню
            </div>


            <PostsLink />


            <ChatLink />




            <ProfileLink />

        </div>
    )
}

export default MobileSidebar