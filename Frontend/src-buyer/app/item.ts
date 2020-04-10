export class Item {

    itemId : number;
    sellerId : number;
    categoryId:number;
    subCategoryId:number;
    price:number;
    itemName:string;
    categoryName:string;
    stock:number;
    subCategoryName:string;
    image:any;
} 

export class Stock {
    itemId:number;
    itemQuantity:number;
}