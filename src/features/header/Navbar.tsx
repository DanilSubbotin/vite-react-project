import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from "@/shared/ui/navigation-menu";

export function Navbar() {
    return (
        <NavigationMenu className="flex gap-4">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="text-text-secondary-color hover:bg-bg-blocks active:bg-bg-blocks active:text-bg-button px-5 py-3 rounded-2xl">804</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="text-text-secondary-color hover:bg-bg-blocks active:bg-bg-blocks active:text-bg-button px-5 py-3 rounded-2xl">Прайсы</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="text-text-secondary-color hover:bg-bg-blocks active:bg-bg-blocks active:text-bg-button px-5 py-3 rounded-2xl">Технические спецификации</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="text-text-secondary-color hover:bg-bg-blocks active:bg-bg-blocks active:text-bg-button px-5 py-3 rounded-2xl">Поставщики</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}