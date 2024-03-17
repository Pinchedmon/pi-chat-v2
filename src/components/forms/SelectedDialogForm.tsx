'use client'
import { useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import TextareaAutosize from 'react-textarea-autosize';


const SelectedDialogForm = (props: { id: string, onClose: () => void }) => {
    const { id, onClose } = props
    const router = useRouter()
    const mutate = useAppSelector((state) => state.selectedDialog.mutateDialogs)
    const onSubmit = async (e: any) => {
        e.preventDefault()
        await axios.delete(`/api/chat/deleteChat?id=${id}`).then(pr => {
            if (pr.status == 200) {
                mutate && mutate()
                onClose();
                router.push('/chat')
            }
        });

    };
    return (
        <form className='flex flex-col  bg-bg-content dark:bg-dark-bg-content'>
            <p className="text-center text-lg  font-bold mb-[12px]">
                Вы уверены, что хотите удалить диалог?
                <br />
                <span></span>Данные удаляться у вас и у вашего собеседника.
            </p>
            <div className='flex p-4 justify-between'>
                <button
                    onClick={(e) => onSubmit(e)}
                    className="flex self-center text-sm border-[2px] border-[red] mt-[20px]  px-6 font-bold rounded-xl"
                >
                    Да
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        onClose()
                    }}

                    className="flex self-center text-sm border-[2px] border-[#37B34A] mt-[20px]  px-6  font-bold rounded-xl"
                >
                    Нет
                </button>
            </div>
        </form>
    )
}

export default SelectedDialogForm