import { type OrderSidebarProps } from "@/entities/types/orderPage/sidebar";

export function OrderSidebar({ allPrice, priceWithMarkup }: OrderSidebarProps) {

    return (
        <div className="flex flex-col gap-3">
            <h3 className="font-[Play] font-bold text-xl">Стоимость заказа</h3>
            <div className="flex gap-3">
                <div className="p-3 bg-bg-blocks rounded-lg flex flex-col gap-[2px] w-full">
                    <h6 className="font-normal text-xs text-text-secondary-color font-display">Общая цена от поставщика</h6>
                    <h3 className="font-[Play] font-bold text-xl">{allPrice.toLocaleString('ru-RU')}₽</h3>
                </div>
                <div className="p-3 bg-bg-price-currency rounded-lg flex flex-col gap-[2px] w-full">
                    <h6 className="font-normal text-xs font-display text-text-color-currency">Общая цена с наценкой</h6>
                    <h3 className="font-[Play] font-bold text-xl text-text-color-currency">{priceWithMarkup.toLocaleString('ru-RU')}₽</h3>
                </div>
            </div>
        </div>
    );
}