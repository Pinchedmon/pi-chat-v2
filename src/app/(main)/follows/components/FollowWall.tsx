'use client'

import React from 'react'
import Follow from './Follow'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { useSession } from 'next-auth/react'
import { follow } from "@/utils/types/follow";

const FollowWall = () => {
    const session = useSession()
    const { data, isLoading, error } = useSWR(`/api/follows?id=${session.data?.user.id}`, fetcher)

    if (error) return <div>ошибка загрузки</div>

    if (isLoading) return <div>загрузка...</div>
    console.log(data)
    return (
        <div className="columns md:w-4/5">
            {data.friends && data.friends.map((follow: follow) => (
                <Follow key={follow.id} props={
                    follow
                } />
            ))}
            {!data.friends || data?.friends?.length == 0 && <p className="text-center mt-[22px]">Нет постов</p>}
        </div>
    )
}

export default FollowWall