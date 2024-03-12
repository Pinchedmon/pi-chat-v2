'use client'
import ProfileIcon from './components/ProfileIcon'
import EditIcon from '@/components/buttons/EditButton'
import { EditOption } from '@/utils/types/editButton'
import useSWR from 'swr'
import { useRouter, useSearchParams } from 'next/navigation'
import ProfileTag from '@/app/(main)/profile/components/profile/ProfileTag'
import { fetcher } from '@/lib/fetcher'
import { useSession } from 'next-auth/react'
import Modal from '@/components/ui/Modal'
import ProfileForm from '@/components/forms/ProfileForm'
import useModal from '@/hooks/useModal'
import ProfileUsername from '@/app/(main)/profile/components/profile/ProfileUsername'
import AddFriendButton from '@/app/(main)/profile/components/profile/AddFriendButton'
import ProfileBio from '@/app/(main)/profile/components/profile/ProfileBio'
import PostsWall, { PostsType, SearchType } from '@/widgets/main/PostsWall'

const ProfilePage = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const session = useSession();
    const router = useRouter();
    const id = useSearchParams().get('id');
    const { data, mutate, error } = useSWR(`/api/profile/${id}`, fetcher);
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!id) {
        return router.push(`/profile${session.data?.user.id}`)
    }
    if (!data) {
        return <div>Loading...</div>;
    }
    const mutateData = (profileData: any, userData: any) => {
        mutate({ profile: { ...data.profile, profileData }, user: { ...data.user, userData } })
    }
    console.log(data)
    return (
        <div>
            {data.profile &&
                <>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <ProfileForm id={id} mutate={mutateData} data={{ ...data.profile, ...data.user }} onClose={closeModal} />
                    </Modal>
                    <div className='bg-cover bg-center w-full mt-[10px] h-[150px] flex flex-col-reverse rounded-[20px]  bg-bg-content dark:bg-dark-bg-content'
                        style={{ backgroundImage: data.profile?.backImage ? `url(${data.profile.backImage})` : '' }}>
                        <p className="p-3 text-[20px] font-bold">Профиль</p>
                    </div>
                    <div className='flex mt-[10px] md:mt-[20px]'>
                        <ProfileIcon img={data.user?.img} />
                        <div className='flex grow md:grow-0 flex-col md:mx-[20px] justify-between'>
                            <ProfileBio bio={data.profile.bio} />
                            <div className='rounded-[20px] gap-[10px] flex items-center p-2 md:p-4 mt-[10px] md:w-[340px] md:h-[50px] bg-bg-content dark:bg-dark-bg-content'>
                                <ProfileUsername username={data.user.username} />
                                <ProfileTag tag={data.user.tag} />
                            </div>
                        </div>
                        <EditIcon openModal={openModal} widthIcon={26} widthButton={42} fill={'#b5b5b5'} option={session.data?.user.id !== id ? EditOption.PROFILE : EditOption.MYPROFILE} />
                    </div>
                    {
                        session.data?.user.id !== id && <AddFriendButton id={id} userId={session.data?.user.id as string} />
                    }
                    <div className='ml-2 md:ml-0 text-[16px] md:text-[16px] mt-[20px] w-[132px] h-[40px] flex pl-4 font-bold rounded-[20px] items-center  bg-bg-content dark:bg-dark-bg-content'>
                        Моя стена
                    </div>
                    <PostsWall type={PostsType.PROFILE} id={id} search={SearchType.PROFILE} />
                </>}
        </div>

    )
}

export default ProfilePage