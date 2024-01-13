'use client';

import Image from "next/image"

const ProfileIcon = () => {

    return (
        <div className="mr-2 md:w-[150px] md:h-[150px] flex justify-center  items-start md:items-center md:bg-white rounded-[20px] md:dark:bg-dark-bg-content">
            <Image
                src={"/assets/profileIcon.png"}
                alt={""}
                width={120}
                height={120}
                style={{ borderRadius: '20px' }} />
        </div>
    )
}

export default ProfileIcon