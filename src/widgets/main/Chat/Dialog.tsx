import Link from "next/link";
import { dialog } from "@/utils/types/dialog";
import Image from "next/image";
import { memo } from "react";

const Dialog = ({ dialog }: { dialog: dialog }) => {
    return (
        <Link
            className="flex hover:outline  hover:outline-[1px] p-2 w-full outline-gray-text outline-[1px] rounded-[20px]" href={`chat?id=${dialog.id}`}>
            <div className="flex items-center mr-2">
                <Image src={dialog.participants.avatar ? dialog.participants.avatar : ''} alt={"avatar"} width={40} height={40} style={{ borderRadius: '50px' }} />
            </div>
            <div className="items-center flex ">
                <p className="text-[16px] font-bold"  >
                    {dialog.participants.username}
                </p>
            </div>
            <div className="flex ml-auto ">
            </div>
        </Link>
    )
}
export default memo(Dialog);