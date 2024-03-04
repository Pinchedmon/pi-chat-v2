import EditButton from "@/components/buttons/EditButton";
import { EditOption } from "@/utils/types/editButton";
import Image from "next/image";
import Link from "next/link";

interface GroupProps {
    id: number;
    title: string;
    avatar: string;
    descr: string;
}
const Follow = ({ props }: { props: GroupProps }) => {
    return (
        <div className="mb-4  flex  w-full rounded-[50px] px-4 pt-4 pb-4 bg-bg-content dark:bg-dark-bg-content ">
            <Link className="grow flex cursor-pointer" href={"profile"}>
                <div className="mr-4 flex items-center">
                    <Image src={props.avatar} alt={"avatar"} width={50} height={50} style={{ borderRadius: '50px' }} />
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
            <button className="flex items-center md:mr-4 ">
                <p className=" border px-2 md:px-4  py-2 rounded-[20px] border-green text-[12px] md:text-[14px]">Написать </p>
            </button>
            <div className="flex items-center  ">
                <EditButton widthIcon={26} widthButton={42} fill={"#b5b5b5"} option={EditOption.FRIEND} />
            </div>
        </div>)
}

export default Follow