import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface IFormInput {
    username: string
    image: string
}

const SignupFinishForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const router = useRouter();
    const onSubmit = () => {
        router.push('posts?filter=wall');
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center text-xl  font-bold mt-[1н8px]">
                Ваши данные
            </p>
            {errors.username && <p className='mb-2 text-red-500 text-sm'>{errors.username.message}</p>}
            <input
                placeholder="Тэг"
                id="username"
                className="border-[2px] mt-[32px] border-[#b5b5b5] pl-3 p-2 rounded-xl"
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