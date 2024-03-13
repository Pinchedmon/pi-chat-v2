'use client';

import TextareaAutosize from 'react-textarea-autosize';
import SendButton from './SendButton';
import { usePathname, useSearchParams } from 'next/navigation';
import { useSWRConfig } from 'swr';
import { useState } from 'react';
import { fetcher } from '@/lib/fetcher';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const SendMessageArea = () => {

    const session = useSession()
    const senderId = session.data?.user.id
    const id = useSearchParams().get('id');
    const [message, setMessage] = useState('');
    const sendMessage = async () => {
        await axios.post(`/api/chat/postMsg`, {
            content: message, chatId: id, senderId, img: ''
        })
    }
    // const { mutate } = useSWRConfig();
    // const [content, setContent] = useState('');
    // const pathname = usePathname()
    // const handleSend = asyc () => {
    //     if (!content) {
    //         return;
    //     }
    //     console.log(pathname)
    //     if (pathname == '/post')
    //         await axios.post('/api/comment/add', {
    //             authorId: session.data?.user.id,
    //             content: content,
    //             postId: id
    //         }).then(res => {
    //             if (res.status == 201) {
    //                 mutate(`/api/post/${id}`, fetcher(`/api/post/${id}`))
    //                 setContent('')
    //             }
    //         })
    // }
    return (
        <div className='flex  gap-4 mt-[10px] mx-4 md:mx-4'>
            <TextareaAutosize value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Отправить сообщение' maxRows={3} className='w-full border-2 border-gray-300 px-4 py-2  rounded-[20px]' style={{ resize: 'none' }} />
            <SendButton width={24} height={24} onClick={sendMessage} />
        </div>
    )
}

export default SendMessageArea