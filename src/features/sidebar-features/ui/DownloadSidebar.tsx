import { Button } from "@/shared/ui/button";
import { GoFile } from "react-icons/go";

export default function DownloadSidebar() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col">
                <h4 className="font-bold text-base">Скачать файлы</h4>
                <h6 className="font-normal text-xs text-text-secondary-color">Выберите наиболее подходящий формат</h6>
            </div>
            <div className="flex justify-between">
                <Button variant="ghost" className="px-5 py-3 font-normal text-base"><GoFile className="text-text-secondary-color"/> 1C</Button>
                <Button variant="ghost" className="px-5 py-3 font-normal text-base"><GoFile className="text-text-secondary-color"/> Customer</Button>
                <Button variant="ghost" className="px-5 py-3 font-normal text-base"><GoFile className="text-text-secondary-color"/> Файл КР</Button>
            </div>
        </div>
    );
}