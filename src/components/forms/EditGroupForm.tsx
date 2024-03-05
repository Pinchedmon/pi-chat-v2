'use client'

import axios from 'axios';
import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

interface IFormInput {
    id: string;
    description: string;
    img: string
    name: string;
}

const EditGroupForm = (props: { mutate: () => void, data: IFormInput, onClose: () => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            description: props.data.description,
            img: props.data.img,
            name: props.data.name
        },
        reValidateMode: "onChange"
    })
    const onSubmit = async (data: IFormInput) => {
        await axios.post('/api/group/edit', {
            id: props.data.id,
            description: data.description,
            img: data.img,
            name: data.name
        }).then(pr => {
            if (pr.status == 200) {
                props.mutate()
                props.onClose();
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  bg-bg-content dark:bg-dark-bg-content'>
            <p className="text-center text-xl  font-bold mb-[12px]">
                Редактирование
            </p>
            {errors.name && <p className='mb-2 text-red-500 text-sm'>{"Заполните поле"}</p>}
            <input
                placeholder="название"
                id="username"
                className="border-[2px] mb-[12px]  border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('name', {
                    required: true
                })}
            />
            {/* {errors.img && <p className='mb-2 text-red-500 text-sm'>{"Заполните поле"}</p>} */}
            <input
                placeholder="аватарка"
                id="img"
                className="border-[2px] mb-[12px] border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('img', {

                })}
            />
            {errors.description && <p className='mb-2 text-red-500 text-sm'>{"Заполните поле"}</p>}
            <TextareaAutosize
                placeholder="био"
                maxRows={3}
                id="bio"
                style={{ resize: 'none' }}
                className="border-[2px] border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('description', {
                    required: true
                })}
            />
            <button
                className="flex self-center text-sm border-[2px] border-[#37B34A] mt-[20px]  pl-14 pr-14 pt-1 pb-1 font-bold rounded-xl"
            >
                Изменить
            </button>
        </form>
    )
}

export default EditGroupForm