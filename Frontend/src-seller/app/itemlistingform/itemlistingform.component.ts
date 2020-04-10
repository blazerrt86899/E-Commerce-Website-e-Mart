import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemlistingform',
  templateUrl: './itemlistingform.component.html',
  styleUrls: ['./itemlistingform.component.css']
})
export class ItemlistingformComponent implements OnInit {

  itemName : any;
  price : any;
  stock : any;
  description : any;
  remarks : any;
  categoryName : any;
  categoryId: any;
  subCategoryName : any;
  subCategoryId : any;
  image : any;
  selectedFile: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;

  //itemList: Itemsign = new Itemsign();

  constructor(private itemService : ItemserviceService , private route : Router) { }

  sellerId:string = window.localStorage.getItem('sellerId');
  sellerName:string = window.localStorage.getItem('sellerName');

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  onItemSubmit() {
    //console.log(this.selectedFile);
    const uploadProductData = new FormData();
    uploadProductData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadProductData.append('itemname', this.itemName);
    uploadProductData.append('seller',this.sellerId); //this.sellerId
    uploadProductData.append('category', this.categoryId);
    uploadProductData.append('subcategory', this.subCategoryId);
    uploadProductData.append('price', this.price);
    uploadProductData.append('stock', this.stock);
    uploadProductData.append('desc',this.description);
    uploadProductData.append('remark',this.remarks);
    console.log("data");
    console.log(uploadProductData.get('itemname'));
    this.itemService.addProduct(uploadProductData).subscribe((response) => {
          if (response.status === 200) {
            alert("Product added Successfully");
          } else {
            alert("adding Product failed Try Again");
          }
         
        }

        
    );
    alert("Product Added to Seller Id: "+this.sellerId+" and Seller Name is "+this.sellerName);
    this.route.navigateByUrl("/dashboard");

      }

}
