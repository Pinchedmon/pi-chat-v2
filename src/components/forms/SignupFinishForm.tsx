import { setFinishForm } from '@/lib/features/auth/signupSlice';
import { useAppDispatch, useAppSelector, } from '@/lib/hooks';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    username: string
    image: string
}

const SignupFinishForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<IFormInput>();
    const dispatch = useAppDispatch();
    const signup = useAppSelector(state => state.signup)
    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        dispatch(setFinishForm(data))
    }
    const router = useRouter();
    const postData = async () => {
        const response = await axios.post('/api/user', {
            username: signup.username,
            password: signup.password,
            tag: signup.tag,
            avatar: signup.img,
        });

        if (response.status === 201) {
            router.push('signin');
        } else {
            console.log('Reg failed');
        }
    }
    useEffect(() => {
        if (signup.username !== '' && signup.username == getValues('username')) {
            postData()
        }
    }, [signup, router]);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center text-xl  font-bold mb-[32px]">
                Ваши данные
            </p>
            {errors.username && <p className='mb-2 text-red-500 text-sm'>{errors.username.message}</p>}
            <input
                placeholder="Тэг"
                id="username"
                className="border-[2px]  border-[#b5b5b5] pl-3 p-2 rounded-xl"
                {...register('username', {
                    required: 'Не заполнено',
                    minLength: { value: 3, message: 'Мин. длина 6 символов' },
                    maxLength: { value: 16, message: 'Макс. длина 16 символов' },
                })}

            />
            <input
                className="border-[2px]  mt-[12px] flex border-[#b5b5b5] pl-3 p-2 rounded-xl"
                type="text"
                id="image"
                placeholder="Url картинки"
                {...register('image')}
            />
            <div className="flex justify-center">
                <button
                    // href="posts?filter=wall"
                    className="border-[2px] border-[#37B34A] mt-[20px]  text-sm pl-6 pr-6 pt-1 pb-1 font-bold rounded-xl"
                >
                    Зарегистрироваться
                </button>
            </div>
        </form>
    )
}

export default SignupFinishForm