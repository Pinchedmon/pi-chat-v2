'use client'

import { useTheme } from "next-themes";
import NotificationsIcon from "./NotificationsIcon"

const NotificationsButton = () => {
    const { theme = 'light' } = useTheme();
    return (
        <div className="cursor-pointer flex border-2 bg-white dark:bg-dark-bg-content justify-center rounded-[20px] border-green w-[42px] h-[42px] hover:border-gray-text">
            <NotificationsIcon width={26} height={26} fill={theme !== 'light' ? '#fff' : '#000000'} />
        </div>
    )
}

export default NotificationsButton