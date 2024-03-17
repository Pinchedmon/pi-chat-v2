'use client';

import TextareaAutosize from 'react-textarea-autosize';
import SendButton from './SendButton';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const SendMessageArea = () => {
    const session = useSession()
    const senderId = session.data?.user.id
    const chatId = useSearchParams().get('id');
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        await axios.post(`/api/chat/postMsg`, {
            content: message, chatId, senderId: senderId as string, img: ''
        }).then(() => {
            setMessage('')
        })
    }

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