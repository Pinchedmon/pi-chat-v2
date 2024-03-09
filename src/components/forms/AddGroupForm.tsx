'use client'

import axios from 'axios';
import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import { useSWRConfig } from 'swr';

interface IFormInput {
    bio: string;
    img: string
    name: string;
}

const AddGroupForm = (props: {
    id: string, onClose: () => void, allStatus: boolean;
    search: string
}) => {
    const { mutate } = useSWRConfig()
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            bio: '',
            img: '',
            name: '',
        },
        reValidateMode: "onChange"
    })
    const onSubmit = async (data: IFormInput) => {
        await axios.post('/api/group/add', {
            id: props.id,
            bio: data.bio,
            img: data.img,
            name: data.name
        }).then(pr => {
            mutate(`/api/groups${!props.allStatus ? '?userId=' + props.id : ''}${props.search ? '?search=' + props.search : ''}`);
            props.onClose();
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  bg-bg-content dark:bg-dark-bg-content'>
            <p className="text-center text-xl  font-bold mb-[12px]">
                Cоздание поста
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
            {errors.bio && <p className='mb-2 text-red-500 text-sm'>{"Заполните поле"}</p>}
            <TextareaAutosize
                placeholder="био"
                maxRows={3}
                id="bio"
                style={{ resize: 'none' }}
                className="border-[2px] border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('bio', {
                    required: true
                })}
            />
            <button
                className="flex self-center text-sm border-[2px] border-[#37B34A] mt-[20px]  pl-14 pr-14 pt-1 pb-1 font-bold rounded-xl"
            >
                Создать
            </button>
        </form>
    )
}

export default AddGroupForm