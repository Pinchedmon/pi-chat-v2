import EditButton from "@/components/EditButton"
import Dialogs from "@/widgets/main/Chat/Dialogs"
import MessageField from "@/widgets/main/Chat/MessageField"
import Messages from "@/widgets/main/Chat/Messages"
import Image from "next/image"



const ChatPage = () => {
    return (
        <div className='overflow-auto mt-[20px] w-full h-full grid grid-cols-[235px_auto] gap-[10px] grid-rows-[50px_auto] mb-[20px]'>
            <div className='font-bold bg-bg-content dark:bg-dark-bg-content flex items-center p-4 rounded-[20px] text-gray-text'>
                Диалоги
            </div>
            <div className='pl-4 flex items-center bg-bg-content dark:bg-dark-bg-content rounded-[20px]'>
                <Image
                    src={"/assets/profileIcon.png"}
                    alt={""}
                    width={32}
                    height={32}
                    style={{ borderRadius: '20px' }} />
                <div className="flex w-full items-end">
                    <p className="ml-[12px] text-[16px] font-bold">Pinchedmon</p>
                    <p className="ml-[14px] text-[12px] text-gray-text mb-[2px] font-medium">был в сети столько времени назад
                    </p>
                </div>
                <div className="p-6 first-letter:w-full flex flex-row-reverse">
                    <EditButton widthIcon={26} widthButton={38} fill={"#b5b5b5"} />
                </div>

            </div>
            <div className=' overflow-auto bg-bg-content p-2 dark:bg-dark-bg-content rounded-[20px]'>
                <Dialogs />
            </div>
            <div className='relative overflow-auto p-4 border-4 border-bg-content dark:border-dark-bg-content rounded-[20px]'>
                <Messages />
                <MessageField />
            </div>

        </div>
    )
}

export default ChatPage