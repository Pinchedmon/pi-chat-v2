import { fetcher } from "@/lib/fetcher";
import axios from "axios";
import { useSearchParams } from "next/navigation"
import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import { useSWRConfig } from "swr";

const AddPostForm = (props: { id: string }) => {
    const searchParams = useSearchParams()
    const { mutate } = useSWRConfig();
    const [content, setContent] = useState('');
    const handleSend = async () => {
        if (!content || !props.id) {
            return;
        }
        await axios.post('/api/post/add', {
            authorId: props.id,
            content: content
        }).then(res => res.status == 201 && mutate(`/api/posts/${props.id}`, fetcher(`/api/posts/${props.id}`)))
    }
    return (
        <div className="">
            {searchParams.get('filter') === 'wall' ?
                <div className="mt-[12px] rounded-[20px] flex   gap-2  ">
                    <TextareaAutosize value={content}
                        onChange={(e) => setContent(e.target.value)} id="content" placeholder='Написать пост' maxRows={3} className='w-full border-2 border-gray-300 px-4 py-2  rounded-[20px]' style={{ resize: 'none' }}
                    />
                    <button
                        onClick={() => handleSend()}
                        className="flex self-center text-sm border-[2px] border-[#37B34A] p-2  bg-bg-content dark:bg-dark-bg-content  font-bold rounded-[20px]">
                        Отправить
                    </button>
                </div>
                : <></>}
        </div>
    )
}

export default AddPostForm