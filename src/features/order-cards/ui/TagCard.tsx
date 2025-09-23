import { type TagProps } from "@/entities/types/orderPage/card";


export default function TagCard({id}: TagProps) {


    return (
        <div className="rounded-full text-text-color px-2 py-[3px] bg-bg-cards w-max text-xs border-2 border-bg-document font-display top-[-8px] left-[-8px] absolute">{id}</div>
    );


}