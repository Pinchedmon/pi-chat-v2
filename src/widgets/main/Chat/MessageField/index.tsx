import MessageFieldInput from "./MessageFieldInput"
import SendButton from "./SendButton"

const MessageField = () => {
    return (
        <div className="flex ml-[40px] gap-[40px] sticky bottom-0   p-2">
            <MessageFieldInput />
            <SendButton width={24} height={24} />
        </div>
    )
}

export default MessageField