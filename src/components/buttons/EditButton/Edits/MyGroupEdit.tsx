/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useAppSelector } from "@/lib/hooks"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import { useSWRConfig } from "swr"

const myGroupEdit = (props: { openModal: () => void }) => {
    const router = useRouter()
    const id = useSearchParams().get('id');
    const { mutate } = useSWRConfig();
    const { mutate: mutateGroups, mutateSec } = useAppSelector((state) => state.groupWall)
    const handleDelete = async () => {
        await axios.delete('/api/group/delete', {
            data: {
                id: id
            }
        }).then(res => {
            mutateSec && mutateSec()
            mutateGroups && mutateGroups()
            router.push('/groups')
        })
    }

    return (<div className="absolute   top-0  left-[-200px] md:left-[42px] pl-4 ">
        <div className="p-1 bg-white border-gray-text rounded-[20px] border dark:bg-dark-bg">
            <button className="flex p-2 gap-4 text-[14px] items-center" onClick={props.openModal}>
                <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill="none">
                    <path d="M3.74998 14.25H4.69612L12.3736 6.57255L11.4274 5.62641L3.74998 13.3038V14.25ZM2.625 15.375V12.8365L12.5178 2.94808C12.6312 2.84507 12.7564 2.76547 12.8935 2.70928C13.0305 2.65309 13.1742 2.625 13.3246 2.625C13.475 2.625 13.6206 2.65169 13.7616 2.70506C13.9026 2.75843 14.0274 2.84328 14.136 2.95961L15.0519 3.88701C15.1682 3.99566 15.2512 4.12068 15.3007 4.26208C15.3502 4.40347 15.375 4.54486 15.375 4.68624C15.375 4.83706 15.3492 4.98098 15.2977 5.11802C15.2462 5.25507 15.1643 5.3803 15.0519 5.49371L5.16343 15.375H2.625ZM11.8922 6.10778L11.4274 5.62641L12.3736 6.57255L11.8922 6.10778Z" />
                </svg>
                <p> Изменить </p>

            </button>
            <button className="flex p-2 gap-4 text-[14px] items-center" onClick={handleDelete}>
                <svg className='fill-red-500 dark:fill-[red]' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill="none">
                    <path d="M5.44072 15.3751C5.08195 15.3751 4.77552 15.2426 4.52144 14.9777C4.26734 14.7128 4.14029 14.3933 4.14029 14.0193V4.5001H3.4209V3.37512H6.65813V2.71167H10.9745V3.37512H14.2117V4.5001H13.4923V14.0193C13.4923 14.3982 13.3664 14.7188 13.1146 14.9813C12.8628 15.2438 12.5552 15.3751 12.1919 15.3751H5.44072ZM12.4132 4.5001H5.21935V14.0193C5.21935 14.0866 5.2401 14.1419 5.28161 14.1852C5.32312 14.2285 5.37616 14.2501 5.44072 14.2501H12.1919C12.2472 14.2501 12.2979 14.2261 12.3441 14.178C12.3902 14.1299 12.4132 14.077 12.4132 14.0193V4.5001ZM6.94867 12.7501H8.02773V6.0001H6.94867V12.7501ZM9.60485 12.7501H10.6839V6.0001H9.60485V12.7501Z" />
                </svg>
                <p className="text-red-500"> Удалить </p>

            </button>

        </div>


    </div >
    )
}
export default myGroupEdit