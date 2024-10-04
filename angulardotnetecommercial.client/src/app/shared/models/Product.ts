export interface Iproduct {
    id: string;
    categoryId: string;
    price: number;
    description: string;
    quantity: number;
    discountId: string[];
    //CreatedAt: string;
    //ModifiedAt: string;
    imageUrl: string;
    name: string;
}