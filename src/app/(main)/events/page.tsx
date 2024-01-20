import Event from "@/components/Event";
const EventsPage = () => {
    return (
        <section className="mt-[20px]">
            <div className="flex text-lg mb-4">
                <p className="ml-2 md:ml-0 text-[16px] font-bold">
                    Популярные
                </p>
                <button className="mr-2 hover:underline text-[16px] text-green ml-auto md:mr-[0]">
                    Посмотреть все
                </button>
            </div>
            <div className="flex overflow-auto ">
                <div className="flex flex-col  md:flex-row w-full gap-4 ">
                    <Event props={{ id: 1, title: 'Приглашение на квест', descr: "The most powerfull event, where u can see", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />
                    <Event props={{ id: 2, title: 'Приглашение на квест', descr: "The most powerfull event, where u can see", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />
                </div>

            </div>
            <div className="flex text-[16px] mt-4x   md:mt-8 mb-4">
                <p className="ml-2 md:ml-0 font-bold">
                    Все
                </p>
            </div>
            <div className="flex flex-col  md:grid grid-cols-2  gap-4">
                <Event props={{ id: 1, title: 'Приглашение на квест', descr: "The most powerfull event, where u can see", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />
                <Event props={{ id: 2, title: 'Приглашение на квест', descr: "The most powerfull event, where u can see", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />
                <Event props={{ id: 3, title: 'Название группы Название группы Название группы', descr: "Описание", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />
                <Event props={{ id: 4, title: 'Название группы', descr: "ОписаниеНазвание группыНазвание группы", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />
            </div>
        </section >
    )
}

export default EventsPage