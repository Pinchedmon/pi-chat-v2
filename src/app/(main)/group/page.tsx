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
import GroupPosts from "./components/GroupPosts"
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from "react"
import axios from "axios"
import FollowButton from "./components/followButton"
import { useAppSelector } from "@/lib/hooks"

const GroupPage = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const id = useSearchParams().get('id');
    const session = useSession();
    const { data, error } = useSWR(`/api/group?id=${id}`, fetcher);
    const [content, setContent] = useState<string>('')
    const { mutate: mutatePosts } = useAppSelector((state) => state.postsWall)
    const handleSend = async () => {
        if (!content || !id) {
            return;
        }
        await axios.post('/api/group/addPost', {
            groupId: id,
            content: content
        }).then(res => {
            if (res.status == 201) {
                mutate(`/api/posts/${id}?filter=group`)
                mutatePosts && mutatePosts()
                setContent('')
            }
        })
    }

    const { mutate } = useSWRConfig();
    const refetch = () => {
        mutate(`/api/group?id=${id}`)
        mutate(`/api/posts/${id}?filter=group`)
        mutatePosts && mutatePosts()
    }

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
            <FollowButton />
            <div className="flex text-[16px] mt-4 md:mt-6 mb-4">
                <p className="ml-2 md:ml-0 font-bold  bg-bg-content dark:bg-dark-bg-content py-2 px-4 rounded-[20px]">
                    Стена группы
                </p>
            </div>

            {group.userId == session.data?.user.id && <div className="mt-[12px] rounded-[20px] flex   gap-2  ">
                <TextareaAutosize value={content}
                    onChange={(e) => setContent(e.target.value)} id="content" placeholder='Написать пост' maxRows={3} className='w-full border-2 border-gray-300 px-4 py-2  rounded-[20px]' style={{ resize: 'none' }}
                />
                <button
                    onClick={() => handleSend()}
                    className="flex self-center text-sm border-[2px] border-[#37B34A] p-2  bg-bg-content dark:bg-dark-bg-content  font-bold rounded-[20px]">
                    Отправить
                </button>
            </div>
            }

            <GroupPosts id={id} />

        </section >
    )
}

export default GroupPage