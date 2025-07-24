import { Card } from "../ui/card";
import { NacenkaSidebar } from "./SidebarComponents/NacenkaSidebar";
import { OrderSidebar } from "./SidebarComponents/OrderSidebar";
import CurrencySidebar from "./SidebarComponents/CurrencySidebar";
import DownloadSidebar from "./SidebarComponents/DownloadSidebar";
import UsernameSidebar from "./SidebarComponents/UsernameSidebar";

interface SidebarProps {
    allPrice: number;
}

export function Sidebar({allPrice}: SidebarProps) {
    return (
        <Card className="max-w-103 p-5 font-display gap-5 h-max">
            <OrderSidebar allPrice = {allPrice}/>
            <NacenkaSidebar/>
            <CurrencySidebar/>
            <DownloadSidebar/>
            <UsernameSidebar/>
        </Card>
    );
}

