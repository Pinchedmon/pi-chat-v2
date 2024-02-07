import ProfileIcon from "@/app/(main)/profile/components/ProfileIcon"
import EditButton from "@/components/buttons/EditButton"
import { EditOption } from "@/utils/types/editButton"
import PostsWall, { PostsType } from "@/widgets/main/PostsWall"


const EventPage = () => {
    return (
        <section>
            <div className='w-full mt-[10px] h-[150px] flex flex-col-reverse rounded-[20px]  bg-bg-content dark:bg-dark-bg-content'>
                <p className="p-3 text-[16px] md:text-[20px] font-bold">Событие</p>
            </div>
            <section className='flex mt-[20px]'>
                {/* <ProfileIcon /> */}
                <div className='flex grow md:grow-0 flex-col md:mx-[20px] justify-between'>
                    <div className='rounded-[20px] md:w-[340px] h-[76px] md:h-[91px]  font-medium  bg-bg-content dark:bg-dark-bg-content'>
                        <p className='w-full text-[12px] md:text-[16px] p-4'> Описание события краткое</p>
                    </div>
                    <div className='rounded-[20px] gap-[10px] flex items-center p-2 md:p-4 mt-[10px] md:w-[340px] md:h-[50px] bg-bg-content dark:bg-dark-bg-content'>
                        <p className='font-bold text-[14px] md:text-[20px]'>
                            Pinchedmon
                        </p>
                        <p className='font-medium text-[10px] md:text-[12px] text-gray-text'>
                            Название события
                        </p>
                    </div>
                </div>

                <EditButton widthIcon={26} widthButton={42} fill={'#b5b5b5'} option={EditOption.GROUP} />

            </section>
            <div className="mt-[20px] w-full p-4 flex rounded-[20px] text-[14px] md:text-[16px]  bg-bg-content dark:bg-dark-bg-content">
                Большое описание события
            </div>
            <div className="flex text-[16px] mt-4 md:mt-6 mb-4">
                <p className="ml-2 md:ml-0 font-bold  bg-bg-content dark:bg-dark-bg-content py-2 px-4 rounded-[20px]">
                    Стена cобытия
                </p>
            </div>
            {/* <PostsWall posts={[]} type={PostsType.GROUP} /> */}
        </section>
    )
}

export default EventPage