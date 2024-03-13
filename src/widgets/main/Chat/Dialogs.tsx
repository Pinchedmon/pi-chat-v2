import { dialog, dialogData } from "@/utils/types/dialog";
import Image from "next/image";
import Link from "next/link";
import useSWRInfinite from "swr/infinite";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { fetcher } from "@/lib/fetcher";
import { useAppDispatch } from "@/lib/hooks";
import { setDialog } from '@/lib/features/chat/SelectedDialog';


const Dialog = ({ dialog }: { dialog: dialog }) => {
    const dispatch = useAppDispatch()
    return (
        <Link
            onClick={() => dispatch(setDialog({ username: dialog.participants.username, avatar: dialog.participants.avatar }))}
            className="flex hover:outline  hover:outline-[1px] p-2 w-full outline-gray-text outline-[1px] rounded-[20px]" href={`chat?id=${2}`}>
            <div className="flex items-center mr-2">
                <Image src={dialog.participants.avatar} alt={"avatar"} width={40} height={40} style={{ borderRadius: '50px' }} />
            </div>
            <div className="items-center flex ">
                <p className="text-[16px] font-bold"  >
                    {dialog.participants.username}
                </p>
            </div>
            <div className="flex ml-auto ">
                {/* <p className="text-[14px] text-gray-text" >
                    {moment(props.props.date).format("HH:mm")}
                </p> */}
            </div>
        </Link>
    )
}
const Dialogs = () => {
    const [page, setPage] = useState(1);
    const session = useSession()
    const userId = session.data?.user.id;
    const getKey = (pageIndex: number) => {
        const baseUrl = `/api/chat`;
        const queryParams = new URLSearchParams();
        // if (filter) {
        //     queryParams.append('filter', filter);
        // } else {
        //     queryParams.append('filter', search);
        // }
        queryParams.append('id', userId as string);
        queryParams.append('page', String(pageIndex + page));
        return `${baseUrl}?${queryParams.toString()}`;
    };
    const { data, error, mutate, size, setSize } = useSWRInfinite((pageIndex: number) => getKey(pageIndex), fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    if (error) {
        return <div>Error loading posts!</div>;
    }

    if (!data || !session.data) {
        return <div>Loading posts...</div>;
    }
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
            {!chats[0] && <p className="text-center mt-[22px]">Нет постов</p>}


            {/* <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Textуцйуцйуйцуцйуйцуйцуцйуйуйцуйцуйцу",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} />
            <Dialog props={{
                userId: 0,
                content: "Text",
                author: "Pinchedmon",
                imageUrl: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg',
                date: `2014-04-23T09:54:51`
            }} /> */}

        </div>
    )
}

export default Dialogs