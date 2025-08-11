import { Card } from "../../shared/ui/card";
import { NacenkaSidebar } from "@/features/sidebar-features/ui/NacenkaSidebar";
import { OrderSidebar } from "@/features/sidebar-features/ui/OrderSidebar";
import CurrencySidebar from "@/features/sidebar-features/ui/CurrencySidebar";
import DownloadSidebar from "@/features/sidebar-features/ui/DownloadSidebar";
import UsernameSidebar from "@/features/sidebar-features/ui/UsernameSidebar";
import { useState } from "react";

interface SidebarProps {
    allPrice: number;
}

export function Sidebar({allPrice}: SidebarProps) {
    const [priceWithMarkup, setPriceWithMarkup] = useState<number>(allPrice);

    return (
        <Card className="max-w-103 p-5 font-display gap-5 h-max">
            <OrderSidebar allPrice = {allPrice} priceWithMarkup = {priceWithMarkup}/>
            <NacenkaSidebar allPrice = {allPrice} onPriceUpdate={setPriceWithMarkup}/>
            <CurrencySidebar/>
            <DownloadSidebar/>
            <UsernameSidebar/>
        </Card>
    );
}

