
const ProfileBio = (props: { bio: string }) => {
    return (
        <div className='rounded-[20px] md:w-[340px] h-[76px] md:h-[91px]  font-medium  bg-bg-content dark:bg-dark-bg-content'>
            <p className='w-full text-[12px] md:text-[16px] p-4'>{props.bio}</p>
        </div>

    )
}

export default ProfileBio