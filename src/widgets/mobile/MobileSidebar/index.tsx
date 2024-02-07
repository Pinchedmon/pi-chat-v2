'use client'

import ChatLink from "@/components/links/ChatLink"
import MobileMenuLink from "@/components/links/MoblieMenuLink"
import PostsLink from "@/components/links/PostsLink"
import ProfileLink from "@/components/links/ProfileLink"
import MobileMenu from "../MobileMenu"
import { useEffect, useState } from "react"

const MobileSidebar = () => {
    const [active, setActive] = useState<boolean>(false);
    useEffect(() => {
        active &&
            setTimeout(() => {
                setActive(false);
            }, 6000)
    }, [active])
    return (
        <nav className="relative">
            <MobileMenu active={active} />
            <div className="z-[100] fixed w-screen bg-white dark:bg-dark-bg-content  rounded-t-[20px] justify-between px-[30px] py-2 flex bottom-0 md:hidden">
                <div onClick={() => setActive(!active)}>
                    <MobileMenuLink active={active} />
                </div>
                <PostsLink />
                <ChatLink />
                <ProfileLink />
            </div>
        </nav>
    )
}

export default MobileSidebar