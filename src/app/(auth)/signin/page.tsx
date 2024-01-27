'use client'

import SigninForm from '@/components/forms/SigninForm';
import { useRouter } from 'next/navigation'

const SigninPage = () => {
    const router = useRouter()
    return (
        <section className="flex flex-col border-[3px] rounded-3xl px-14 pt-8 pb-4 border-[#424530] bg-white dark:bg-[#2C2C2C] dark:border-[#5b5b5b]">
            <div className="flex justify-center">
                <p className="border-[3px] py-2.5 px-8 text-3xl font-bold rounded-xl text-center border-[#37B34A] dark:text-white">
                    / π - Чат /
                </p>
            </div>
            <p className="text-center text-2xl mb-[42px]  font-bold mt-[38px]">
                ВХОД
            </p>
            <SigninForm />
            <button
                onClick={() => router.push('signup')}
                className="mt-[45px] underline text-center text-[#37B34A] cursor-pointer">Зарегистрироваться</button>
        </section >

    )
}

export default SigninPage