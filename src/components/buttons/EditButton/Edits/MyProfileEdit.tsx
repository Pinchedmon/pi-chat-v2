const myProfileEdit = (props: { openModal: () => void }) => (
    <div className="absolute   top-0  left-[-200px] md:left-[42px] pl-4 ">
        <div className="p-1 bg-white border-gray-text rounded-[20px] border dark:bg-dark-bg">
            <button className="flex p-2 gap-4 text-[14px] items-center" onClick={props.openModal}>
                <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill="none">
                    <path d="M3.74998 14.25H4.69612L12.3736 6.57255L11.4274 5.62641L3.74998 13.3038V14.25ZM2.625 15.375V12.8365L12.5178 2.94808C12.6312 2.84507 12.7564 2.76547 12.8935 2.70928C13.0305 2.65309 13.1742 2.625 13.3246 2.625C13.475 2.625 13.6206 2.65169 13.7616 2.70506C13.9026 2.75843 14.0274 2.84328 14.136 2.95961L15.0519 3.88701C15.1682 3.99566 15.2512 4.12068 15.3007 4.26208C15.3502 4.40347 15.375 4.54486 15.375 4.68624C15.375 4.83706 15.3492 4.98098 15.2977 5.11802C15.2462 5.25507 15.1643 5.3803 15.0519 5.49371L5.16343 15.375H2.625ZM11.8922 6.10778L11.4274 5.62641L12.3736 6.57255L11.8922 6.10778Z" />
                </svg>
                <p> Изменить </p>
            </button>
        </div>
    </div >
)
export default myProfileEdit