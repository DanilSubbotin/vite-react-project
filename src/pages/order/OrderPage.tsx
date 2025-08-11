import Cards, { type CardItem } from "@/features/order-cards/ui/Сard";
import { Sidebar } from "@/widgets/sidebar/Sidebar";
import { Button } from "@/shared/ui/button";
import { GoChevronLeft } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

interface OtherDataProps {
    title: string;
    totalProducts: string;
    allPrice: number;
}

export const OrderPage = () => {
    const [items, setItems] = useState<CardItem[]>([]);
    const [otherData, setOtherData] = useState<OtherDataProps>();
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const pageRef = useRef(1);
    const loadingRef = useRef(false);
    const limit = 4;

    const [lastProductRef, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
        initialInView: true,
    });


    useEffect(() => {
        const fetchItems = async () => {
            if (isLoading || !hasMore || loadingRef.current) return;

            loadingRef.current = true;
            setIsLoading(true);
            try {
                const productsResponse = await axios.get("https://688410ce745306380a377d87.mockapi.io/products", {
                    params: {
                        page: pageRef.current,
                        limit,
                    },
                });
                const otherDataResponse = await axios.get("https://mocki.io/v1/773a1c86-8246-4f64-9634-01478fbf62f8");

                const newItems: CardItem[] = productsResponse.data;
                const otherData: OtherDataProps = otherDataResponse.data;

                setItems(prev => [...prev, ...newItems]);
                setOtherData(otherData);
                setHasMore(newItems.length === limit);
                if (newItems.length === limit) {
                    pageRef.current += 1;
                }
            } catch (error) {
                console.error('Ошибка загрузки товаров:', error);
            } finally {
                setIsLoading(false);
                loadingRef.current = false;
            }
        };

        if (inView && hasMore && !isLoading) {
            fetchItems();
        }
    }, [inView, hasMore, isLoading, limit]);

    useEffect(() => {
        setItems([]);
        pageRef.current = 1;
        setHasMore(true);
    }, []);


    return (
        <div className="flex flex-col items-center">
            <div className="min-w-319 flex justify-between">
                <div>
                    <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center">
                        <GoChevronLeft /> Назад
                    </Button>
                    <div className="flex gap-3 items-baseline">
                        <h2 className="font-[Play] font-bold text-2xl">{otherData?.title}</h2>
                        <p className="font-normal text-xs text-gray-400">{otherData?.totalProducts} товаров</p>
                    </div>
                </div>
            </div>
            <div className="w-319 flex justify-end">
                <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center">
                    <FaRegEdit className="text-gray-500" /> Редактировать заказ
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
