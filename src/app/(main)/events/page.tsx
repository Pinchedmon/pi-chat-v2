import moment from "moment";
import Image from "next/image"
import Link from "next/link";
import Event from "@/components/Event";
const EventsPage = () => {
    return (
        <div className="overflow-auto w-full mt-[20px]">
            <div className="overflow-auto">
                <div className="flex text-lg mb-4">
                    <p className="font-bold">
                        Популярные
                    </p>
                    <button className="hover:underline text-green ml-auto mr-[0%]">
                        Посмотреть все
                    </button>
                </div>
                <div className="flex flex-col gap-4 overflow-x-auto ">
                    <Event props={{ id: 1, title: 'Приглашение на квест', descr: "The most powerfull event, where u can see", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />

                    <Event props={{ id: 2, title: 'Приглашение на квест', descr: "The most powerfull event, where u can see", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />
                </div>
            </div>
            <div className="flex text-lg mt-8 mb-4">
                <p className="font-bold">
                    Все
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {/* <Event props={{ id: 3, title: 'Название группы Название группы Название группы', descr: "Описание", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} />
                <Event props={{ id: 4, title: 'Название группы', descr: "ОписаниеНазвание группыНазвание группы", avatar: 'https://i.pinimg.com/564x/70/23/12/702312fc8a652717239781260bf09809.jpg' }} /> */}
            </div>
        </div>
    )
}

export default EventsPage