import { ReactNode, useState } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode
}
const Modal = ({ isOpen, onClose, children }: Props) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed z-[100] inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom  bg-bg-content dark:bg-dark-bg-content rounded-[20px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[300px] ">
                    <button onClick={onClose} type="button" className="right-3 top-3 absolute inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-green text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-auto sm:text-sm">
                        X
                    </button>
                    <div className="p-6 pb-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;