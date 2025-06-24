
import ReactCountryFlag from "react-country-flag";
import { Input } from "@/components/ui/input";

export default function CurrencySidebar() {
const InputStyle = "p-4 h-10 text-base";
const CurrencyStyle = "rounded-lg bg-gray-200 px-2 py-1 text-xs flex gap-1 items-center justify-center flex-1";

    return (
        <div className="font-display flex flex-col gap-3">
            <div className="flex flex-col">
                <h4 className="font-bold text-base">Цены в валютах</h4>
                <h6 className="font-normal text-xs text-gray-400">Добавьте к стоимости валюты свою наценку в рублях</h6>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <div className={CurrencyStyle}><ReactCountryFlag countryCode="CN" svg /> CNY: <p className="font-bold">14.76</p></div>
                    <div className={CurrencyStyle}><ReactCountryFlag countryCode="EU" svg /> EUR: <p className="font-bold">95.38</p></div>
                    <div className={CurrencyStyle}><ReactCountryFlag countryCode="US" svg /> USD: <p className="font-bold">83.06</p></div>
                </div>
                <div className="flex gap-3">
                    <Input className={InputStyle} placeholder="Наценка"/>
                    <Input className={InputStyle} placeholder="Наценка"/>
                    <Input className={InputStyle} placeholder="Наценка"/>
                </div>
            </div>
        </div>
    );
}