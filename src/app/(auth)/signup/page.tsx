'use client';

import { useState, } from 'react';
import { useRouter } from 'next/navigation'
import SignupWelcomeForm from '@/components/forms/SignupWelcomeForm';
import SignupFinishForm from '@/components/forms/SignupFinishForm';


const SignupPage = () => {
    const [isWelcome, setIsWelcome] = useState(true);
    const router = useRouter();

    return (
        <section
            className="flex flex-col border-[3px] rounded-3xl px-14 pt-8 pb-4 border-[#424530] bg-white dark:bg-[#2C2C2C] dark:border-[#5b5b5b]">
            <div className="flex justify-center">
                <p className="border-[3px] py-2.5 px-8 text-3xl font-bold rounded-xl text-center border-[#37B34A] dark:text-white">
                    / π - Чат /
                </p>
            </div>
            <label className="text-center text-2xl mb-[32px]  font-bold mt-[38px]">
                РЕГИСТРАЦИЯ
            </label>
            {isWelcome ? <>
                <SignupWelcomeForm onSwitch={() => setIsWelcome(false)} />
            </> :
                <SignupFinishForm />
            }
            <div
                onClick={() => { isWelcome ? router.push('signin') : setIsWelcome(true) }} className="mt-[45px] underline text-center text-[#37B34A] cursor-pointer">{isWelcome ? 'Выйти' : 'Назад'}</div>

        </section >

    )
}

export default SignupPage