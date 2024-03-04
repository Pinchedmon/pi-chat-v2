import axios from "axios"
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";

const FriendEdit = ({ data }: { data: number | undefined }) => {
    const session = useSession();
    console.log(data)
    const { mutate } = useSWRConfig();
    const unfollow = async () => {
        try {
            await axios.delete(`/api/follow?userId=${session.data?.user.id}&friendId=${data}`)
            mutate(`/api/follows?id=${session.data?.user.id}`)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="absolute    right-[42px] top-0 pl-4  ">
            <div className="p-1 bg-white border-gray-text rounded-[20px] border dark:bg-dark-bg">
                <div className="flex p-2 text-[14px] gap-4 items-center">
                    <svg className='fill-[red] dark:fill-[red]' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill="none">
                        <path d="M5.44072 15.3751C5.08195 15.3751 4.77552 15.2426 4.52144 14.9777C4.26734 14.7128 4.14029 14.3933 4.14029 14.0193V4.5001H3.4209V3.37512H6.65813V2.71167H10.9745V3.37512H14.2117V4.5001H13.4923V14.0193C13.4923 14.3982 13.3664 14.7188 13.1146 14.9813C12.8628 15.2438 12.5552 15.3751 12.1919 15.3751H5.44072ZM12.4132 4.5001H5.21935V14.0193C5.21935 14.0866 5.2401 14.1419 5.28161 14.1852C5.32312 14.2285 5.37616 14.2501 5.44072 14.2501H12.1919C12.2472 14.2501 12.2979 14.2261 12.3441 14.178C12.3902 14.1299 12.4132 14.077 12.4132 14.0193V4.5001ZM6.94867 12.7501H8.02773V6.0001H6.94867V12.7501ZM9.60485 12.7501H10.6839V6.0001H9.60485V12.7501Z" />
                    </svg>
                    <button className="text-[red]" onClick={() => unfollow()}>Отписаться</button>
                </div>
            </div>
        </div >
    )
}
export default FriendEdit;