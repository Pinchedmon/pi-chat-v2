const GroupEdit = () => (
    <div className="absolute   right-[42px] top-0  pl-4  ">
        <div className="p-1 bg-white border-gray-text rounded-[20px]  border  dark:bg-dark-bg">

            <div className="flex p-2 text-[14px] gap-4 items-center">
                <svg className='fill-[red] dark:fill-[red]' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill="none">
                    <path d="M5.44072 15.3751C5.08195 15.3751 4.77552 15.2426 4.52144 14.9777C4.26734 14.7128 4.14029 14.3933 4.14029 14.0193V4.5001H3.4209V3.37512H6.65813V2.71167H10.9745V3.37512H14.2117V4.5001H13.4923V14.0193C13.4923 14.3982 13.3664 14.7188 13.1146 14.9813C12.8628 15.2438 12.5552 15.3751 12.1919 15.3751H5.44072ZM12.4132 4.5001H5.21935V14.0193C5.21935 14.0866 5.2401 14.1419 5.28161 14.1852C5.32312 14.2285 5.37616 14.2501 5.44072 14.2501H12.1919C12.2472 14.2501 12.2979 14.2261 12.3441 14.178C12.3902 14.1299 12.4132 14.077 12.4132 14.0193V4.5001ZM6.94867 12.7501H8.02773V6.0001H6.94867V12.7501ZM9.60485 12.7501H10.6839V6.0001H9.60485V12.7501Z" />
                </svg>
                <button className="text-[red]">Отписаться</button>
            </div>
            <div className="flex p-2 text-[14px] gap-4 items-center">
                <svg className='fill-[black] dark:fill-[white]' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill="none">
                    <path d="M9.44709 8.73149C9.76633 8.38438 10.0024 7.98582 10.1553 7.53584C10.3081 7.08584 10.3846 6.6219 10.3846 6.14402C10.3846 5.66615 10.3081 5.20221 10.1553 4.75221C10.0024 4.30221 9.76633 3.90366 9.44709 3.55654C10.1057 3.63251 10.6526 3.91688 11.0877 4.40967C11.5228 4.90244 11.7403 5.48056 11.7403 6.14402C11.7403 6.80747 11.5228 7.38559 11.0877 7.87838C10.6526 8.37117 10.1057 8.65554 9.44709 8.73149ZM13.3846 14.4805V12.7209C13.3846 12.3121 13.3014 11.9231 13.1351 11.5539C12.9687 11.1848 12.7327 10.8681 12.4269 10.6036C13.0019 10.795 13.5312 11.0532 14.0149 11.3782C14.4985 11.7031 14.7403 12.1507 14.7403 12.7209V14.4805H13.3846ZM14.7403 9.56226V8.06226H13.2403V6.9373H14.7403V5.4373H15.8653V6.9373H17.3653V8.06226H15.8653V9.56226H14.7403ZM6.25961 8.76899C5.53774 8.76899 4.91978 8.51196 4.40572 7.99791C3.89167 7.48385 3.63464 6.86589 3.63464 6.14402C3.63464 5.42215 3.89167 4.80419 4.40572 4.29014C4.91978 3.77607 5.53774 3.51904 6.25961 3.51904C6.98148 3.51904 7.59944 3.77607 8.11349 4.29014C8.62756 4.80419 8.88459 5.42215 8.88459 6.14402C8.88459 6.86589 8.62756 7.48385 8.11349 7.99791C7.59944 8.51196 6.98148 8.76899 6.25961 8.76899ZM0.634644 14.4805V12.8132C0.634644 12.4459 0.7344 12.1058 0.933912 11.7928C1.13344 11.4798 1.40002 11.2392 1.73367 11.0709C2.47501 10.7075 3.22284 10.4349 3.97717 10.2532C4.73149 10.0714 5.49231 9.98057 6.25961 9.98057C7.02691 9.98057 7.78772 10.0714 8.54204 10.2532C9.29637 10.4349 10.0442 10.7075 10.7856 11.0709C11.1192 11.2392 11.3858 11.4798 11.5853 11.7928C11.7848 12.1058 11.8846 12.4459 11.8846 12.8132V14.4805H0.634644ZM6.25961 7.64402C6.67211 7.64402 7.02523 7.49715 7.31898 7.2034C7.61273 6.90965 7.75961 6.55652 7.75961 6.14402C7.75961 5.73152 7.61273 5.3784 7.31898 5.08465C7.02523 4.7909 6.67211 4.64402 6.25961 4.64402C5.84711 4.64402 5.49398 4.7909 5.20023 5.08465C4.90648 5.3784 4.75961 5.73152 4.75961 6.14402C4.75961 6.55652 4.90648 6.90965 5.20023 7.2034C5.49398 7.49715 5.84711 7.64402 6.25961 7.64402ZM1.75961 13.3555H10.7596V12.8132C10.7596 12.6613 10.7156 12.5207 10.6276 12.3914C10.5397 12.262 10.4202 12.1565 10.2692 12.0748C9.62307 11.7565 8.96421 11.5154 8.29263 11.3514C7.62107 11.1875 6.94339 11.1055 6.25961 11.1055C5.57583 11.1055 4.89816 11.1875 4.22658 11.3514C3.55502 11.5154 2.89616 11.7565 2.24999 12.0748C2.09903 12.1565 1.97956 12.262 1.89159 12.3914C1.8036 12.5207 1.75961 12.6613 1.75961 12.8132V13.3555Z" />
                </svg>
                <button className="">Подписаться</button>
            </div>
        </div>
    </div >
)
export default GroupEdit;