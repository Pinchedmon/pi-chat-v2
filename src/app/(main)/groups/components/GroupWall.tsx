import { fetcher } from "@/lib/fetcher";
import { group } from "@/utils/types/group";
import Group from "./Group";
import { useEffect, useState } from "react";
import useSWRInfinite from 'swr/infinite'
import { useAppDispatch } from "@/lib/hooks";
import { groupsWallSlice } from "@/lib/features/groups/GroupsWallSlice";
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
    const dispatch = useAppDispatch();
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
        console.log(`${baseUrl}?${queryParams.toString()}`)
        return `${baseUrl}?${queryParams.toString()}`;
    };
    const { data, error, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });


    dispatch(groupsWallSlice.actions.setMutate(mutate))
    useEffect(() => {
        mutate();
    }, [])
    useEffect(() => {
        setPage(1)
    }, [props.allStatus])

    if (error) {
        return <div>Error loading posts!</div>;
    }
    if (!data) {
        return <div>Loading groups...</div>;
    }

    const groups = data.flatMap(response => response.groups);

    return (
        <div className="columns md:w-4/5 pb-[100px]">
            {groups.map((group: group) => (
                <Group key={group.id} group={group} userId={props.id} />
            ))}
            {!groups || groups.length == 0 && <p className="text-center mt-[22px]">Нет постов</p>}
            {groups.length == 10 && <button
                className="border border-green rounded-xl p-2"
                onClick={() => {
                    setPage(page + 1);
                    setSize(page)
                    mutate()
                }}>Следующая стр.</button>
            }
            {page > 1 &&
                <button
                    className="border border-green rounded-xl p-2"
                    onClick={() => {
                        setPage(page - 1);
                        setSize(page)
                        mutate()
                    }}>Предущая стр.</button>
            }
        </div>
    );

}

export default GroupWall