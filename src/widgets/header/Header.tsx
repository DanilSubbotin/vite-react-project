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






export function Header() {
    const [theme, setTheme] = useState(false);

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
    return (
        <Card className="bg-bg-header w-325 flex flex-row p-5 rounded-[20px] justify-between my-6 border border-bg-cards">
            {theme ? <img src={logoMaksoftDark} alt="Логотип компании Максофт" className="object-scale-down" />
                : <img src={logoMaksoft} alt="Логотип компании Максофт" className="object-scale-down" />}
            <Navbar />
            <div className="flex flex-row gap-4">
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
                <Button variant="secondary" size="icon" className="flex rounded-full p-5 gap-5 hover:bg-bg-blocks cursor-pointer">
                    <GoPerson />
                </Button>
            </div>
        </Card>
    );
}