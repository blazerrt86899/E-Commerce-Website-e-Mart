export class Transaction{
    transactionId:number;
    transactionType:string;
    totalAmount:number;
    transactionRemarks:string;
}

export class Purchase{
    purchaseId:number;
    itemId:number;
    numberOfItems:number;
    purchaseRemarks:string;
}