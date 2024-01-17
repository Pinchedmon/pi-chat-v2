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
                <div className="absolute left-[10px] bottom-[120px] w-full flex">
                    <div className="bg-white border-2 flex  flex-col rounded-[20px] gap-3 p-4">
                        <EventLink />
                        <FriendsLink />
                        <GroupLink />
                    </div>

                    <div className=" flex flex-col">
                        <LogoutButton />
                        <ThemeChanger />
                    </div>
                </div>
            }

        </>
    )
}

export default MobileMenu
