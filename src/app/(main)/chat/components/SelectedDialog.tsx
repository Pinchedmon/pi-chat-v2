import EditButton from "@/components/buttons/EditButton"
import SelectedDialogForm from "@/components/forms/SelectedDialogForm"
import Modal from "@/components/ui/Modal"
import useModal from "@/hooks/useModal"
import { fetcher } from "@/lib/fetcher"
import { EditOption } from "@/utils/types/editButton"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import useSWR from "swr"

const SelectedDialog = () => {
    const id = useSearchParams().get('id');
    const { isModalOpen, openModal, closeModal } = useModal();
    const session = useSession();
    const { data, error } = useSWR(`/api/chat/findChat?id=${id}&userId=${session.data?.user.id}`, fetcher)
    const router = useRouter()
    if (error) {
        router.push('/chat')
        return <div>

        </div>
    }
    console.log(data)

    if (!data) {
        return <div>Loading...</div>;
    }
    if (data.message == 'No chat') {
        router.push('/chat')
    }

    const selectedDialog = data.chat.participants[0]
    return (
        <section className={`${!id && 'hidden md:block'} w-full fixed md:static z-10 pl-4 flex items-center bg-bg-content dark:bg-dark-bg-content rounded-[20px] `}>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <SelectedDialogForm id={id as string} onClose={closeModal} />
            </Modal>
            {id ?
                <>
                    <Image
                        src={selectedDialog.avatar ? selectedDialog.avatar : ''}
                        alt={""}
                        width={32}
                        height={32}
                        style={{ borderRadius: '20px' }} />
                    <div className="flex w-full items-end">
                        <p className="ml-[12px] text-[16px] font-bold">{selectedDialog.username}</p>
                        <p className="ml-[14px] text-[10px] md:text-[12px] text-gray-text mb-[2px] font-medium">
                            был в сети столько времени назад
                        </p>
                    </div>
                    <div className="p-3 flex flex-row-reverse">
                        <EditButton widthIcon={26} widthButton={38} fill={"#b5b5b5"} option={EditOption.DIALOG} openModal={openModal} />
                    </div>
                </>
                :
                <div></div>
            }


        </section>
    )
}

export default SelectedDialog