'use client'

import React, { useState } from 'react'
import Follow from './Follow'
import { fetcher } from '@/lib/fetcher'
import { useSession } from 'next-auth/react'
import { follow } from "@/utils/types/follow";
import useSWRInfinite from 'swr/infinite'

export interface FollowsWall {
    allStatus: boolean;
    search: string;
}

const FollowWall = (props: FollowsWall) => {
    const [page, setPage] = useState(1);
    const session = useSession()
    const userId = session.data?.user.id

    const getKey = (pageIndex: number) => {
        const baseUrl = `/api/follows`;
        const queryParams = new URLSearchParams();

        if (props.search) {
            queryParams.append('search', props.search);
        }

        queryParams.append('id', userId as string);
        queryParams.append('page', String(pageIndex + page));

        return `${baseUrl}?${queryParams.toString()}`;
    };

    const { data, error, isLoading, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    if (error) return <div>ошибка загрузки</div>

    if (isLoading) return <div>загрузка...</div>
    if (!data || !userId) {
        return <div>Loading groups...</div>;
    }

    const follows = data.flatMap(response => response.follows);

    return (
        <div className="columns md:w-4/5">
            {follows[0] && follows.map((follow: follow) => (
                <Follow key={follow.id} props={
                    follow
                } />
            ))}
            {!follows[0] && <p className="text-center mt-[22px]">Нет постов</p>}
        </div >
    )
}

export default FollowWall