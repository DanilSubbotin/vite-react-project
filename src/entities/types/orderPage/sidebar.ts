/* Блок наценки */
export interface OrderSidebarProps {
    allPrice: number;
    orderId?: string;
    onPriceUpdate: (price: number) => void;
}

export interface PriceUpdateData {
    priceWithMarkup: number;
    markupPercentage: number;
    updatedAt: string;
}
/* Блок наценки валют*/
export interface CurrencyValues {
    CNY: number;
    EUR: number;
    USD: number;
}
/* Блок стоимости заказа */
export interface OrderSidebarProps {
    allPrice: number;
    priceWithMarkup: number;
}