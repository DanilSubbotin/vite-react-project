import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from "@/shared/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Технические спецификации' },
        { path: '/prices', label: 'Прайсы' },
        { path: '/suppliers', label: 'Поставщики' },
        { path: '/other-page', label: '804' },
    ]

    return (
        <NavigationMenu className="flex gap-4">
            <NavigationMenuList>
                {navItems.map((item) => (
                    <NavigationMenuItem key={item.path}>
                        <NavigationMenuLink
                            asChild
                            className={`hover:bg-bg-blocks px-5 py-3 rounded-2xl 
                                ${location.pathname == item.path ? 'bg-bg-blocks text-bg-button' : 'text-text-secondary-color'}
                                `}>
                            <Link to={item.path}>{item.label}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}