import { message } from "@/utils/types/message";
import moment from "moment";
import Image from "next/image";

const id = '1';

const Message = ({ props }: { props: message }) => {

    return (
        <>
            {props.id
                ?
                <div className="flex flex-row-reverse ">
                    <p className="mb-4 bg-bg-content dark:bg-dark-bg-content rounded-[50px] p-3 text-sm">
                        {props.content}
                    </p>

                    <p className="mr-auto text-sm text-gray-text">
                        {moment(props.date).format("HH:mm")}
                    </p>
                </div>

                :
                <div className="flex w-full">
                    <div className="mr-4">
                        <Image src={props.imageUrl as string} width={44} height={44} alt={"profile"}
                            className=" rounded-[20px]" />
                    </div>
                    <div>
                        <div className="mb-4 bg-bg-content dark:bg-dark-bg-content rounded-[50px] p-3 ">
                            <p className="text-sm">{props.content}</p>
                        </div>
                        <Image src={props.imageUrl as string}
                            alt={''}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-[200px] h-auto p-2s rounded-[20px]" />
                    </div>
                    <p className="ml-auto text-sm text-gray-text">
                        {moment(props.date).format("HH:mm")}
                    </p>
                </div>
            }
        </>

    )
}
const Messages = () => {
    return (
        <div className="overflow-auto w-full flex flex-col gap-4">
            <Message props={{
                id: 0,
                content: "Тексты текста текст321321312312",
                date: '2014-04-23T09:54:51',
                avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg'
            }} />
            <Message props={{
                id: 1,
                content: "Тексты текста текст",
                date: '2014-04-23T09:54:51',
                avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg'
            }} />
            <Message props={{
                id: 0,
                content: "Тексты текста текст321321312312",
                date: '2014-04-23T09:54:51',
                avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg'
            }} />
            <Message props={{
                id: 1,
                content: "Тексты текста текст",
                date: '2014-04-23T09:54:51',
                avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg'
            }} />
            <Message props={{
                id: 0,
                content: "Тексты текста текст321321312312",
                date: '2014-04-23T09:54:51',
                avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg'
            }} />
            <Message props={{
                id: 1,
                content: "Тексты текста текст",
                date: '2014-04-23T09:54:51',
                avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg'
            }} />
        </div>
    )
}

export default Messages