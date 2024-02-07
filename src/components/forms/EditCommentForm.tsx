'use client'

import axios from "axios";
import { useForm } from "react-hook-form"
import TextareaAutosize from 'react-textarea-autosize';

interface IFormInput {
    content: string;
    img: string;
}
const EditCommentForm = (props: { data: { content: string, img: string }, mutate: () => void, id: number | undefined, onClose: () => void }) => {
    const { data, mutate, id, onClose } = props
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

    const onSubmit = async (data: IFormInput) => {
        await axios.put('/api/comment/edit', {
            commentId: id,
            content: data.content,
            img: data.img
        }).then(pr => {
            if (pr.status == 200) {
                mutate()
                onClose();
            }
        });

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  bg-bg-content dark:bg-dark-bg-content'>
            <p className="text-center text-xl  font-bold mb-[12px]">
                Редактирование
            </p>
            {errors.content && <p className="text-red-500"> Обязательно к заполнению </p>}
            <TextareaAutosize
                id="content" placeholder='Написать пост' maxRows={3} className='border-[2px] mt-[12px] border-[#b5b5b5] pl-3 p-2 rounded-xl' style={{ resize: 'none' }}
                {...register('content', {
                    required: true
                })}
                defaultValue={data.content}
            />
            <input
                className="border-[2px]  mt-[12px] flex border-[#b5b5b5] pl-3 p-2 rounded-xl"
                type="text"
                id="img"
                placeholder="Картинка"
                {...register('img')}

            />
            <button
                className="flex self-center text-sm border-[2px] border-[#37B34A] mt-[20px]  pl-14 pr-14 pt-1 pb-1 font-bold rounded-xl"
            >
                Изменить
            </button>
        </form>
    )
}

export default EditCommentForm