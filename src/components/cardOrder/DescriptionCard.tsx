

interface DescriptionCardProps {
    details: {
        article: string,
        price: number,
        quantity: number,
    };
    totalPrice: number;
}


export default function DescriptionCard({details, totalPrice}: DescriptionCardProps) { 

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <div className='bg-gray-200 px-2 py-1 rounded-lg w-max text-xs font-normal font-display'>{details.article}</div>
                <div className='bg-gray-200 px-2 py-1 rounded-lg w-max text-xs font-normal font-display'>{details.price} ₽</div>
                <div className='bg-gray-200 px-2 py-1 rounded-lg w-max text-xs font-normal font-display'>{details.quantity} шт</div>
            </div>
            <p className='font-[Play] font-bold text-xl'>{totalPrice.toLocaleString('ru-RU')}₽</p>
        </div>
    )
}