import ProfileIcon from "@/components/ProfileIcon"
import EditButton from "@/utils/EditButton"
import { EditOption } from "@/utils/types/editButton"
import PostsWall, { PostsType } from "@/widgets/main/PostsWall"


const EventPage = () => {
    return (
        <div>
            <div className='w-full mt-[10px] h-[150px] flex flex-col-reverse rounded-[20px]  bg-bg-content dark:bg-dark-bg-content'>
                <p className="p-3 text-[20px] font-bold">Событие</p>
            </div>
            <div className='flex mt-[20px]'>
                <ProfileIcon />
                <div className='mx-[20px]'>
                    <div className='rounded-[20px] w-[340px] h-[91px]  font-medium  bg-bg-content dark:bg-dark-bg-content'>
                        <p className='w-full p-4'>Описание события краткое</p>
                    </div>
                    <div className='rounded-[20px] gap-[10px] flex items-center p-4 mt-[10px] w-[340px] h-[50px] bg-bg-content dark:bg-dark-bg-content'>
                        <p className='font-bold text-[20px]'>
                            Название события
                        </p>
                    </div>
                </div>
                <EditButton widthIcon={26} widthButton={42} fill={'#b5b5b5'} option={EditOption.GROUP} />
            </div>
            <div className="mt-[20px] w-full p-4 flex rounded-[20px]  bg-bg-content dark:bg-dark-bg-content">
                Большое описание события
            </div>
            <div className='mt-[20px] w-[150px] h-[40px] flex pl-4 font-bold rounded-[20px] items-center  bg-bg-content dark:bg-dark-bg-content'>
                Стена cобытия
            </div>
            <PostsWall posts={[]} type={PostsType.GROUP} />
        </div>
    )
}

export default EventPage