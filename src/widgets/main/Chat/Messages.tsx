import { setMutate } from "@/lib/features/chat/SelectedDialog";
import { fetcher } from "@/lib/fetcher";
import { useAppDispatch } from "@/lib/hooks";
import { message } from "@/utils/types/message";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Pusher from "pusher-js"
import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import Message from "./Message";

const Messages = () => {
    const session = useSession()
    const [page, setPage] = useState(1);
    const userId = session.data?.user.id;
    const chatId = useSearchParams().get('id');
    const getKey = () => {
        const baseUrl = `/api/chat/getChat`;
        const queryParams = new URLSearchParams();
        queryParams.append('id', chatId as string);
        queryParams.append('page', String(page));
        return `${baseUrl}?${queryParams.toString()}`;
    };
    const router = useRouter();
    const [messages, setMessages] = useState<any>([]);

    const { data, error, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    console.log(data)
    const dispatch = useAppDispatch()
    dispatch(setMutate(mutate))

    useEffect(() => {
        if (data !== undefined && data.length > 0) {
            setMessages((prevMessages: any) => {
                return [
                    ...data.flatMap((response) =>
                        response.msgs?.length !== 0 && response.msgs[0]?.messages.length !== 0
                            ? response.msgs[0].messages
                            : []
                    ),
                    ...prevMessages,
                ];
            });
        }
    }, [data]);

    useEffect(() => {
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
            cluster: 'eu',
        });
        const channel = pusher.subscribe('chat');
        channel.bind('new_message', function (data: any) {
            setMessages((msgs: any) => [...msgs, data.message])
        });

        return () => {
            channel.unbind('new_message');
            channel.unsubscribe();
            pusher.disconnect();
        };
    }, []);

    if (error) return <div>ошибка загрузки</div>

    if (!messages || !userId) {
        return <div>Loading groups...</div>;
    }




    return (
        <div className="overflow-auto w-full flex flex-col gap-4 p-4">
            {messages > 0 && data && messages.length > 10 && data.flatMap((response) => {
                if (response.msgs?.length > 0 && response.msgs[0]?.messages?.length > 0) {
                    return response.msgs[0].messages;
                } else {
                    return [];
                }
            }).length > 0 &&
                <button
                    className="border border-green rounded-xl p-2"
                    onClick={() => {
                        setPage(page + 1);
                        setSize(page)
                        mutate()
                    }}>Ещё</button>
            }

            {messages[0] && messages.map((message: message) => (
                <Message key={message.id} props={message} />
            ))}
            {!messages[0] && <p className="text-center mt-[22px]">Нет сообщений</p>}

        </div>
    )
}

export default Messages