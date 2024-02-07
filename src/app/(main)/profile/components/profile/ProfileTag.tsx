
const ProfileTag = (props: { tag: string }) => {
    return (
        <p className='font-medium text-[10px] md:text-[12px] text-gray-text'>
            {props.tag}
        </p>
    )
}

export default ProfileTag