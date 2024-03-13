import { fetcher } from "@/lib/fetcher";
import { message } from "@/utils/types/message";
import moment from "moment";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Pusher from "pusher-js"
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

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
                        {moment(props.createdAt).format("HH:mm")}
                    </p>
                </div>

                :
                <div className="flex w-full">
                    <div className="mr-4">
                        <Image src={props.img as string} width={44} height={44} alt={"profile"}
                            className=" rounded-[20px]" />
                    </div>
                    <div>
                        <div className="mb-4 bg-bg-content dark:bg-dark-bg-content rounded-[50px] p-3 ">
                            <p className="text-sm">{props.content}</p>
                        </div>
                        <Image src={props.img as string}
                            alt={''}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-[200px] h-auto p-2s rounded-[20px]" />
                    </div>
                    <p className="ml-auto text-sm text-gray-text">
                        {moment(props.createdAt).format("HH:mm")}
                    </p>
                </div>
            }
        </>

    )
}
const Messages = () => {
    const session = useSession()
    const [page, setPage] = useState(1);
    const userId = session.data?.user.id;
    const getKey = (pageIndex: number) => {
        const baseUrl = `/api/chat/getChat`;
        const queryParams = new URLSearchParams();
        queryParams.append('id', userId as string);
        queryParams.append('page', String(pageIndex + page));
        return `${baseUrl}?${queryParams.toString()}`;
    };
    const [messages, setMessages] = useState([]);
    const { data, error, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
        cluster: 'eu'
    });
    var channel = pusher.subscribe('chat');
    channel.bind('hello', function (data: any) {
        const parsedComments = JSON.parse(data.msgs);
        setMessages((prev) => [...prev, parsedComments] as any)
    });

    if (error) return <div>ошибка загрузки</div>

    if (!data || !userId) {
        return <div>Loading groups...</div>;
    }
    const msgs = data.flatMap(response => response.msgs.messages);
    return (
        <div className="overflow-auto w-full flex flex-col gap-4 p-4">
            {msgs[0] && msgs.map((message: message) => (
                <Message key={message.id} props={message} />
            ))}
            {!msgs[0] && <p className="text-center mt-[22px]">Нет постов</p>}

        </div>
    )
}

export default Messages