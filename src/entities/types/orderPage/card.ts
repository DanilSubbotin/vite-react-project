/* Содержимое карточек */
export interface DescriptionCardProps {
    article: string,
    price: number,
    quantity: number,
}

export interface TagProps {
    id: number;
}

/* Сама карточка */
export interface CardItem {
    id: number;
    name: string;
    article: string,
    price: number,
    quantity: number
}

export interface CardProps {
    item: CardItem;
}