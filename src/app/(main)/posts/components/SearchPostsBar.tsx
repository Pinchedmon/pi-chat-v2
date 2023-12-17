'use client'

import SearchIcon from "@/widgets/main/Searchbar/SearchIcon"
import { useSearchParams } from "next/navigation"

const SearchPostsBar = () => {
    const searchParams = useSearchParams()

    return (
        <>
            {searchParams.get('filter') === 'search' ? <div className="mt-[12px] rounded-[20px] p-3 flex bg-bg-content dark:bg-dark-bg-content">
                <input className="bg-white dark:bg-dark-bg-content border border-gray-text mr-[12px] rounded-[20px] px-4" placeholder="поиск" />
                <button className="cursor-pointer flex border items-center bg-white dark:bg-dark-bg-content justify-center rounded-[20px] border-green w-[40px] h-[40px] hover:border-gray-text">
                    <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M18.2851 17.1474L13.0511 11.9135C12.6345 12.2575 12.1553 12.5267 11.6136 12.7211C11.072 12.9156 10.5116 13.0128 9.93255 13.0128C8.50825 13.0128 7.30281 12.5197 6.31626 11.5333C5.3297 10.547 4.83643 9.34192 4.83643 7.91799C4.83643 6.49405 5.32958 5.28849 6.31588 4.30131C7.30219 3.31414 8.50731 2.82056 9.93126 2.82056C11.3552 2.82056 12.5607 3.31384 13.5479 4.30039C14.5351 5.28695 15.0287 6.49238 15.0287 7.91668C15.0287 8.51177 14.9288 9.08014 14.729 9.62181C14.5292 10.1635 14.2627 10.6346 13.9293 11.0353L19.1633 16.2692L18.2851 17.1474ZM9.93255 11.7628C11.0063 11.7628 11.9157 11.3903 12.6609 10.6451C13.4061 9.89986 13.7787 8.9904 13.7787 7.91668C13.7787 6.84296 13.4061 5.9335 12.6609 5.18831C11.9157 4.44311 11.0063 4.07051 9.93255 4.07051C8.85883 4.07051 7.94937 4.44311 7.20418 5.18831C6.459 5.9335 6.08641 6.84296 6.08641 7.91668C6.08641 8.9904 6.459 9.89986 7.20418 10.6451C7.94937 11.3903 8.85883 11.7628 9.93255 11.7628Z" />
                    </svg>
                </button>
            </div> : <></>}

        </>
    )
}

export default SearchPostsBar