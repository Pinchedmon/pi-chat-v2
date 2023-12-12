'use client'
import SearchIcon from './SearchIcon'

const SearchBar = () => {
    return (
        <div className='pl-2 gap-[8px] bg-white dark:bg-dark-bg-content flex items-center border-2 border-green rounded-[20px]  w-[367px] h-[42px]'>
            <SearchIcon width={20} height={20} />
            <input className='active:outline-none text-gray-text w-full mr-[12px] bg-inherit' placeholder='Найти в Pi-Chat' />
        </div>
    )
}

export default SearchBar