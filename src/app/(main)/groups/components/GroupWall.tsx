import Post from "@/components/Post";
import { fetcher } from "@/lib/fetcher";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { group } from "@/utils/types/group";
import Group from "./Group";
import { useEffect, useState } from "react";
import useSWRInfinite from 'swr/infinite'
export interface PostsWall {
    id: string;
    allStatus: boolean;
    search: string;
}

interface GroupResponse {
    groups: group[];
    totalPages: number;
}

const GroupWall = (props: PostsWall) => {
    const [page, setPage] = useState(1);
    const getKey = (pageIndex: number) => {
        const baseUrl = '/api/groups';
        const queryParams = new URLSearchParams();

        if (!props.allStatus) {
            queryParams.append('userId', props.id);
        }

        if (props.search) {
            queryParams.append('search', props.search);
        }

        queryParams.append('page', String(pageIndex + page));

        return `${baseUrl}?${queryParams.toString()}`;
    };
    const { data, error, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });



    if (error) {
        return <div>Error loading posts!</div>;
    }
    if (!data) {
        return <div>Loading groups...</div>;
    }

    const groups = data.flatMap(response => response.groups);


    return (
        <div className="columns md:w-4/5 pb-[60px]">
            {groups.map((group: group) => (
                <Group key={group.id} group={group} userId={props.id} />
            ))}
            {!groups || groups.length == 0 && <p className="text-center mt-[22px]">Нет постов</p>}
            <button onClick={() => {
                setPage(page + 1);
                setSize(size + 1)
                mutate()
            }}>Next Page</button>
            {page > 1 &&
                <button onClick={() => {
                    setPage(page - 1);
                    setSize(size - 1)
                    mutate()
                }}>Previous Page</button>
            }
        </div>
    );

}

export default GroupWall