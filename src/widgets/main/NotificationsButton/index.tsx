'use client'

import { useEffect, useState } from "react";
import NotificationsIcon from "./NotificationsIcon"

const NotificationsButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (isClicked: boolean) => {
        setIsClicked(!isClicked);
    };
    useEffect(() => {
        if (isClicked) {
            setTimeout(() => setIsClicked(false), 3500);
        }
    }, [isClicked])

    return (
        <div className="relative">
            <div
                onClick={() => handleClick(isClicked)}
                className="z-50 cursor-pointer flex border-2 bg-white dark:bg-dark-bg-content items-center justify-center rounded-[20px] border-green w-[42px] h-[42px] hover:border-gray-text">
                <NotificationsIcon width={26} height={26} />
            </div>


            {isClicked &&
                <div className="absolute right-0 pt-4">
                    <div className=" bg-white  dark:bg-dark-bg-content  w-[300px] px-4 py-2 border-gray-text border rounded-[20px]">
                        <p className="text-center whitespace-nowrap text-[14px]">Нет уведомлений</p>
                    </div>
                </div>
            }



        </div>

    )
}

export default NotificationsButton