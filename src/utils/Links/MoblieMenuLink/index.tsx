'use client'


import MobileMenuIcon from './MobileMenuIcon'

interface Props {
    active: boolean
}
const MobileMenuLink = (props: Props) => {
    const { active } = props;
    return (
        <button className='flex-col md:flex-row duration-100 flex outline-[1px] md:hover:outline-[1px] md:hover:outline hover:rounded-xl outline-gray-text  outline-offset-[5px] items-center'
        >
            <MobileMenuIcon width={26} height={26}
                fill={
                    active ? '#37B34A' :
                        '#B5B5B5'}
            />
            <p className={` md:ml-[12px] font-medium `}>Меню</p>
        </button>
    )
}

export default MobileMenuLink