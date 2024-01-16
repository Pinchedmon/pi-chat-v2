import EditButton from "@/utils/EditButton"
import { EditOption } from "@/utils/types/editButton"
import Image from "next/image"
import { useSearchParams } from "next/navigation"


const SelectedDialog = () => {
    const id = useSearchParams().get('id');
    return (

        <div className={`${!id && 'hidden md:block'} fixed md:block z-10 pl-4 flex items-center bg-bg-content dark:bg-dark-bg-content rounded-[20px] `}>
            {id ?
                <>
                    <Image
                        src={"/assets/profileIcon.png"}
                        alt={""}
                        width={32}
                        height={32}
                        style={{ borderRadius: '20px' }} />
                    <div className="flex w-full items-end">
                        <p className="ml-[12px] text-[16px] font-bold">Pinchedmon</p>
                        <p className="ml-[14px] text-[10px] md:text-[12px] text-gray-text mb-[2px] font-medium">
                            был в сети столько времени назад
                        </p>
                    </div>
                    <div className="p-6 flex flex-row-reverse">
                        <EditButton widthIcon={26} widthButton={38} fill={"#b5b5b5"} option={EditOption.DIALOG} />
                    </div>
                </>
                :
                <></>
            }


        </div>
    )
}

export default SelectedDialog