import { Card } from "@/shared/ui/card";
import logoMaksoft from "@/shared/img/logoMaksoft.png"
import logoMaksoftDark from "@/shared/img/logoMaksoftDark.png"
import { Navbar } from "@/features/header/Navbar";
import { Button } from "@/shared/ui/button";
import { AiOutlineMoon } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { BsSun } from "react-icons/bs";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from '@/app/routes/routes';
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/shared/ui/sheet"


export function Header() {
    const [theme, setTheme] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();


    const switchTheme = () => {
        const newTheme = !theme;
        setTheme(newTheme);

        const html = document.documentElement;

        if (newTheme) {
            html.setAttribute('data-theme', 'dark');
            html.classList.add('dark');
        } else {
            html.setAttribute('data-theme', 'light');
            html.classList.remove('dark');
        }
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <Card className="bg-bg-header w-full max-w-7xl mx-auto flex flex-row p-5 rounded-[20px] justify-between my-6 border border-bg-cards items-center">
            {theme ? <img src={logoMaksoftDark} alt="Логотип компании Максофт" className="object-scale-down w-32 md:w-40" />
                : <img src={logoMaksoft} alt="Логотип компании Максофт" className="object-scale-down w-32 md:w-40" />}
            <div className="hidden md:flex">
                <Navbar />
            </div>
            <div className="hidden md:flex flex-row gap-4">
                <Button variant="secondary" onClick={switchTheme} size="icon" className="flex rounded-full p-5 gap-5 hover:bg-bg-blocks cursor-pointer">
                    {theme ? <BsSun />
                        : <AiOutlineMoon />}
                </Button>
                <Button variant="secondary" size="icon" className="relative flex rounded-full p-5 gap-5 hover:bg-bg-blocks cursor-pointer">
                    <span className="absolute top-[2px] left-[28px] flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cc3341] opacity-75"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-[#cc3341]"></span>
                    </span>
                    <GoBell />
                </Button>
                <Link to={routes.profile}>
                    <Button variant="secondary" size="icon" className={`flex rounded-full p-5 gap-5 hover:bg-bg-blocks cursor-pointer
                        ${location.pathname == routes.profile && 'bg-bg-blocks text-bg-button'}`}>
                        <GoPerson />
                    </Button>
                </Link>
            </div>


            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                    <button className="md:hidden cursor-pointer" onClick={() => setMenuOpen(true)}>
                        <GiHamburgerMenu size={20} />
                    </button>
                </SheetTrigger>
                <SheetTitle className="sr-only"></SheetTitle>
                <SheetDescription className="sr-only"></SheetDescription>
                <SheetContent className="flex flex-col justify-center items-center gap-20" side="right">
                    <div className="flex flex-row gap-7">
                        <Button variant="secondary" onClick={switchTheme} size="icon" className="flex rounded-full p-5 gap-5 hover:bg-bg-blocks cursor-pointer">
                            {theme ? <BsSun />
                                : <AiOutlineMoon />}
                        </Button>
                        <Button variant="secondary" size="icon" className="relative flex rounded-full p-5 gap-5 hover:bg-bg-blocks cursor-pointer">
                            <span className="absolute top-[2px] left-[28px] flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cc3341] opacity-75"></span>
                                <span className="relative inline-flex size-2 rounded-full bg-[#cc3341]"></span>
                            </span>
                            <GoBell />
                        </Button>
                        <Link to={routes.profile}>
                            <Button variant="secondary" onClick={closeMenu} size="icon" className={`flex rounded-full p-5 gap-5 hover:bg-bg-blocks cursor-pointer
                        ${location.pathname == routes.profile && 'bg-bg-blocks text-bg-button'}`}>
                                <GoPerson />
                            </Button>
                        </Link>
                    </div>
                    <Navbar mobile onItemClick={closeMenu}/>
                </SheetContent>
            </Sheet>

        </Card>
    );
}