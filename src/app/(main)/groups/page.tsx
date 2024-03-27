'use client'
import useModal from "@/hooks/useModal";
import Modal from "@/components/ui/Modal";
import AddGroupForm from "@/components/forms/AddGroupForm";
import { useSession } from "next-auth/react";
import GroupWall from "./components/GroupWall";
import { SetStateAction, useState } from "react";
import clsx from "clsx";
import { useDebounce } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useAppDispatch } from "@/lib/hooks";
import { groupsWallSlice } from "@/lib/features/groups/GroupsWallSlice";
import { useSWRConfig } from "swr";

const GroupsPage = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const session = useSession();
    const [allStatus, setAllStatus] = useState<boolean>(true)
    const [inputValue, setInputValue] = useState("");
    const dispatch = useAppDispatch()

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    }

    const { mutate } = useSWRConfig()

    const mutateAll = () => {
        session.data && mutate(`/api/groups${!allStatus ? '?userId=' + session.data?.user.id : ''}${debouncedValue ? '?search=' + debouncedValue : ''}`);
    }
    dispatch(groupsWallSlice.actions.setSecMutate(mutateAll))
    const [debouncedValue] = useDebounce(inputValue, 500);
    if (!session.data) {
        return <div>Loading</div>
    }


    return (
        <section className='mt-[12px]  ml-2 md:ml-0 h-full '>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AddGroupForm id={session.data.user.id} onClose={closeModal} search={debouncedValue} allStatus={allStatus} />
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
            <input className=" mb-3 p-[6px] md:w-1/3 bg-white  dark:bg-dark-bg-content border border-gray-text  rounded-[20px] px-4" placeholder="Поиск"
                value={inputValue} onChange={handleInputChange}
            />
            <GroupWall search={debouncedValue} allStatus={allStatus} id={session.data.user.id} />
        </section >
    )
}

export default GroupsPage