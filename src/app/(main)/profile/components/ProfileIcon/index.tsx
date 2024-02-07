import Image from "next/image"

const ProfileIcon = (props: { img: string }) => {
    return (
        <div className="mr-2 md:w-[150px] md:h-[150px] flex justify-center  items-start md:items-center md:bg-white rounded-[20px] md:dark:bg-dark-bg-content">
            <Image
                src={props.img ? props.img : 'https://i.pinimg.com/564x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg'}
                alt={""}
                width={120}
                height={120}
                style={{ borderRadius: '20px' }} />
        </div>
    )
}

export default ProfileIcon