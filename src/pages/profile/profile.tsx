import { Card } from "@/shared/ui/card"
import user from '@/shared/img/user.png'
import { Button } from "@/shared/ui/button"
import { FiEdit3 } from "react-icons/fi";
import { Input } from "@/shared/ui/input";
import { FaRegCompass } from "react-icons/fa";

export function Profile() {
    const buttonStyle = "bg-bg-document border border-bg-blocks text-text-color px-2.5 py-1.5 hover:bg-bg-cards w-min";
    return (
        <Card className="px-0 font-[Jost] bg-bg-document border-1 border-bg-blocks shadow-lg">
            <div className="pb-5 px-5 flex sm:gap-10 gap-3 items-center justify-center sm:flex-row flex-col">
                <img src={user} alt="Фото профиля" className="w-20 h-20 sm:w-25 sm:h-25 rounded-full mx-auto sm:mx-0" />
                <div className="flex flex-col gap-3 sm:items-start items-center">
                    <Button className={buttonStyle}>Загрузить новое фото</Button>
                    <p className="text-sm text-text-secondary-color text-justify">Рекомендуется размер не менее 800×800 пикселей <br />
                        Допускается использование формата JPG или PNG</p>
                </div>
            </div>
            <div className="bg-bg-cards w-full h-0.5"></div>
            <div className="px-3 sm:px-5 flex justify-between flex-col gap-4 py-4">
                <div className="flex flex-col gap-4 sm:gap-7 px-3 sm:px-5 py-3 border-1 rounded-lg border-bg-blocks">
                    <div className="flex justify-between flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center">
                        <p className="font-bold text-center sm:text-start">Персональные данные</p>
                        <Button className={buttonStyle}>
                            <FiEdit3 /> Редактировать
                        </Button>
                    </div>
                    <div className="flex sm:gap-18 sm:flex-row flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-text-secondary-color">Ваше Имя</p>
                            <p className="text-sm">Субботин Андрей</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-text-secondary-color">Email</p>
                            <p className="text-sm">a.subbotin@maksoft.ru</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-text-secondary-color">Телефон</p>
                            <p className="text-sm">8 (937) 444-66-30</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-bg-cards rounded-lg px-5 py-3 gap-3 border border-bg-blocks">
                    <p className="font-bold text-center sm:text-start">Место нахождения</p>
                    <div className="flex sm:gap-5 sm:h-10 sm:flex-row flex-col gap-3">
                        <div className="flex relative w-full">
                            <Input className="rounded-xl focus-visible:border-bg-button pl-10 h-10" />
                            <FaRegCompass size={20} className="absolute left-3 top-1/4" />
                        </div>
                        <Button className="px-3 py-2 rounded-xl bg-bg-button">Сохранить изменения</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 sm:gap-7 px-3 sm:px-5 py-3 border-1 rounded-lg border-bg-blocks">
                    <div className="flex justify-between flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center">
                        <p className="font-bold text-center sm:text-start">Подробнее о Вас</p>
                        <Button className={buttonStyle}>
                            <FiEdit3 /> Редактировать
                        </Button>
                    </div>
                    <p className="text-sm sm:text-base max-w-124 text-justify">
                        Привет! Я профессиональный веб-разработчик с 5-летним опытом создания современных,
                        высоконагруженных веб-приложений. Моя страсть — превращать сложные бизнес-задачи
                        в элегантные цифровые решения. Верю, что качественный код — это не просто работа,
                        а искусство, которое должно приносить реальную пользу бизнесу.
                    </p>
                </div>
            </div>
        </Card>
    )
}
