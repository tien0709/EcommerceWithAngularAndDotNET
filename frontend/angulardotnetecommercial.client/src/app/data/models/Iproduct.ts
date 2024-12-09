import { ICategory } from "./ICategory"

export interface Iproduct {
    id: string,
    categoryId: string,
    category: ICategory
    name: string,
    price: number,
    description: string
    imageUrl: string
    quantity: number,
}