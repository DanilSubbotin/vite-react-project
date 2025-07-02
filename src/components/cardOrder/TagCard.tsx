
interface TagProps{
    id: number;
}


export default function TagCard({id}: TagProps) {


    return (
        <div className="rounded-full text-gray-600 px-2 py-[3px] bg-gray-100 w-max text-xs border-2 border-white font-display top-[-8px] left-[-8px] absolute">{id}</div>
    );


}