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
const Group = ({ props }: { props: GroupProps }) => {
    return (
        <article className="mb-4  flex  w-full rounded-[20px] p-2 md:p-4 bg-bg-content dark:bg-dark-bg-content ">
            <Link href={`group?id=${props.id}`} className="grow flex cursor-pointer">
                <div className="mr-4 ">
                    <Image src={props.avatar} alt={"avatar"} width={50} height={50} style={{ borderRadius: '10px' }} />
                </div>
                <div className="flex grow flex-col justify-center">
                    <p className="font-bold text-[14px] md:text-[16px]">
                        {props.title}
                    </p>
                    <p className="mt-[2px] text-gray-text text-[12px] md:text-[14px]">
                        {props.descr}
                    </p>
                </div>
            </Link>
            <div className="flex items-center">
                <EditButton widthIcon={26} widthButton={42} fill={"#b5b5b5"} option={EditOption.GROUP} />
            </div>
        </article>)
}

export default Group