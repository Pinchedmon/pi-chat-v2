
const ProfileTag = (props: { tag: string }) => {

    if (!props.tag) {
        return <>loading</>
    }
    return (

        <p className='font-medium text-[10px] md:text-[12px] text-gray-text'>
            {props.tag}
        </p>
    )
}

export default ProfileTag