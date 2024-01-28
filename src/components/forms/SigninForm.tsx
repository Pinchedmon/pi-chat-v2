'use client'

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
interface IFormInput {
    password: string
    tag: string
}

const SigninForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const router = useRouter();
    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
        const login = await signIn('credentials', {
            tag: data.tag,
            password: data.password,
            callbackUrl: '/',
            redirect: false,
        })
        if (login?.error) {
            console.log(login.error)
        } else {
            toast.error('Ошибка');
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            {errors.tag && <p className='mb-2 text-red-500 text-sm'>{errors.tag.message}</p>}
            <input
                placeholder="Тэг"
                id='tag'
                className="border-[2px]  border-[#b5b5b5] mb-[20px] pl-3 p-2 rounded-xl"
                {...register('tag', {
                    required: 'Не заполнено',
                })}
            />
            {errors.password && <p className='mb-2 text-red-500 text-sm'>{errors.password.message}</p>}
            <input
                placeholder="Пароль"
                id='password'
                className="border-[2px]  border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('password', {
                    required: 'Не заполнено',
                })}
            />


            <button
                className="flex self-center text-sm border-[2px] border-[#37B34A] mt-[20px]  pl-14 pr-14 pt-1 pb-1 font-bold rounded-xl"
            >
                Войти
            </button>
            <Toaster />

        </form>
    )
}

export default SigninForm