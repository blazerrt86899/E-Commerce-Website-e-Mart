export class Cart {
    itemId:number;
    itemQuantity:number = 1;
    unitPrice:number;
}

export class Buyermodel {
    username:string;
    password:string;
    emailId:string;
    mobileNumber:string;
    createdOn:Date;
    address: Buyeraddress = new Buyeraddress();
}

export class Buyeraddress {

    houseNumber:number;
    streetName:string;
    streetLocality:string;
    city:string;
    state:string;
    pincode:number;
}

export class ViewCart{
    
    cartId:number;
    itemId:number;
    itemQuantity:number;
    unitPrice:number;

}