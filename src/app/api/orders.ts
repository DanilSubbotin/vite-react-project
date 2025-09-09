import axios from "axios";

export interface CardItem {
    id: number;
    name: string;
    article: string,
    price: number,
    quantity: number
}

export interface OtherDataProps {
    title: string;
    totalProducts: string;
    allPrice: number;
}

export const fetchProducts = (page: number, limit: number) => {
    return axios.get<CardItem[]>("https://688410ce745306380a377d87.mockapi.io/products", {
        params: {
            page,
            limit,
        },
    });
};

export const fetchOtherData = () => {
    return axios.get<OtherDataProps>("https://mocki.io/v1/45b7458f-2339-44cc-9532-71853c690f20");
};
