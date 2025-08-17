import { type DescriptionCardProps } from "@/entities/types/orderPage/card";


export default function DescriptionCard({ article, price, quantity}: DescriptionCardProps) {
    const totalPrice = price * quantity;
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <div className='bg-gray-200 px-2 py-1 rounded-lg w-max text-xs font-normal font-display'>{article}</div>
                <div className='bg-gray-200 px-2 py-1 rounded-lg w-max text-xs font-normal font-display'>{price} ₽</div>
                <div className='bg-gray-200 px-2 py-1 rounded-lg w-max text-xs font-normal font-display'>{quantity} шт</div>
            </div>
            <p className='font-[Play] font-bold text-xl'>{totalPrice.toLocaleString('ru-RU')}₽</p>
        </div>
    )
}