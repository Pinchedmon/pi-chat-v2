import EditButton from "@/components/buttons/EditButton"
import PreviousButton from "@/components/buttons/PreviousButton"
import { useAppSelector } from "@/lib/hooks"
import { EditOption } from "@/utils/types/editButton"
import Image from "next/image"
import { useSearchParams } from "next/navigation"


const SelectedDialog = () => {
    const id = useSearchParams().get('id');
    const { username, avatar } = useAppSelector(state => state.selectedDialog)
    return (
        <section className={`${!id && 'hidden md:block'} w-full fixed md:static z-10 pl-4 flex items-center bg-bg-content dark:bg-dark-bg-content rounded-[20px] `}>
            {id ?
                <>
                    <Image
                        src={avatar}
                        alt={""}
                        width={32}
                        height={32}
                        style={{ borderRadius: '20px' }} />
                    <div className="flex w-full items-end">
                        <p className="ml-[12px] text-[16px] font-bold">{username}</p>
                        <p className="ml-[14px] text-[10px] md:text-[12px] text-gray-text mb-[2px] font-medium">
                            был в сети столько времени назад
                        </p>
                    </div>
                    <div className="p-3 flex flex-row-reverse">
                        <EditButton widthIcon={26} widthButton={38} fill={"#b5b5b5"} option={EditOption.DIALOG} />
                    </div>
                </>
                :
                <div></div>
            }


        </section>
    )
}

export default SelectedDialog