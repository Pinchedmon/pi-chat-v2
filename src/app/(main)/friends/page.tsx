


import EditButton from "@/components/EditButton";
import Image from "next/image";

interface GroupProps {
    id: number;
    title: string;
    avatar: string;
    descr: string;
}
const Friend = ({ props }: { props: GroupProps }) => {
    return (
        <div className="mb-4  flex  w-full rounded-[50px] px-4 pt-4 pb-4 bg-bg-content dark:bg-dark-bg-content ">
            <div className="grow flex cursor-pointer">
                <div className="mr-4 ">
                    <Image src={props.avatar} alt={"avatar"} width={50} height={50} style={{ borderRadius: '50px' }} />
                </div>
                <div className="flex grow flex-col">
                    <p className="font-bold text-lg">
                        {props.title}
                    </p>
                    {props.descr && <p className="mt-[2px] text-gray-text text-[14px]">
                        {props.descr}
                    </p>}

                </div>
            </div>
            <div className="flex items-center mr-4  ">
                <p className=" border  px-4  py-2 rounded-[20px] border-green text-[14px]">Написать сообщение</p>
            </div>
            <div className="flex items-center  ">
                <EditButton widthIcon={26} widthButton={42} fill={"#b5b5b5"} />
            </div>
        </div>)
}
const FriendsPage = () => {
    return (
        <div className='mt-[12px] h-full '>
            <div className='flex gap-2 mb-3'>
                <button className=' text-[14px] border font-bold border-gray-text dark:border-white  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px] '>
                    Все друзья
                </button>
                <button className='  text-[14px]  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]'>
                    В онлайне
                </button>
            </div>
            <input className=" mb-3 p-[6px] w-1/3 bg-white dark:bg-dark-bg-content border border-gray-text  rounded-[20px] px-4" placeholder="Поиск друзей" />
            <div className="columns w-4/5">
                <Friend props={{ id: 0, title: 'Pinchedmon', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Самый лучший паблик в мире' }} />
            </div>
        </div >
    )
}

export default FriendsPage



