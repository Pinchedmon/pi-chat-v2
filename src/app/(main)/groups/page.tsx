'use client'
import useModal from "@/hooks/useModal";
import Modal from "@/components/ui/Modal";
import AddGroupForm from "@/components/forms/AddGroupForm";
import { useSession } from "next-auth/react";
import GroupWall from "./components/GroupWall";
import { useState } from "react";
import clsx from "clsx";


const GroupsPage = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const session = useSession();
    const [allStatus, setAllStatus] = useState<boolean>(true)

    if (!session.data) {
        return <div>Loading</div>
    }

    return (
        <section className='mt-[12px] ml-2 md:ml-0 h-full '>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AddGroupForm id={session.data?.user.id} onClose={closeModal} />
            </Modal>
            <div className='flex gap-2 mb-3'>
                <button onClick={() => setAllStatus(true)} className={clsx(allStatus && 'border font-bold', 'whitespace-nowrap text-[12px] md:text-[14px]  border-gray-text dark:border-white  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]')}>
                    Все группы
                </button>
                <button onClick={() => setAllStatus(false)} className={clsx(!allStatus && 'border font-bold', 'text-[12px] md:text-[14px] bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]')}>
                    Мои
                </button>
                <button onClick={openModal} className=' whitespace-nowrap mr-[20%] ml-auto  border-green border  text-[12px] md:text-[14px]  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]'>
                    Cоздать сообщество
                </button>
            </div>

            <input className=" mb-3 p-[6px] md:w-1/3 bg-white  dark:bg-dark-bg-content border border-gray-text  rounded-[20px] px-4" placeholder="Поиск" />
            <GroupWall id={session.data.user.id} />

        </section >
    )
}

export default GroupsPage