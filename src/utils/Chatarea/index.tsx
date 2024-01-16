'use client';

import TextareaAutosize from 'react-textarea-autosize';
import SendButton from './SendButton';
const Chatarea = () => {
    return (
        <div className='flex gap-4 mt-[10px] mr-8 md:mx-4'>
            <TextareaAutosize placeholder='Отправить сообщение' maxRows={3} className='w-full border-2 border-green px-4 py-2  rounded-[20px]' style={{ resize: 'none' }} />
            <SendButton width={24} height={24} />
        </div>

    )
}

export default Chatarea