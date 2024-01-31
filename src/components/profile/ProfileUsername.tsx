const ProfileUsername = (props: { username: string }) => {
    return (
        <p className='font-bold text-[14px] md:text-[20px]'>
            {props.username}
        </p>
    )
}

export default ProfileUsername