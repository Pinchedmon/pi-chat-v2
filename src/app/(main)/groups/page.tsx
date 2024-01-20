import Group from "./components/Group";


const GroupsPage = () => {
    return (
        <section className='mt-[12px] ml-2 md:ml-0 h-full '>
            <div className='flex gap-2 mb-3'>
                <button className=' whitespace-nowrap text-[12px] md:text-[14px] border font-bold border-gray-text dark:border-white  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px] '>
                    Все группы
                </button>
                <button className='  text-[12px] md:text-[14px]  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]'>
                    Мои
                </button>
                <button className=' whitespace-nowrap mr-[20%] ml-auto  border-green border  text-[12px] md:text-[14px]  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]'>
                    Cоздать сообщество
                </button>
            </div>

            <input className=" mb-3 p-[6px] md:w-1/3 bg-white  dark:bg-dark-bg-content border border-gray-text  rounded-[20px] px-4" placeholder="Поиск" />

            <div className="columns md:w-4/5">
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
        </section >
    )
}

export default GroupsPage