
import Cards, { type CardItem } from "../card/Сards";
import { Sidebar } from "../sidebar/Sidebar";
import { Button } from "../ui/button";
import { GoChevronLeft } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";


interface ApiResponse {
    products: CardItem[];
    totalProducts: number;
    hasMore: boolean;
}

const ITEMS_PER_LOAD = 4;


export const OrderPage = () => {
    const [items, setItems] = useState<CardItem[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [totalProducts, setTotalProducts] = useState(0);
    const pageRef = useRef(1);
    const loadingRef = useRef(false);

    const allPrice = items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);


    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });


    const LoadMoreItems = useCallback(async () => {
        if (loadingRef.current || !hasMore) return;

        loadingRef.current = true;
        setIsLoading(true);

        try {
            const response = await axios.get<ApiResponse>("https://mocki.io/v1/2814c68f-eab9-4131-897a-91c407cecdc8", {
                params: {
                    page: pageRef.current,
                    limit: ITEMS_PER_LOAD,
                }
            });
            setItems(prev => [...prev, ...response.data.products])
            setTotalProducts(response.data.totalProducts);
            setHasMore(response.data.hasMore);
            pageRef.current += 1;


        } catch (error) {
            console.error("Возникла ошибка:", error);
        } finally {
            setIsLoading(false);
        }
    }, [hasMore]);


    useEffect(() => {
        if (items.length === 1) {
            LoadMoreItems();
        }
    }, []);


    useEffect(() => {
        if (inView && !loadingRef.current && hasMore) {
            LoadMoreItems();
        }
    }, [inView, hasMore, LoadMoreItems]);


    return (
        <div className='flex flex-col items-center'>
            <div className='min-w-319 flex justify-between'>
                <div>
                    <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center"><GoChevronLeft /> Назад</Button>
                    <div className='flex gap-3 items-baseline'>
                        <h2 className='font-[Play] font-bold text-2xl'>Заказ на Пролетарская 89Ф</h2>
                        <p className='font-normal text-xs text-gray-400'>{totalProducts} товаров</p>
                    </div>
                </div>
            </div>
            <div className='w-319 flex justify-end'>
                <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center"><FaRegEdit className='text-gray-500' /> Редактировать заказ</Button>
            </div>
            <div className='flex justify-center gap-5'>
                <div className="grid grid-cols-[repeat(2,22vw)] gap-5 items-start">
                    {items.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}

                    <div ref={ref}>
                        {isLoading && <div>Загрузка...</div>}
                        {!hasMore && items.length > 0 && <div>Все товары загружены.</div>}
                    </div>
                </div>
                <Sidebar allPrice = {allPrice}/>
            </div>
        </div>
    );
}

