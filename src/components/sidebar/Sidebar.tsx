import { Card } from "../ui/card";
import { NacenkaSidebar } from "./SidebarComponents/NacenkaSidebar";
import { OrderSidebar } from "./SidebarComponents/OrderSidebar";
import CurrencySidebar from "./SidebarComponents/CurrencySidebar";
import DownloadSidebar from "./SidebarComponents/DownloadSidebar";
import UsernameSidebar from "./SidebarComponents/UsernameSidebar";
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

