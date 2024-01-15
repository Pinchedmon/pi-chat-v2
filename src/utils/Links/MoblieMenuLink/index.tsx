'use client'

import Link from 'next/link'


import MobileMenuIcon from './MobileMenuIcon'


const MobileMenuLink = () => {

    return (
        <button className='flex-col md:flex-row duration-100 flex outline-[1px] md:hover:outline-[1px] md:hover:outline hover:rounded-xl outline-gray-text  outline-offset-[5px] items-center'
        // href={'menu'}
        >
            <MobileMenuIcon width={26} height={26}
                fill={
                    // pathname === '/posts' ? '#37B34A' :
                    '#B5B5B5'}
            />
            <p className={` md:ml-[12px] font-medium `}>Меню</p>
        </button>
    )
}

export default MobileMenuLink