import Post from "@/components/Post";
import { fetcher } from "@/lib/fetcher";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { group } from "@/utils/types/group";
import Group from "./Group";
export interface PostsWall {
    id: number | string;
}

const GroupWall = (props: PostsWall) => {
    // const filter = useSearchParams().get('filter')
    const { data, error } = useSWR(`/api/groups`, fetcher);
    if (error) {
        return <div>Error loading posts!</div>;
    }
    if (!data) {
        return <div>Loading groups...</div>;
    }

    return (
        <div className="columns md:w-4/5">
            {data.groups && data.groups.map((group: group) => (
                <Group key={group.id} group={group} userId={props.id} />
            ))}
            {!data.groups || data?.groups?.length == 0 && <p className="text-center mt-[22px]">Нет постов</p>}
        </div>
    );

}

export default GroupWall