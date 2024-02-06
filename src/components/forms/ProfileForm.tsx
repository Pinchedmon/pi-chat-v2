'use client'

import axios from 'axios';
import { useForm } from 'react-hook-form';


interface IFormInput {
    bio: string;
    image: string
    backImage: string;
    username: string;
}


const ProfileForm = (props: { id: string, mutate: (profileData: any, userData: any) => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit = async (data: IFormInput) => {
        await axios.post('/api/profile/edit', {
            userId: props.id,
            bio: data.bio,
            image: data.image,
            backImage: data.backImage,
            username: data.username,
        }).then(pr => {
            if (pr.status == 201) {
                props.mutate({ bio: data.bio, backImage: data }, { bio: data.bio, image: data.image })
            }
        });

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  bg-bg-content dark:bg-dark-bg-content'>
            <p className="text-center text-xl  font-bold mb-[12px]">
                Редактирование
            </p>
            {errors.bio && <p className='mb-2 text-red-500 text-sm'>{errors.bio.message}</p>}
            <input
                placeholder="ник"
                id="username"
                className="border-[2px] mt-[12px]  border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('username', {
                })}
            />
            <input
                placeholder="био"
                id="bio"
                className="border-[2px] mt-[12px] border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('bio', {


                })}
            />
            <input
                placeholder="аватарка"
                id="image"
                className="border-[2px] mt-[12px] border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('image', {

                })}
            />
            <input
                className="border-[2px]  mt-[12px] flex border-[#b5b5b5] pl-3 p-2 rounded-xl"
                type="text"
                id="backImage"
                placeholder="Back Картинка"
                {...register('backImage')}
            />
            <button
                className="flex self-center text-sm border-[2px] border-[#37B34A] mt-[20px]  pl-14 pr-14 pt-1 pb-1 font-bold rounded-xl"
            >
                Изменить
            </button>
        </form>
    )
}

export default ProfileForm