import Image from "next/image"

const ProfileIcon = () => {
    return (
        <div className="w-[150px] h-[150px] flex justify-center items-center bg-white rounded-[20px] dark:bg-dark-bg-content">
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