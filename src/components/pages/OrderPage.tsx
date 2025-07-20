import { MockCardsData } from "../card/mockData";
import Cards, { type CardItem } from "../card/Сards";
import { Sidebar } from "../sidebar/Sidebar";
import { Button } from "../ui/button";
import { GoChevronLeft } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollProductsProps {
    MockCardsData: CardItem[];
}

const ITEMS_PER_LOAD = 4;

export const InfiniteScrollItems = ({ MockCardsData }: InfiniteScrollProductsProps) => {
    const [items, setItems] = useState<CardItem[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);


    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });


    const LoadMoreItems = useCallback(() => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);


        setTimeout(() => {
            const nextItems = MockCardsData.slice(
                loadedCount,
                loadedCount + ITEMS_PER_LOAD
            );

            setItems(prev => [...prev, ...nextItems]);
            const newLoadedCount = loadedCount + nextItems.length;
            setLoadedCount(newLoadedCount);
            setHasMore(newLoadedCount < MockCardsData.length);
            setIsLoading(false);
        }, 500);
    }, [MockCardsData, loadedCount, hasMore, isLoading]);


    useEffect(() => {
        if (items.length === 0) {
            LoadMoreItems();
        }
    }, []);


    useEffect(() => {
        if (inView && !isLoading && hasMore) {
            LoadMoreItems();
        }
    }, [inView, isLoading, hasMore, LoadMoreItems]);


    return (
        <div className='flex flex-col items-center'>
            <div className='min-w-319 flex justify-between'>
                <div>
                    <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center"><GoChevronLeft /> Назад</Button>
                    <div className='flex gap-3 items-baseline'>
                        <h2 className='font-[Play] font-bold text-2xl'>Заказ на Пролетарская 89Ф</h2>
                        <p className='font-normal text-xs text-gray-400'>1247 товаров</p>
                    </div>
                </div>
            </div>
            <div className='w-319 flex justify-end'>
                <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center"><FaRegEdit className='text-gray-500' /> Редактировать заказ</Button>
            </div>
            <div className='flex justify-center gap-5'>
                <div className="grid grid-cols-[repeat(2,22vw)] gap-5">
                    {items.map((item, index) => (
                        <Cards key={`${item.id}-${index}`} item={item} />
                    ))}

                    <div ref={ref}>
                        {isLoading && <div>Загрузка...</div>}
                        {!hasMore && <div>Все товары загружены.</div>}
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}