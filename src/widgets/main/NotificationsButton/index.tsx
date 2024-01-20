'use client'

import { useEffect, useState } from "react";
import NotificationsIcon from "./NotificationsIcon"
import Notification from "./Notification";

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
                className="mr-[7px] md:mr-0 z-50 cursor-pointer flex border-2 bg-white dark:bg-dark-bg-content items-center justify-center rounded-[20px] border-green w-[42px] h-[42px] hover:border-gray-text">
                <NotificationsIcon width={26} height={26} />
            </div>
            {isClicked &&
                <div className="absolute right-0 pt-4">
                    <div className="flex flex-col gap-3 bg-white  dark:bg-dark-bg-content overflow-auto  max-h-[300px] w-[300px] px-4 py-2 border-gray-text border rounded-[20px]">
                        {/* <p className="text-center whitespace-nowrap text-[14px]">Нет уведомлений</p> */}
                        <Notification props={{ id: 0, title: 'Pinchedmon', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'подписался на вас' }} />
                        <Notification props={{ id: 0, title: 'Pinchedmon', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'подписался на вас' }} />
                        <Notification props={{ id: 0, title: 'Pinchedmon', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'подписался на вас' }} />
                        <Notification props={{ id: 0, title: 'Pinchedmon', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'подписался на вас' }} />
                        <Notification props={{ id: 0, title: 'Pinchedmon', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'подписался на вас' }} />
                    </div>

                </div>
            }
        </div>

    )
}

export default NotificationsButton