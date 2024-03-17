import { message } from "@/utils/types/message";
import moment from "moment";
import { useSession } from "next-auth/react"
import Image from 'next/image'
import { memo } from "react";

const Message = ({ props }: { props: message }) => {
    const session = useSession()

    return (
        <>
            {props.id
                ?
                <div className={`${props.senderId == session.data?.user.id ? ' flex-row-reverse ' : ''} flex  `}>
                    <p className="mb-4 bg-bg-content dark:bg-dark-bg-content rounded-[50px] p-3 text-sm">
                        {props.content}
                    </p>
                    <p className={`${props.senderId == session.data?.user.id ? ' mr-auto' : 'ml-auto'} text-sm text-gray-text`}>
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
export default memo(Message);