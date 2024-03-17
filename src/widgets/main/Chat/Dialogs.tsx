import { dialogData } from "@/utils/types/dialog";
import useSWRInfinite from "swr/infinite";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { fetcher } from "@/lib/fetcher";
import { useAppDispatch } from "@/lib/hooks";
import { setMutateDialogs } from "@/lib/features/chat/SelectedDialog";
import Dialog from "./Dialog";
import Pusher from "pusher-js";

const Dialogs = () => {
    const [page, setPage] = useState(1);
    const session = useSession()
    const dispatch = useAppDispatch()
    const userId = session.data?.user.id;
    const getKey = (pageIndex: number) => {
        const baseUrl = `/api/chat`;
        const queryParams = new URLSearchParams();
        queryParams.append('id', userId as string);
        queryParams.append('page', String(pageIndex + page));
        return `${baseUrl}?${queryParams.toString()}`;
    };
    const { data, error, mutate, size, setSize } = useSWRInfinite((pageIndex: number) => getKey(pageIndex), fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    dispatch(setMutateDialogs(mutate))

    useEffect(() => {
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
            cluster: 'eu',
        });
        const channel = pusher.subscribe('chat');
        channel.bind('refetch', function (data: any) {
            mutate()
        });

        return () => {
            channel.unbind('refetch');
            channel.unsubscribe();
            pusher.disconnect();
        };
    }, []);

    if (error) {
        return <div>Error loading posts!</div>;
    }

    if (!data || !session.data) {
        return <div>Loading posts...</div>;
    }
    console.log(data)
    const chats = data.flatMap(response => response.chats.chats);

    return (
        <div className="flex flex-col gap-[6px] ">
            {chats[0] && chats.map((dialog: dialogData) => (
                <Dialog key={dialog.id} dialog={{
                    id: dialog.id,
                    name: dialog.name,
                    img: dialog.img,
                    participants: dialog.participants[0]
                }} />
            ))}
            {!chats[0] && <p className="text-center mt-[22px]">Нет чатов</p>}
        </div>
    )
}

export default Dialogs