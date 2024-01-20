'use client';

import EventLink from "@/utils/Links/EventLink";
import FriendsLink from "@/utils/Links/FriendsLink";
import GroupLink from "@/utils/Links/GroupLink";
import LogoutButton from "@/utils/Links/Logout";
import ThemeChanger from "@/utils/ThemeChanger";

interface Props {
    active: boolean;
}
const MobileMenu = (props: Props) => {
    const { active } = props;
    return (
        <>
            {active &&
                <div className="fixed z-[100] justify-between px-[40px] bottom-[120px] w-full flex">
                    <nav className="bg-white dark:bg-dark-bg-content border-2 flex  flex-col rounded-[20px] gap-[30px] p-4">
                        <EventLink />
                        <FriendsLink />
                        <GroupLink />
                    </nav>

                    <div className="flex justify-between flex-col">
                        <ThemeChanger />
                        <LogoutButton />

                    </div>
                </div>
            }

        </>
    )
}

export default MobileMenu
