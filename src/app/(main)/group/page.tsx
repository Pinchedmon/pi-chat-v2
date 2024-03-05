'use client'
import ProfileIcon from "../profile/components/ProfileIcon"
import EditButton from "@/components/buttons/EditButton"
import { EditOption } from "@/utils/types/editButton"
import useSWR, { useSWRConfig } from "swr"
import { fetcher } from "@/lib/fetcher"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"
import useModal from "@/hooks/useModal"
import Modal from "@/components/ui/Modal"
import EditGroupForm from "@/components/forms/EditGroupForm"

const GroupPage = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const id = useSearchParams().get('id');
    const { data, error } = useSWR(`/api/group?id=${id}`, fetcher);
    const { mutate } = useSWRConfig();
    const refetch = () => {
        mutate(`/api/group?id=${id}`)
    }
    const session = useSession();
    if (error) {
        return <div>Error loading posts!</div>;
    }
    if (!data || !id) {
        return <div>Loading groups...</div>;
    }
    const { group } = data
    return (
        <section>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <EditGroupForm mutate={refetch} data={{ ...group }} onClose={closeModal} />
            </Modal>
            <div className='w-full mt-[10px] h-[150px] flex flex-col-reverse rounded-[20px]  bg-bg-content dark:bg-dark-bg-content'>
                <p className="p-3 text-[20px] font-bold">Группа</p>
            </div>
            <div className='flex mt-[20px]'>
                <ProfileIcon img={group.img} />

                <div className='flex grow md:grow-0 flex-col md:mx-[20px] justify-between'>
                    <div className='rounded-[20px] md:w-[340px] h-[76px] md:h-[91px]  font-medium  bg-bg-content dark:bg-dark-bg-content'>
                        <p className='w-full text-[12px] md:text-[16px] p-4'>{group.description}</p>
                    </div>
                    <div className='rounded-[20px] gap-[10px] flex items-center p-2 ь md:p-4 mt-[10px] md:w-[340px] md:h-[50px] bg-bg-content dark:bg-dark-bg-content'>
                        <p className='font-bold text-[14px] md:text-[20px] ml-2 md:ml-0'>
                            {group.name}
                        </p>

                    </div>
                </div>
                {group.userId == session.data?.user.id && <EditButton openModal={openModal} widthIcon={26} widthButton={42} fill={'#b5b5b5'} option={EditOption.MYGROUP} />}
            </div>
            <button className='flex mt-[10px] rounded-[20px] px-4 py-2 font-medium  bg-bg-content dark:bg-dark-bg-content'>
                <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.5966 11.6423C13.0223 11.1795 13.337 10.6481 13.5408 10.0481C13.7447 9.44811 13.8466 8.82953 13.8466 8.19236C13.8466 7.55519 13.7447 6.93661 13.5408 6.33661C13.337 5.73661 13.0223 5.2052 12.5966 4.74238C13.4748 4.84367 14.204 5.22283 14.7841 5.87988C15.3642 6.53692 15.6543 7.30774 15.6543 8.19236C15.6543 9.07696 15.3642 9.84778 14.7841 10.5048C14.204 11.1619 13.4748 11.541 12.5966 11.6423ZM17.8466 19.3077V16.9616C17.8466 16.4164 17.7357 15.8978 17.5139 15.4056C17.2921 14.9134 16.9774 14.4911 16.5697 14.1385C17.3363 14.3936 18.0421 14.7379 18.687 15.1712C19.3318 15.6045 19.6543 16.2013 19.6543 16.9616V19.3077H17.8466ZM19.6543 12.75V10.75H17.6543V9.25006H19.6543V7.25006H21.1542V9.25006H23.1542V10.75H21.1542V12.75H19.6543ZM8.34663 11.6923C7.38415 11.6923 6.5602 11.3496 5.87478 10.6642C5.18938 9.97879 4.84668 9.15484 4.84668 8.19236C4.84668 7.22986 5.18938 6.40591 5.87478 5.72051C6.5602 5.03509 7.38415 4.69238 8.34663 4.69238C9.30913 4.69238 10.1331 5.03509 10.8185 5.72051C11.5039 6.40591 11.8466 7.22986 11.8466 8.19236C11.8466 9.15484 11.5039 9.97879 10.8185 10.6642C10.1331 11.3496 9.30913 11.6923 8.34663 11.6923ZM0.84668 19.3077V17.0846C0.84668 16.5949 0.979688 16.1414 1.2457 15.7241C1.51174 15.3068 1.86719 14.986 2.31205 14.7616C3.3005 14.277 4.29761 13.9135 5.30338 13.6712C6.30915 13.4289 7.32356 13.3078 8.34663 13.3078C9.3697 13.3078 10.3841 13.4289 11.3899 13.6712C12.3956 13.9135 13.3928 14.277 14.3812 14.7616C14.8261 14.986 15.1815 15.3068 15.4476 15.7241C15.7136 16.1414 15.8466 16.5949 15.8466 17.0846V19.3077H0.84668ZM8.34663 10.1924C8.89663 10.1924 9.36746 9.99653 9.75913 9.60486C10.1508 9.21319 10.3466 8.74236 10.3466 8.19236C10.3466 7.64236 10.1508 7.17153 9.75913 6.77986C9.36746 6.38819 8.89663 6.19236 8.34663 6.19236C7.79663 6.19236 7.3258 6.38819 6.93413 6.77986C6.54246 7.17153 6.34663 7.64236 6.34663 8.19236C6.34663 8.74236 6.54246 9.21319 6.93413 9.60486C7.3258 9.99653 7.79663 10.1924 8.34663 10.1924ZM2.34663 17.8077H14.3466V17.0846C14.3466 16.8821 14.288 16.6946 14.1707 16.5221C14.0534 16.3497 13.8941 16.209 13.6928 16.1C12.8312 15.6757 11.9528 15.3542 11.0573 15.1356C10.1619 14.917 9.25835 14.8077 8.34663 14.8077C7.43493 14.8077 6.53136 14.917 5.63593 15.1356C4.74051 15.3542 3.86203 15.6757 3.00048 16.1C2.7992 16.209 2.6399 16.3497 2.5226 16.5221C2.40529 16.6946 2.34663 16.8821 2.34663 17.0846V17.8077Z" />

                </svg>
                <p className='ml-2 text-[14px] md:text-[16px]'>Подписаться</p>
            </button>
            <div className="flex text-[16px] mt-4 md:mt-6 mb-4">
                <p className="ml-2 md:ml-0 font-bold  bg-bg-content dark:bg-dark-bg-content py-2 px-4 rounded-[20px]">
                    Стена группы
                </p>
            </div>
            {/* <PostsWall posts={[]} type={PostsType.GROUP} /> */}
        </section >
    )
}

export default GroupPage