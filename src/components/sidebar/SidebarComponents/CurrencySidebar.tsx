
import ReactCountryFlag from "react-country-flag";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface CurrencyValues {
    CNY: number;
    EUR: number;
    USD: number;
}

export default function CurrencySidebar() {
    const InputStyle = "p-4 h-10 text-base";
    const CurrencyStyle = "rounded-lg bg-gray-200 px-2 py-1 text-xs flex gap-1 items-center justify-center flex-1";


    const initialRates: CurrencyValues = {
        CNY: 14.76,
        EUR: 95.38,
        USD: 83.06,
    };

    const [markup, setMarkup] = useState<CurrencyValues>({
        CNY: 0,
        EUR: 0,
        USD: 0,
    });

    const [displayPrices, setDisplayPrices] = useState<CurrencyValues>(initialRates);


    const currencyMarkupChangeHandler = (currency: keyof CurrencyValues, value: string) => {
        const numValue = value === '' ? 0 : parseFloat(value);
        setMarkup(prev => ({
            ...prev,
            [currency]: numValue,
        }));
    };

    useEffect(() => {
        setDisplayPrices({
            CNY: initialRates.CNY * (1 + markup.CNY / 100),
            EUR: initialRates.EUR * (1 + markup.EUR / 100),
            USD: initialRates.USD * (1 + markup.USD / 100),
        });
    }, [markup, initialRates]);

    return (
        <div className="font-display flex flex-col gap-3">
            <div className="flex flex-col">
                <h4 className="font-bold text-base">Цены в валютах</h4>
                <h6 className="font-normal text-xs text-gray-400">Добавьте к стоимости валюты свою наценку в рублях</h6>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <div className={CurrencyStyle}>
                        <ReactCountryFlag countryCode="CN" svg />
                        CNY: <p className="font-bold">{displayPrices.CNY.toFixed(2)}</p>
                    </div>
                    <div className={CurrencyStyle}>
                        <ReactCountryFlag countryCode="EU" svg />
                        EUR: <p className="font-bold">{displayPrices.EUR.toFixed(2)}</p>
                    </div>
                    <div className={CurrencyStyle}>
                        <ReactCountryFlag countryCode="US" svg />
                        USD: <p className="font-bold">{displayPrices.USD.toFixed(2)}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Input className={InputStyle} value={markup.CNY || ''} onChange={(e) => currencyMarkupChangeHandler('CNY', e.target.value)} placeholder="Наценка" />
                    <Input className={InputStyle} value={markup.EUR || ''} onChange={(e) => currencyMarkupChangeHandler('EUR', e.target.value)} placeholder="Наценка" />
                    <Input className={InputStyle} value={markup.USD || ''} onChange={(e) => currencyMarkupChangeHandler('USD', e.target.value)} placeholder="Наценка" />
                </div>
            </div>
        </div>
    );
}