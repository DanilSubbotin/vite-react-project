import { fetchProducts, fetchOtherData, type CardItem, type OtherDataProps } from "@/app/api/orders";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const useOrderPage = () => {
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
                const [productsResponse, otherDataResponse] = await Promise.all([
                    fetchProducts(pageRef.current, limit),
                    fetchOtherData(),
                ]);

                setItems(prev => [...prev, ...productsResponse.data]);
                setOtherData(otherDataResponse.data);
                setHasMore(productsResponse.data.length === limit);
                if (productsResponse.data.length === limit) {
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


    return {
        items,
        otherData,
        lastProductRef,
        isLoading,
        hasMore,
    };
};