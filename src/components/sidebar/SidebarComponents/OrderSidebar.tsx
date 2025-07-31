
interface OrderSidebarProps {
    allPrice: number;
    priceWithMarkup: number;
}

export function OrderSidebar({ allPrice, priceWithMarkup }: OrderSidebarProps) {

    return (
        <div className="flex flex-col gap-3">
            <h3 className="font-[Play] font-bold text-xl">Стоимость заказа</h3>
            <div className="flex gap-3">
                <div className="p-3 bg-gray-200 rounded-lg flex flex-col gap-[2px] w-full">
                    <h6 className="font-normal text-xs text-gray-400 font-display">Общая цена от поставщика</h6>
                    <h3 className="font-[Play] font-bold text-xl">{allPrice.toLocaleString('ru-RU')}₽</h3>
                </div>
                <div className="p-3 bg-[#E6F9EE] rounded-lg flex flex-col gap-[2px] w-full">
                    <h6 className="font-normal text-xs font-display text-[#2F6850]">Общая цена с наценкой</h6>
                    <h3 className="font-[Play] font-bold text-xl text-[#2F6850]">{priceWithMarkup.toLocaleString('ru-RU')}₽</h3>
                </div>
            </div>
        </div>
    );
}