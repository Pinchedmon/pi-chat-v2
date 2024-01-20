import Link from "next/link"
import Image from "next/image"

interface GroupProps {
    id: number;
    title: string;
    avatar: string;
    descr: string;
}

const Notification = ({ props }: { props: GroupProps }) => {
    return (
        <div>
            <Link className="grow flex cursor-pointer" href={"profile"}>
                <div className="mr-4 flex items-center">
                    <Image src={props.avatar} alt={"avatar"} width={40} height={40} style={{ borderRadius: '50px' }} />
                </div>
                <div className="flex grow flex-col">
                    <p className="font-bold text-[14px] md:text-[16px]">
                        {props.title}
                    </p>
                    {props.descr && <p className="mt-[2px] text-gray-text text-[12px] md:text-[14px]">
                        {props.descr}
                    </p>}

                </div>
            </Link>
        </div>
    )
}

export default Notification