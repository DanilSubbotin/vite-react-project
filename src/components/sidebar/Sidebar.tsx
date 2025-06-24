import { Card } from "../ui/card";
import { NacenkaSidebar } from "./SidebarComponents/NacenkaSidebar";
import { OrderSidebar } from "./SidebarComponents/OrderSidebar";
import CurrencySidebar from "./SidebarComponents/CurrencySidebar";
import DownloadSidebar from "./SidebarComponents/DownloadSidebar";
import UsernameSidebar from "./SidebarComponents/UsernameSidebar";

export function Sidebar() {
    return (
        <Card className="w-103 p-5 font-display gap-5 h-max">
            <OrderSidebar />
            <NacenkaSidebar/>
            <CurrencySidebar/>
            <DownloadSidebar/>
            <UsernameSidebar/>
        </Card>
    );
}

