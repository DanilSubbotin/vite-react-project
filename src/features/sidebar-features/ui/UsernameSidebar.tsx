import { FiUser } from "react-icons/fi";

export default function UsernameSidebar() {
    return (
        <div className="p-3 rounded-lg bg-gray-200 flex flex-col gap-1">
            <div className="font-normal text-xs text-gray-400 flex items-center gap-1"><FiUser /> Исполнитель</div>
            <div className="font-[Play] font-bold text-xl">Субботин Андрей</div>
            <div className="font-normal text-sm text-gray-400">a.subbotin@maksoft.ru</div>
        </div>
    );
}