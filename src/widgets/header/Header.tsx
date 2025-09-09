import { Card } from "@/shared/ui/card";
import logoMaksoft from "@/shared/img/logoMaksoft.png"
import { Navbar } from "@/features/header/Navbar";
import { Button } from "@/shared/ui/button";
import { AiOutlineMoon } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { GoPerson } from "react-icons/go";




export function Header() {
    return (
        <Card className="w-325 flex flex-row p-5 rounded-[20px] justify-between my-6 border border-gray-100">
            <img src={logoMaksoft} alt="Логотип компании Максофт" className="object-scale-down" />
            <Navbar />
            <div className="flex flex-row gap-4">
                <Button variant="secondary" size="icon" className="flex rounded-full p-5 gap-5 hover:bg-gray-200 cursor-pointer">
                    <AiOutlineMoon />
                </Button>
                <Button variant="secondary" size="icon" className="flex rounded-full p-5 gap-5 hover:bg-gray-200 cursor-pointer">
                    <GoBell />
                </Button>
                <Button variant="secondary" size="icon" className="flex rounded-full p-5 gap-5 hover:bg-gray-200 cursor-pointer">
                    <GoPerson />
                </Button>
            </div>
        </Card>
    );
}