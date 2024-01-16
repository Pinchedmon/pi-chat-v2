import Chatarea from "@/utils/Chatarea"
import Messages from "@/widgets/main/Chat/Messages"
import { useSearchParams } from "next/navigation";

const Chat = () => {
    const id = useSearchParams().get('id');

    return (
        <div className={`${!id && 'hidden md:block'} pt-[90px] pb-8 relative overflow-auto md:mb-0 p-4 md:border-4 border-bg-content dark:border-dark-bg-content rounded-[20px]`}>
            {id ? <> <Messages />
                <div className="fixed md:sticky bottom-[70px] md:bottom-0 w-full p-2">
                    <Chatarea />
                </div></> : <></>}

        </div>
    )
}

export default Chat