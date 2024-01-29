'use client'
import { setWelcomeForm } from '@/lib/features/auth/signupSlice';
import { useAppDispatch } from '@/lib/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    tag: string
    password: string
    secPassword: string
}

interface Props {
    onSwitch: () => void;
}
const SignupWelcomeForm = (props: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        props.onSwitch();
        dispatch(setWelcomeForm(data))
    }
    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            {errors.tag && <p className='mb-2 text-red-500 text-sm'>{errors.tag.message}</p>}
            <input
                placeholder="Логин"
                id="login"
                className={`${errors.tag && 'placeholder:text-red-500 text-red-500'} border-[2px]  border-[#b5b5b5] pl-3 p-2 mb-[20px] rounded-xl`}
                {...register('tag', {
                    required: 'Обязательное поле',
                    minLength: { value: 3, message: 'Мин. длина 3 символов' },
                    maxLength: { value: 16, message: 'Макс. длина 16 символов' }
                })}
            />
            {errors.password && <p className='mb-2 text-red-500 text-sm'>{errors.password.message}</p>}
            <input
                placeholder="Пароль"
                id="password"
                type="password"
                className={`${errors.password && 'placeholder:text-red-500 text-red-500'} border-[2px] border-[#b5b5b5] pl-3 p-2 mb-[20px] rounded-xl`}
                {...register('password', {
                    required: 'Пароль обязателен',
                    minLength: { value: 6, message: 'Мин. длина 6 символов' },
                    maxLength: { value: 16, message: 'Макс. длина 16 символов' }
                })}
            />
            {errors.secPassword && <p className='mb-2 text-red-500 text-sm'>{errors.secPassword.message}</p>}
            <input
                placeholder="Повторный пароль"
                id="secPassword"
                type="password"
                className={`${errors.secPassword && 'placeholder:text-red-500 text-red-500'} border-[2px] mb-[20px] border-[#b5b5b5] pl-3 p-2 rounded-xl`}
                {...register('secPassword', {
                    required: 'Повторите пароль',
                    minLength: { value: 6, message: 'Мин. длина 6 символов' },
                    maxLength: { value: 16, message: 'Макс. длина 16 символов' },
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return "Не совпадает пароль";
                        }
                    }
                })}
            />
            <button
                className="flex self-center text-sm cursor-pointer border-[2px] border-[#37B34A]  mx-4 pl-6 pr-6 pt-1 pb-1 font-bold rounded-xl"
            >
                Продолжить
            </button>
        </form>
    )
}

export default SignupWelcomeForm