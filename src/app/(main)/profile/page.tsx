import React from 'react'
import ProfileIcon from './components/ProfileIcon'
import PostsWall, { PostsType } from '@/widgets/main/PostsWall'
import EditIcon from '@/components/EditButton'

const ProfilePage = () => {
    return (
        <div>
            <div className='w-full mt-[20px] h-[150px] flex flex-col-reverse rounded-[20px]  bg-bg-content dark:bg-dark-bg-content'>
                <p className="p-3 text-[20px] font-bold">Профиль</p>
            </div>
            <div className='flex mt-[20px]'>
                <ProfileIcon />
                <div className='mx-[20px]'>
                    <div className='rounded-[20px] w-[340px] h-[91px]  font-medium  bg-bg-content dark:bg-dark-bg-content'>
                        <p className='w-full p-4'> Немного о себе</p>
                    </div>
                    <div className='rounded-[20px] gap-[10px] flex items-center p-4 mt-[10px] w-[340px] h-[50px] bg-bg-content dark:bg-dark-bg-content'>
                        <p className='font-bold text-[20px]'>
                            Pinchedmon
                        </p>
                        <p className='font-medium text-[12px] text-gray-text'>
                            @pinchedmon
                        </p>
                    </div>
                </div>
                <EditIcon width={26} height={26} fill={'#b5b5b5'} />
            </div>
            <div className='mt-[20px] w-[132px] h-[40px] flex pl-4 font-bold rounded-[20px] items-center  bg-bg-content dark:bg-dark-bg-content'>
                Моя стена
            </div>
            <PostsWall posts={[]} type={PostsType.PROFILE} />
        </div>
    )
}

export default ProfilePage