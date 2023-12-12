import Link from 'next/link'

const LoginPage = () => {
    return (
        <div className="flex flex-col border-[5px] rounded-3xl px-14 pt-8 pb-4 border-[#424530] bg-white dark:bg-[#2C2C2C] dark:border-[#5b5b5b]">
            <div className="flex justify-center">
                <p className="border-[4px] py-2.5 px-8 text-3xl font-bold rounded-xl text-center border-[#37B34A] dark:text-white">
                    / π - Чат /
                </p>
            </div>

            <p className="text-center text-2xl  font-bold mt-[38px]">
                ВХОД
            </p>
            <input
                placeholder="Логин"
                className="border-[3px] mt-[42px] border-[#424530] pl-3 p-2 rounded-xl" />
            <input
                placeholder="Пароль"
                className="border-[3px] mt-[20px] border-[#424530] pl-3 p-2 rounded-xl" />

            <div className="flex justify-center">
                <Link
                    href="wall" className="border-[3px] border-[#37B34A] mt-[20px]  pl-14 pr-14 pt-1 pb-1 font-bold rounded-xl"
                >
                    Войти
                </Link>
            </div>
            <button className="mt-[45px] underline text-center text-[#37B34A] cursor-pointer">Зарегистрироваться</button>

        </div >

    )
}

export default LoginPage