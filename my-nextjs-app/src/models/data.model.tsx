export interface IData {
    id: string;
    name: string;
    price: number;
    type: string;
    location: string;
    coordinates: { x: number, y: number };
}


export interface MapProps {
    data: IData[];
}

export interface Prices{
    maxPrice: number;
    minPrice: number;
}