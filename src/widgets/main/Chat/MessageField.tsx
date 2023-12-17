

const MessageField = () => {
    return (
        <div className="flex ml-[40px] gap-[40px] sticky bottom-0   p-2">
            <input className='border text-[14px] text-gray-text w-2/3 p-2 rounded-[20px] pl-4 mr-[12px] ' placeholder='Найти в Pi-Chat' />
            <button className="border border-gray-text dark:border-white p-2 rounded-[20px]" >
                <svg className="fill-green" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                    <path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" />
                </svg>
            </button>
        </div>
    )
}

export default MessageField