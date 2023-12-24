'use client'

import { EditOption } from "@/utils/types/editButton";
import { useState } from "react";

interface svgProps {
    option?: EditOption;
    widthIcon: number;
    widthButton: number;
    fill: string;
}



const postEdit = (
    <div>
        <div className="flex p-2 gap-4 text-[14px] items-center">
            <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill="none">
                <path d="M3.74998 14.25H4.69612L12.3736 6.57255L11.4274 5.62641L3.74998 13.3038V14.25ZM2.625 15.375V12.8365L12.5178 2.94808C12.6312 2.84507 12.7564 2.76547 12.8935 2.70928C13.0305 2.65309 13.1742 2.625 13.3246 2.625C13.475 2.625 13.6206 2.65169 13.7616 2.70506C13.9026 2.75843 14.0274 2.84328 14.136 2.95961L15.0519 3.88701C15.1682 3.99566 15.2512 4.12068 15.3007 4.26208C15.3502 4.40347 15.375 4.54486 15.375 4.68624C15.375 4.83706 15.3492 4.98098 15.2977 5.11802C15.2462 5.25507 15.1643 5.3803 15.0519 5.49371L5.16343 15.375H2.625ZM11.8922 6.10778L11.4274 5.62641L12.3736 6.57255L11.8922 6.10778Z" />
            </svg>
            <button>редактировать</button>
        </div>
        <div className="flex p-2 text-[14px] gap-4 items-center">
            <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill="none">
                <path d="M5.44072 15.3751C5.08195 15.3751 4.77552 15.2426 4.52144 14.9777C4.26734 14.7128 4.14029 14.3933 4.14029 14.0193V4.5001H3.4209V3.37512H6.65813V2.71167H10.9745V3.37512H14.2117V4.5001H13.4923V14.0193C13.4923 14.3982 13.3664 14.7188 13.1146 14.9813C12.8628 15.2438 12.5552 15.3751 12.1919 15.3751H5.44072ZM12.4132 4.5001H5.21935V14.0193C5.21935 14.0866 5.2401 14.1419 5.28161 14.1852C5.32312 14.2285 5.37616 14.2501 5.44072 14.2501H12.1919C12.2472 14.2501 12.2979 14.2261 12.3441 14.178C12.3902 14.1299 12.4132 14.077 12.4132 14.0193V4.5001ZM6.94867 12.7501H8.02773V6.0001H6.94867V12.7501ZM9.60485 12.7501H10.6839V6.0001H9.60485V12.7501Z" />
            </svg>
            <button>удалить</button>
        </div>
    </div >
)

const EditButton = (props: svgProps) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const { option, widthIcon, widthButton, fill } = props
    return (
        <div onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} className="relative">
            <button
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={`flex justify-center items-center w-[${widthButton}px] h-[${widthButton}px] rounded-[20px]  outline-gray-text  bg-bg-content dark:bg-dark-bg-content`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={widthIcon} height={widthIcon} viewBox={`0 0 ${widthIcon} ${widthIcon}`} fill="none">
                    <path d="M13.0002 21.6666C12.4043 21.6666 11.8943 21.4544 11.47 21.0301C11.0456 20.6058 10.8335 20.0958 10.8335 19.4999C10.8335 18.9041 11.0456 18.394 11.47 17.9697C11.8943 17.5454 12.4043 17.3333 13.0002 17.3333C13.596 17.3333 14.1061 17.5454 14.5304 17.9697C14.9547 18.394 15.1668 18.9041 15.1668 19.4999C15.1668 20.0958 14.9547 20.6058 14.5304 21.0301C14.1061 21.4544 13.596 21.6666 13.0002 21.6666ZM13.0002 15.1666C12.4043 15.1666 11.8943 14.9544 11.47 14.5301C11.0456 14.1058 10.8335 13.5958 10.8335 12.9999C10.8335 12.4041 11.0456 11.894 11.47 11.4697C11.8943 11.0454 12.4043 10.8333 13.0002 10.8333C13.596 10.8333 14.1061 11.0454 14.5304 11.4697C14.9547 11.894 15.1668 12.4041 15.1668 12.9999C15.1668 13.5958 14.9547 14.1058 14.5304 14.5301C14.1061 14.9544 13.596 15.1666 13.0002 15.1666ZM13.0002 8.66659C12.4043 8.66659 11.8943 8.45443 11.47 8.03013C11.0456 7.60582 10.8335 7.09575 10.8335 6.49992C10.8335 5.90409 11.0456 5.39402 11.47 4.96971C11.8943 4.5454 12.4043 4.33325 13.0002 4.33325C13.596 4.33325 14.1061 4.5454 14.5304 4.96971C14.9547 5.39402 15.1668 5.90409 15.1668 6.49992C15.1668 7.09575 14.9547 7.60582 14.5304 8.03013C14.1061 8.45443 13.596 8.66659 13.0002 8.66659Z" fill={fill} />
                </svg>
            </button>
            {isHovering &&

                <div className="absolute right-0 p-2 bg-light-bg border-gray-text border rounded-[20px] dark:bg-dark-bg">
                    {option == EditOption.POST ? postEdit : <></>}
                </div>


            }
        </div>

    )
}

export default EditButton