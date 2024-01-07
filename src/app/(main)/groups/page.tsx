import EditButton from "@/utils/EditButton";
import { EditOption } from "@/utils/types/editButton";
import Image from "next/image";

interface GroupProps {
    id: number;
    title: string;
    avatar: string;
    descr: string;
}
const Group = ({ props }: { props: GroupProps }) => {
    return (
        <div className="mb-4  flex  w-full rounded-[20px] px-4 pt-4 pb-4 bg-bg-content dark:bg-dark-bg-content ">
            <div className="grow flex cursor-pointer">
                <div className="mr-4 ">
                    <Image src={props.avatar} alt={"avatar"} width={50} height={50} style={{ borderRadius: '10px' }} />
                </div>
                <div className="flex grow flex-col">
                    <p className="font-bold text-lg">
                        {props.title}
                    </p>
                    <p className="mt-[2px] text-gray-text text-[14px]">
                        {props.descr}
                    </p>

                </div>
            </div>
            <div className="flex items-center">
                <EditButton widthIcon={26} widthButton={42} fill={"#b5b5b5"} option={EditOption.GROUP} />
            </div>
        </div>)
}
const GroupsPage = () => {
    return (
        <div className='mt-[12px] h-full '>
            <div className='flex gap-2 mb-3'>
                <button className=' text-[14px] border font-bold border-gray-text dark:border-white  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px] '>
                    Все группы
                </button>
                <button className='  text-[14px]  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]'>
                    Мои
                </button>
                <button className='mr-[20%] ml-auto  border-green border  text-[14px]  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]'>
                    Cоздать сообщество
                </button>
            </div>

            <input className=" mb-3 p-[6px] w-1/3 bg-white dark:bg-dark-bg-content border border-gray-text  rounded-[20px] px-4" placeholder="Поиск" />

            <div className="columns w-4/5">
                <Group props={{ id: 0, title: 'Аватария', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Самый лучший паблик в мире' }} />
                <Group props={{ id: 0, title: 'Клуб находчивых', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Знаете что нужно' }} />
                <Group props={{ id: 0, title: 'Банда студийки', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Каждый день мы публикуем топ темы' }} />
                <Group props={{ id: 0, title: 'Наруто фаны', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Хочу знать о том, что стоит за вами' }} />
                <Group props={{ id: 0, title: 'Аватария', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Самый лучший паблик в мире' }} />
                <Group props={{ id: 0, title: 'Клуб находчивых', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Знаете что нужно' }} />
                <Group props={{ id: 0, title: 'Банда студийки', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Каждый день мы публикуем топ темы' }} />
                <Group props={{ id: 0, title: 'Наруто фаны', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Хочу знать о том, что стоит за вами' }} />
                <Group props={{ id: 0, title: 'Аватария', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Самый лучший паблик в мире' }} />
                <Group props={{ id: 0, title: 'Клуб находчивых', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Знаете что нужно' }} />
                <Group props={{ id: 0, title: 'Банда студийки', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Каждый день мы публикуем топ темы' }} />
                <Group props={{ id: 0, title: 'Наруто фаны', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Хочу знать о том, что стоит за вами' }} />
            </div>
        </div >
    )
}

export default GroupsPage