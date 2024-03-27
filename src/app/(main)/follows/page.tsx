'use client'

import FollowWall from "./components/FollowWall";
import { SetStateAction, useState } from "react";
import clsx from "clsx";
import { useDebounce } from "use-debounce";

const FollowsPage = () => {
    const [allStatus, setAllStatus] = useState<boolean>(true)
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue] = useDebounce(inputValue, 500);
    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    }
    return (
        <section className='mt-[12px] w-full h-full '>
            <div className='flex ml-2 md:ml-0 gap-2 mb-3'>
                <button onClick={() => setAllStatus(true)} className={clsx(allStatus && 'border font-bold', 'whitespace-nowrap text-[12px] md:text-[14px]  border-gray-text dark:border-white  bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]')}>
                    Все подписки
                </button>
                {/* <button onClick={() => setAllStatus(false)} className={clsx(!allStatus && 'border font-bold', 'text-[12px] md:text-[14px] bg-bg-content dark:bg-dark-bg-content px-4 py-2 flex items-center rounded-[20px]')}>
                    В онлайне
                </button> */}
            </div>
            <input
                value={inputValue} onChange={handleInputChange}
                className="ml-2 md:ml-0 mb-3 p-[6px] md:w-1/3 bg-white dark:bg-dark-bg-content border border-gray-text  rounded-[20px] px-4" placeholder="Поиск среди подписок" />
            <FollowWall allStatus={false} search={debouncedValue} />
        </section>
    )
}

export default FollowsPage



