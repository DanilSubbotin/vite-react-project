import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NacenkaSidebar() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h4 className="font-bold text-base">Наценка</h4>
                    <h6 className="font-normal text-xs text-gray-400">Укажите наценку на весь прайс-лист</h6>
                </div>
                <div className="flex flex-col items-end">
                    <h6 className="font-normal text-xs text-gray-400">Новая цена</h6>
                    <h4 className="font-bold text-base">18 540 432 ₽</h4>
                </div>
            </div>
            <Input placeholder="Наценка"/>
            <div className="flex gap-3">
                <Button className="bg-[#0077FF] px-5 py-3 rounded-2xl font-display font-normal text-base flex-1">Сохранить</Button>
                <Button variant="ghost" className="px-5 py-3 rounded-2xl font-display font-normal text-base flex-1">Рассчитать цену</Button>
            </div>
        </div>
    );
}