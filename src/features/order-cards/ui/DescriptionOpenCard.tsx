import { type DescriptionCardProps } from "@/entities/types/orderPage/card";


export default function DescriptionOpenCard({ article, price, quantity}: DescriptionCardProps) {
    const blockDescription = 'flex gap-2 items-baseline justify-between';
    const totalPrice = price * quantity;
    return (
        <div className="w-full flex flex-col gap-2">
            <div className={blockDescription}>
                <p className="font-normal text-sm text-text-secondary-color font-display">Артикул</p>
                <div className="border-bg-blocks w-full border h-px"></div>
                <div className="font-display font-normal text-sm text-text-color whitespace-nowrap">{article}</div>
            </div>
            <div className={blockDescription}>
                <p className="font-normal text-sm text-text-secondary-color font-display">Описание</p>
                <div className="border-bg-blocks w-full border h-px"></div>
                <div className="font-display font-normal text-sm text-text-color inline-block">800*250*380</div>
            </div>
            <div className={blockDescription}>
                <p className="font-normal text-sm text-text-secondary-color font-display">Стоимость</p>
                <div className="border-bg-blocks w-full border h-px"></div>
                <div className="font-display font-normal text-sm text-text-color inline-block">{price}&nbsp;₽</div>
            </div>
            <div className={blockDescription}>
                <p className="font-normal text-sm text-text-secondary-color font-display">Количество</p>
                <div className="border-bg-blocks w-full border h-px"></div>
                <div className="font-display font-normal text-sm text-text-color inline-block">{quantity}&nbsp;шт</div>
            </div>
            <div className={blockDescription}>
                <p className="font-bold text-base text-text-color font-display inline-block">Итого</p>
                <div className="border-bg-blocks w-full border h-px"></div>
                <div className="font-display font-bold text-base text-text-color inline-block">{totalPrice.toLocaleString('ru-RU')}₽</div>
            </div>
        </div>
    )
}