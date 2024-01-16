'use client'
import Dialogs from "@/widgets/main/Chat/Dialogs"
import SelectedDialog from "./components/SelectedDialog"
import Chat from "./components/Chat"
import { useSearchParams } from "next/navigation"

const ChatPage = () => {
    const id = useSearchParams().get('id');
    return (
        <div className='overflow-auto mt-[10px] w-full h-full flex flex-col md:grid  grid-cols-[235px_auto] gap-[10px] grid-rows-[50px_auto] mb-[20px]'>
            <div className={`${id && 'hidden md:block'} font-bold bg-bg-content dark:bg-dark-bg-content flex items-center p-4 rounded-[20px] text-gray-text`}>
                Диалоги
            </div>
            <SelectedDialog />
            <div className={`${id && 'hidden md:block'} z-0 overflow-auto bg-bg-content p-2 dark:bg-dark-bg-content rounded-[20px]`}>
                <Dialogs />
            </div>
            <Chat />
        </div >
    )
}

export default ChatPage