import { FiUser } from "react-icons/fi";

export default function UsernameSidebar() {
    return (
        <div className="p-3 rounded-lg bg-bg-blocks flex flex-col gap-1">
            <div className="font-normal text-xs text-text-secondary-color flex items-center gap-1"><FiUser /> Исполнитель</div>
            <div className="font-[Play] font-bold text-xl">Субботин Андрей</div>
            <div className="font-normal text-sm text-text-secondary-color">a.subbotin@maksoft.ru</div>
        </div>
    );
}