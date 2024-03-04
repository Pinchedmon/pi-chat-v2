'use client'
import useSWR from "swr";
import Friend from "./components/Follow";
import { fetcher } from "@/lib/fetcher";
import { useSession } from "next-auth/react";


const FollowsPage = () => {
    const session = useSession()
    const { data, isLoading, error } = useSWR(`/api/follows?id=${session.data?.user.id}`, fetcher)

    if (error) return <div>ошибка загрузки</div>

    if (isLoading) return <div>загрузка...</div>

    console.log(data)
    return (
        <section className='mt-[12px] w-full h-full '>
            <div className='flex ml-2 md:ml-0 gap-2 mb-3'>
                <button className=' text-[14px] border font-bold border-gray-text dark:border-white  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px] '>
                    Все подписки
                </button>
                <button className='  text-[14px]  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]'>
                    В онлайне
                </button>
            </div>
            <input className="ml-2 md:ml-0 mb-3 p-[6px] md:w-1/3 bg-white dark:bg-dark-bg-content border border-gray-text  rounded-[20px] px-4" placeholder="Поиск среди подписок" />
            <div className="columns md:w-4/5">
                <Friend props={{ id: 0, title: 'Pinchedmon', avatar: 'https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg', descr: 'Самый лучший паблик в мире' }} />
            </div>
        </ section>
    )
}

export default FollowsPage



