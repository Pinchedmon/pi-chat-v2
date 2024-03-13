'use client'

import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';


interface IFormInput {
    content: string;
    img: string

}


const SendMessageForm = (props: { id: string, userId: string, onClose: () => void }) => {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            content: '',
            img: ''
        },
        reValidateMode: "onChange"
    })
    const onSubmit = async (data: IFormInput) => {
        await axios.post('/api/chat/postMsg', {
            userId: props.id,
            senderId: props.userId,
            content: data.content,
            img: data.img,
            chatId: null,
        }).then(pr => {
            if (pr.status == 201) {
                //props.mutate({ bio: data.bio, backImage: data }, { bio: data.bio, image: data.img })
                props.onClose();
                router.push(`/chat`)
            }
        });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  bg-bg-content dark:bg-dark-bg-content'>
            <p className="text-center text-xl  font-bold mb-[12px]">
                Написать сообщение
            </p>
            {errors.content && <p className='mb-2 text-red-500 text-sm'>{'нужно заполнить поле'}</p>}
            <input
                placeholder="сообщение"
                id="bio"
                className="border-[2px] mt-[12px] border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('content', {
                })}
            />
            <input
                placeholder="картинка"
                id="image"
                className="border-[2px] mt-[12px] border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('img', {
                })}
            />
            <button
                className="flex self-center text-sm border-[2px] border-[#37B34A] mt-[20px]  pl-14 pr-14 pt-1 pb-1 font-bold rounded-xl"
            >
                Отправить
            </button>
        </form>
    )
}

export default SendMessageForm