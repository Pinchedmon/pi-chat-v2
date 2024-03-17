'use client'

import { EditOption } from "@/utils/types/editButton";
import { useState } from "react";
import CommentEdit from "./Edits/CommentEdit";
import MyProfileEdit from "./Edits/MyProfileEdit";
import ProfileEdit from "./Edits/ProfileEdit";
import DialogEdit from "./Edits/DialogEdit";
import PostEdit from "./Edits/PostEdit";
import GroupEdit from "./Edits/GroupEdit";
import FriendEdit from "./Edits/FriendEdit";
import Modal from "@/components/ui/Modal";
import useModal from "@/hooks/useModal";
import MyGroupEdit from "./Edits/MyGroupEdit";

interface svgProps {
    option?: EditOption;
    widthIcon: number;
    widthButton: number;
    fill: string;
    openModal?: () => void;
    id?: number;
    data?: any;
}

const EditButton = (props: svgProps) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const { option, widthIcon, widthButton, fill, openModal, id, data } = props
    return (
        <section onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} className={`z-10 relative w-[${widthButton}px] h-[${widthButton}px]`}>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={`mx-2 flex justify-center items-center w-[${widthButton}px] h-[${widthButton}px] rounded-[20px]  outline-gray-text  bg-bg-content dark:bg-dark-bg-content`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={widthIcon} height={widthIcon} viewBox={`0 0 ${widthIcon} ${widthIcon}`} fill="none">
                    <path d="M13.0002 21.6666C12.4043 21.6666 11.8943 21.4544 11.47 21.0301C11.0456 20.6058 10.8335 20.0958 10.8335 19.4999C10.8335 18.9041 11.0456 18.394 11.47 17.9697C11.8943 17.5454 12.4043 17.3333 13.0002 17.3333C13.596 17.3333 14.1061 17.5454 14.5304 17.9697C14.9547 18.394 15.1668 18.9041 15.1668 19.4999C15.1668 20.0958 14.9547 20.6058 14.5304 21.0301C14.1061 21.4544 13.596 21.6666 13.0002 21.6666ZM13.0002 15.1666C12.4043 15.1666 11.8943 14.9544 11.47 14.5301C11.0456 14.1058 10.8335 13.5958 10.8335 12.9999C10.8335 12.4041 11.0456 11.894 11.47 11.4697C11.8943 11.0454 12.4043 10.8333 13.0002 10.8333C13.596 10.8333 14.1061 11.0454 14.5304 11.4697C14.9547 11.894 15.1668 12.4041 15.1668 12.9999C15.1668 13.5958 14.9547 14.1058 14.5304 14.5301C14.1061 14.9544 13.596 15.1666 13.0002 15.1666ZM13.0002 8.66659C12.4043 8.66659 11.8943 8.45443 11.47 8.03013C11.0456 7.60582 10.8335 7.09575 10.8335 6.49992C10.8335 5.90409 11.0456 5.39402 11.47 4.96971C11.8943 4.5454 12.4043 4.33325 13.0002 4.33325C13.596 4.33325 14.1061 4.5454 14.5304 4.96971C14.9547 5.39402 15.1668 5.90409 15.1668 6.49992C15.1668 7.09575 14.9547 7.60582 14.5304 8.03013C14.1061 8.45443 13.596 8.66659 13.0002 8.66659Z" fill={fill} />
                </svg>
            </div>
            {isHovering &&
                <>
                    {option === EditOption.POST && <PostEdit id={id} data={data} />}
                    {option === EditOption.PROFILE && <ProfileEdit openModal={openModal as () => void} />}
                    {option === EditOption.MYPROFILE && <MyProfileEdit openModal={openModal as () => void} />}
                    {option === EditOption.COMMENT && <CommentEdit id={id} data={data} />}
                    {option === EditOption.DIALOG && <DialogEdit openModal={openModal as () => void} />}
                    {option === EditOption.FRIEND && <FriendEdit data={data} />}
                    {option === EditOption.GROUP && <GroupEdit />}
                    {option === EditOption.MYGROUP && <MyGroupEdit openModal={openModal as () => void} />}

                </>
            }
        </section>
    )
}

export default EditButton