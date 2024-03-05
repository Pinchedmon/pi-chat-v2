import EditButton from "@/components/buttons/EditButton";
import { EditOption } from "@/utils/types/editButton";
import { group } from "@/utils/types/group";
import Image from "next/image";
import Link from "next/link";

const Group = ({ group, userId }: { group: group, userId: number | string; }) => {
    return (
        <article className="mb-4  flex  w-full rounded-[20px] p-2 md:p-4 bg-bg-content dark:bg-dark-bg-content ">
            <Link href={`group?id=${group.id}`} className="grow flex cursor-pointer">
                <div className="mr-4 ">
                    <Image src={group.img ? group.img : ''} alt={"avatar"} width={50} height={50} style={{ borderRadius: '10px' }} />
                </div>
                <div className="flex grow flex-col justify-center">
                    <p className="font-bold text-[14px] md:text-[16px]">
                        {group.name}
                    </p>
                    <p className="mt-[2px] text-gray-text text-[12px] md:text-[14px]">
                        {group.description}
                    </p>
                </div>
            </Link>
            <div className="flex items-center">
                <EditButton widthIcon={26} widthButton={42} fill={"#b5b5b5"} option={EditOption.GROUP} />
            </div>
        </article>)
}

export default Group