import Link from "next/link"

const WelcomeForm = (
    <form className="flex flex-col">
        <label className="text-center text-2xl  font-bold mt-[38px]">
            РЕГИСТРАЦИЯ
        </label>
        <input
            placeholder="Логин"
            className="border-[2px] mt-[32px] border-[#b5b5b5] pl-3 p-2 rounded-xl" />
        <input
            placeholder="Пароль"
            className="border-[2px] mt-[20px] border-[#b5b5b5] pl-3 p-2 rounded-xl" />
        <input
            placeholder="Повторный пароль"
            className="border-[2px] mt-[20px] border-[#b5b5b5] pl-3 p-2 rounded-xl" />
        <div className="flex justify-center">
            <Link
                href="posts?filter=wall" className="border-[2px] border-[#37B34A] mt-[20px]  mx-4 pl-6 pr-6 pt-1 pb-1 font-bold rounded-xl"
            >
                Продолжить
            </Link>
        </div>
    </form >
)
const PersonalForm = (
    <form className="flex flex-col">
        <label className="text-center text-2xl  font-bold mt-[38px]">
            Ваши данные
        </label>
        <input
            placeholder="Имя"
            className="border-[2px] mt-[32px] border-[#b5b5b5] pl-3 p-2 rounded-xl" />

        <input
            className="w-[250px] mt-[12px] flex rounded-xl"
            type="file"
            name="myImage"
            placeholder=""
        />

        <div className="flex justify-center">
            <Link
                href="posts?filter=wall" className="border-[2px] border-[#37B34A] mt-[20px]  mx-4 pl-6 pr-6 pt-1 pb-1 font-bold rounded-xl"
            >
                Зарегистрироваться
            </Link>
        </div>
    </form >
)
const SignupPage = () => {
    return (
        <div className="flex flex-col border-[3px] rounded-3xl px-14 pt-8 pb-4 border-[#424530] bg-white dark:bg-[#2C2C2C] dark:border-[#5b5b5b]">
            <div className="flex justify-center">
                <p className="border-[3px] py-2.5 px-8 text-3xl font-bold rounded-xl text-center border-[#37B34A] dark:text-white">
                    / π - Чат /
                </p>
            </div>
            {PersonalForm}

            <button className="mt-[45px] underline text-center text-[#37B34A] cursor-pointer">Войти</button>

        </div >

    )
}

export default SignupPage