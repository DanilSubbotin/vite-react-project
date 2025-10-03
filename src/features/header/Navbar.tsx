import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from "@/shared/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { routes } from '@/app/routes/routes'

export function Navbar() {
    const location = useLocation();

    const navItems = [
        { path: routes.technicalSpecs, label: 'Технические спецификации' },
        { path: routes.prices, label: 'Прайсы' },
        { path: routes.suppliers, label: 'Поставщики' },
        { path: routes.otherPage, label: '804' },
    ]

    return (
        <NavigationMenu className="flex gap-4">
            <NavigationMenuList>
                {navItems.map((item) => (
                    <NavigationMenuItem key={item.path}>
                        <NavigationMenuLink
                            asChild
                            className={`hover:bg-bg-blocks px-5 py-3 rounded-2xl 
                                ${location.pathname == item.path ? 'bg-bg-blocks text-bg-button' : 'text-text-secondary-color hover:text-text-color'}
                                `}>
                            <Link to={item.path}>{item.label}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}