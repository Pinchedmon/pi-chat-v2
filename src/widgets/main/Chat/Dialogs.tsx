import { dialog } from "@/utils/types/dialog";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const Dialog = (props: { props: dialog }) => {
    return (
        <Link className="flex hover:outline  hover:outline-[1px] p-2 w-full outline-gray-text outline-[1px] rounded-[20px]" href={`chat?id=${props.props.userId}`}        >
            <div className="flex items-center mr-2">
                <Image src={props.props.imageUrl as string} alt={"avatar"} width={40} height={40} style={{ borderRadius: '50px' }} />
            </div>
            <div>
                <p className="text-[16px] font-bold"  >
                    {props.props.author}
                </p>
                <p className="text-[14px] text-gray-text" >
                    {props.props.content.substring(0, 13)}{props.props.content.length > 20 ? '...' : ''}
                </p>
            </div>
            <div className="flex ml-auto ">
                <p className="text-[14px] text-gray-text" >
                    {moment(props.props.date).format("HH:mm")}
                </p>
            </div>
        </Link>
    )
}
const Dialogs = () => {
    return (
        <div className="flex flex-col gap-[6px] ">
            <Dialog props={{
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
            }} />

        </div>
    )
}

export default Dialogs