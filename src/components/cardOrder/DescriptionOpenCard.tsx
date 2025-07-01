export default function DescriptionOpenCard() {
    const blockDescription = 'flex gap-2 items-baseline justify-between';
    return (
        <div className="w-full flex flex-col gap-2">
            <div className={blockDescription}>
                <p className="font-normal text-sm text-gray-400 font-display">Артикул</p>
                <div className="border-gray-200 w-full border h-px"></div>
                <div className="font-display font-normal text-sm text-[#2C2C2C] inline-block">3.4.9.</div>
            </div>
            <div className={blockDescription}>
                <p className="font-normal text-sm text-gray-400 font-display">Описание</p>
                <div className="border-gray-200 w-full border h-px"></div>
                <div className="font-display font-normal text-sm text-[#2C2C2C] inline-block">800*250*380</div>
            </div>
            <div className={blockDescription}>
                <p className="font-normal text-sm text-gray-400 font-display">Стоимость</p>
                <div className="border-gray-200 w-full border h-px"></div>
                <div className="font-display font-normal text-sm text-[#2C2C2C] inline-block">21&nbsp;000₽</div>
            </div>
            <div className={blockDescription}>
                <p className="font-normal text-sm text-gray-400 font-display">Количество</p>
                <div className="border-gray-200 w-full border h-px"></div>
                <div className="font-display font-normal text-sm text-[#2C2C2C] inline-block">2&nbsp;шт</div>
            </div>
            <div className={blockDescription}>
                <p className="font-bold text-base text-[#2C2C2C] font-display inline-block">Итого&nbsp;(с&nbsp;наценкой)</p>
                <div className="border-gray-200 w-full border h-px"></div>
                <div className="font-display font-bold text-base text-[#2C2C2C] inline-block">46&nbsp;400₽</div>
            </div>
        </div>
    )
}