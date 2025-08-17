import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import React, { useState } from "react";
import { Alert, AlertTitle } from "@/shared/ui/alert";
import { MdErrorOutline } from "react-icons/md";
import axios from "axios";
import { FaRegCheckCircle } from "react-icons/fa";
import { type OrderSidebarProps, type PriceUpdateData } from "@/entities/types/orderPage/sidebar";


export function NacenkaSidebar({ allPrice, onPriceUpdate }: OrderSidebarProps) {
    const [markupPercentage, setMarkupPercentage] = useState<number | ''>('');
    const [newPrice, setNewPrice] = useState<number>(allPrice);
    const [error, setError] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateInput = (value: string): boolean => {
        const num = parseFloat(value);
        if (value === '') {
            setError(null);
            return true;
        }
        if (num < 0) {
            setError("Наценка не может быть отрицательной")
            return false;
        }
        if (num > 1000) {
            setError("Максимальная наценка - 1000%");
            return false;
        }
        setError(null);
        return true;
    };

    const calculateNewPrice = () => {
        if (error) return;
        const percentage = markupPercentage === '' ? 0 : markupPercentage;
        const markupFactor = 1 + percentage / 100;
        const calculatedPrice = allPrice * markupFactor;
        setNewPrice(calculatedPrice);
    };

    const handleMarkupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (validateInput(value)) {
            setMarkupPercentage(value === '' ? '' : parseFloat(value));
        }
    };


    const handleSave = async () => {
        if (error) return;

        try {
            setIsSaving(true);
            const updatedPrice = newPrice;
            onPriceUpdate(updatedPrice);

            const updatedData: PriceUpdateData = {
                priceWithMarkup: newPrice,
                markupPercentage: markupPercentage === '' ? 0 : markupPercentage,
                updatedAt: new Date().toISOString(),
            }

            await axios.put("https://688410ce745306380a377d87.mockapi.io/otherData/1", updatedData);

            setSuccessMessage('Данные успешно обновлены!');
            setTimeout(() => setSuccessMessage(''), 2000);

        } catch (err) {
            console.log("Данные не отправлены:", err);
            setError("Не удалось сохранить цену");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h4 className="font-bold text-base">Наценка</h4>
                    <h6 className="font-normal text-xs text-gray-400">Укажите наценку на весь прайс-лист</h6>
                </div>
                <div className="flex flex-col items-end">
                    <h6 className="font-normal text-xs text-gray-400">Новая цена</h6>
                    <h4 className="font-bold text-base">{newPrice.toLocaleString('ru-RU')}₽</h4>
                </div>
            </div>
            <Input type="number" value={markupPercentage} onChange={handleMarkupChange} placeholder="Введите наценку (в %)" />
            {error && <Alert variant='destructive'>
                <MdErrorOutline />
                <AlertTitle>{error}</AlertTitle>
            </Alert>}
            {successMessage && <Alert variant='default'>
                <FaRegCheckCircle/>
                <AlertTitle>{successMessage}</AlertTitle>
            </Alert>}
            <div className="flex gap-3">
                <Button onClick={handleSave} disabled={!!error || isSaving} className="bg-[#0077FF] px-5 py-3 rounded-2xl font-display font-normal text-base flex-1">{isSaving ? 'Сохранение...' : 'Сохранить'}</Button>
                <Button variant="ghost" onClick={calculateNewPrice} disabled={!!error} className="px-5 py-3 rounded-2xl font-display font-normal text-base flex-1">Рассчитать цену</Button>
            </div>
        </div>
    );
}