import { useOrderPage } from "@/features/order-page/model/useOrderPage";
import { OrderPageUI } from "@/features/order-page/ui/OrderPageUI";

export const OrderPage = () => {
  const { items, otherData, isLoading, hasMore, lastProductRef } = useOrderPage();

  return (
    <OrderPageUI
      items={items}
      otherData={otherData}
      isLoading={isLoading}
      hasMore={hasMore}
      lastProductRef={lastProductRef}
    />
  );
};
