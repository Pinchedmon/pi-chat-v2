'use client'
import Dialogs from "@/widgets/main/Chat/Dialogs"
import SelectedDialog from "./components/SelectedDialog"
import Chat from "./components/Chat"
import { useSearchParams } from "next/navigation"
import PreviousButton from "@/components/buttons/PreviousButton"

const ChatPage = () => {
    const id = useSearchParams().get('id');
    return (
        <section className='overflow-auto mt-[10px] w-full h-full  md:grid  md:grid-cols-[235px_auto] gap-[10px] grid-rows-[50px_auto] mb-[20px]'>
            <div className={`${id && 'hidden md:inline'} mb-2 md:mb-0 font-bold bg-bg-content dark:bg-dark-bg-content flex items-center p-4 rounded-[20px] text-gray-text`}>
                <p> Диалоги </p>
            </div>
            <div>
                {id && <SelectedDialog />}
            </div>
            <div className={`${id && 'hidden md:block'} md:static z-0 overflow-auto bg-bg-content p-2 dark:bg-dark-bg-content rounded-[20px]`}>
                <Dialogs />
            </div>
            <Chat />
        </section >
    )
}

export default ChatPage