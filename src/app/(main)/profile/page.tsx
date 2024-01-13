
import ProfileIcon from '../../../components/ProfileIcon'
import PostsWall, { PostsType } from '@/widgets/main/PostsWall'
import EditIcon from '@/utils/EditButton'
import { EditOption } from '@/utils/types/editButton'

const ProfilePage = () => {
    return (
        <div>
            <div className='w-full mt-[10px] h-[150px] flex flex-col-reverse rounded-[20px]  bg-bg-content dark:bg-dark-bg-content'>
                <p className="p-3 text-[20px] font-bold">Профиль</p>
            </div>
            <div className='flex mt-[10px] md:mt-[20px]'>
                <ProfileIcon />
                <div className='flex grow md:grow-0 flex-col md:mx-[20px] justify-between'>
                    <div className='rounded-[20px] md:w-[340px] h-[76px] md:h-[91px]  font-medium  bg-bg-content dark:bg-dark-bg-content'>
                        <p className='w-full text-[12px] md:text-[16px] p-4'> Немного о себе</p>
                    </div>
                    <div className='rounded-[20px] gap-[10px] flex items-center p-2 md:p-4 mt-[10px] md:w-[340px] md:h-[50px] bg-bg-content dark:bg-dark-bg-content'>
                        <p className='font-bold text-[14px] md:text-[20px]'>
                            Pinchedmon
                        </p>
                        <p className='font-medium text-[10px] md:text-[12px] text-gray-text'>
                            @pinchedmon
                        </p>
                    </div>
                </div>

                <EditIcon widthIcon={26} widthButton={42} fill={'#b5b5b5'} option={EditOption.PROFILE} />

            </div>

            <button className='ml-2 md:ml-0 flex mt-[10px] rounded-[20px] px-4  py-2 font-medium items-center bg-bg-content dark:bg-dark-bg-content'>
                <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.125 13.75V10.75H15.125V9.25006H18.125V6.25006H19.625V9.25006H22.625V10.75H19.625V13.75H18.125ZM8.99998 11.6923C8.03749 11.6923 7.21354 11.3496 6.52813 10.6642C5.84271 9.97879 5.5 9.15484 5.5 8.19236C5.5 7.22986 5.84271 6.40591 6.52813 5.72051C7.21354 5.03509 8.03749 4.69238 8.99998 4.69238C9.96246 4.69238 10.7864 5.03509 11.4718 5.72051C12.1572 6.40591 12.5 7.22986 12.5 8.19236C12.5 9.15484 12.1572 9.97879 11.4718 10.6642C10.7864 11.3496 9.96246 11.6923 8.99998 11.6923ZM1.50002 19.3077V17.0846C1.50002 16.5949 1.63302 16.1414 1.89902 15.7241C2.16506 15.3068 2.52051 14.986 2.96538 14.7616C3.95384 14.277 4.95096 13.9135 5.95673 13.6712C6.96249 13.4289 7.97691 13.3078 8.99998 13.3078C10.023 13.3078 11.0375 13.4289 12.0432 13.6712C13.049 13.9135 14.0461 14.277 15.0346 14.7616C15.4794 14.986 15.8349 15.3068 16.1009 15.7241C16.3669 16.1414 16.5 16.5949 16.5 17.0846V19.3077H1.50002ZM2.99998 17.8077H15V17.0846C15 16.8821 14.9413 16.6946 14.824 16.5221C14.7067 16.3497 14.5474 16.209 14.3461 16.1C13.4846 15.6757 12.6061 15.3542 11.7107 15.1356C10.8152 14.917 9.91168 14.8077 8.99998 14.8077C8.08828 14.8077 7.18471 14.917 6.28928 15.1356C5.39384 15.3542 4.51536 15.6757 3.65383 16.1C3.45254 16.209 3.29325 16.3497 3.17595 16.5221C3.05863 16.6946 2.99998 16.8821 2.99998 17.0846V17.8077ZM8.99998 10.1924C9.54998 10.1924 10.0208 9.99653 10.4125 9.60486C10.8041 9.21319 11 8.74236 11 8.19236C11 7.64236 10.8041 7.17153 10.4125 6.77986C10.0208 6.38819 9.54998 6.19236 8.99998 6.19236C8.44998 6.19236 7.97914 6.38819 7.58748 6.77986C7.19581 7.17153 6.99998 7.64236 6.99998 8.19236C6.99998 8.74236 7.19581 9.21319 7.58748 9.60486C7.97914 9.99653 8.44998 10.1924 8.99998 10.1924Z" />
                </svg>
                <p className='text-[12px] md:text-[16px] ml-2'>Добавить в друзья</p>
            </button>

            <div className='ml-2 md:ml-0 text-[16px] md:text-[16px] mt-[20px] w-[132px] h-[40px] flex pl-4 font-bold rounded-[20px] items-center  bg-bg-content dark:bg-dark-bg-content'>
                Моя стена
            </div>
            <PostsWall posts={[]} type={PostsType.PROFILE} />
        </div>
    )
}

export default ProfilePage