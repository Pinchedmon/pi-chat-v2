'use client';

import TextareaAutosize from 'react-textarea-autosize';
import SendButton from './SendButton';
import { usePathname, useSearchParams } from 'next/navigation';
import { useSWRConfig } from 'swr';
import { useState } from 'react';
import { fetcher } from '@/lib/fetcher';
import axios from 'axios';
const SendMessageArea = (props: { type: "post" | "chat", userId: number | string }) => {
    const id = useSearchParams().get('id');
    const { mutate } = useSWRConfig();
    const [content, setContent] = useState('');
    const pathname = usePathname()
    const handleSend = async () => {
        if (!content) {
            return;
        }
        console.log(pathname)
        if (pathname == '/post')
            await axios.post('/api/comment/add', {
                authorId: props.userId,
                content: content,
                postId: id
            }).then(res => {
                if (res.status == 201) {
                    mutate(`/api/post/${id}`, fetcher(`/api/post/${id}`))
                    setContent('')
                }
            })
    }
    return (
        <div className='flex  gap-4 mt-[10px] mx-4 md:mx-4'>
            <TextareaAutosize value={content} onChange={(e) => setContent(e.target.value)} placeholder='Отправить сообщение' maxRows={3} className='w-full border-2 border-gray-300 px-4 py-2  rounded-[20px]' style={{ resize: 'none' }} />
            <SendButton width={24} height={24} onClick={() => handleSend()} />
        </div>
    )
}

export default SendMessageArea