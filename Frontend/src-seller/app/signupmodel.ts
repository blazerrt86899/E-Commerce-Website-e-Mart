export class Selleraddress{

    houseNumber:number;
    streetName:string;
    locality:string;
    city:string;
    state:string;
    pincode:number;
}

export class Sellermodel {

    username:string;
    password:string;
    companyName:string;
    gSTIN:number;
    briefAboutCompany:string;
    postalAddress:Selleraddress = new Selleraddress();
    website:string;
    emailId:string;
    contactNumber:string;

}

export class Itemsign {

    //sellerId:Sellermodel = new Sellermodel();
    itemCost:number;
    itemName:string;
    itemDescription:string;
    itemStocknumber:number;
    category:Category = new Category();
    subcategory:Subcategory = new Subcategory();
    itemRemarks:string;

}

export class Category{
    
    categoryName:string;
    briefAboutCategory:string;
}

export class Subcategory{

    subCategoryName:string;
    briefCategoryDetail:string;
    gSTPercentage:number;
    category:Category = new Category();

}


