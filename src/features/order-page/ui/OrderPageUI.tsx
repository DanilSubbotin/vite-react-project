import Cards from '@/features/order-cards/ui/Сard';
import { Sidebar } from '@/widgets/sidebar/Sidebar';
import { Button } from '@/shared/ui/button';
import { GoChevronLeft } from 'react-icons/go';
import { FaRegEdit } from 'react-icons/fa';
import type { CardItem, OtherDataProps } from '@/app/api/orders';



interface orderPageUIProps {
    items: CardItem[];
    otherData?: OtherDataProps;
    isLoading: boolean;
    hasMore: boolean;
    lastProductRef: (node: HTMLDivElement | null) => void;
}


export const OrderPageUI = ({
    items,
    otherData,
    lastProductRef,
    isLoading,
    hasMore,
}: orderPageUIProps) => {
    return (
        <div className="flex flex-col items-center bg-bg-document">
            <div className="min-w-319 flex justify-between">
                <div>
                    <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center">
                        <GoChevronLeft /> Назад
                    </Button>
                    <div className="flex gap-3 items-baseline">
                        <h2 className="font-[Play] font-bold text-2xl">{otherData?.title}</h2>
                        <p className="font-normal text-xs text-text-secondary-color">{otherData?.totalProducts} товаров</p>
                    </div>
                </div>
            </div>
            <div className="w-319 flex justify-end">
                <Button variant="ghost" className="text-text-secondary-color px-5 py-3 font-normal text-base flex gap-[10px] items-center">
                    <FaRegEdit className="text-text-secondary-color" /> Редактировать заказ
                </Button>
            </div>
            <div className="flex justify-center gap-5">
                <div className="grid grid-cols-[repeat(2,22vw)] gap-5 items-start">
                    {items.map((item, index) => (
                        <div key={item.id} ref={index === items.length - 1 ? lastProductRef : null}>
                            <Cards item={item} />
                        </div>
                    ))}
                    {isLoading && <div>Загрузка...</div>}
                    {!hasMore && items.length > 0 && <div>Все товары загружены.</div>}
                </div>
                <Sidebar allPrice={otherData?.allPrice ?? 0} />
            </div>
        </div>
    );
};