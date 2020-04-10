import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { BuyerserviceService } from '../buyerservice.service';
import { Cart } from '../buyer';

@Component({
  selector: 'app-item-tiles',
  templateUrl: './item-tiles.component.html',
  styleUrls: ['./item-tiles.component.css']
})
export class ItemTilesComponent implements OnInit {

  @Input() item: Item;
  
  abc:any;
  constructor(private buyerService : BuyerserviceService) { }

  buyerId:string;
  token:string;
  buyerName:string;
  isLoggedIn:boolean = false;

  ngOnInit(): void {
    this.buyerId = window.localStorage.getItem('buyerId');
    this.token = window.localStorage.getItem('token');
    this.buyerName = window.localStorage.getItem('buyerName');

    if(this.token != null && this.token.length > 10){
      this.isLoggedIn = true;
    }
  }

  onSave(itemId:number,unitPrice:number){
    
    //console.log("aaaaaaaaaaaaaaaa");
    let cart:Cart = new Cart();
    
    cart.itemId = itemId;
    cart.itemQuantity = 1;
    cart.unitPrice = unitPrice;
    //console.log(cart.unitPrice);
    
    this.buyerService.addToCart(cart).subscribe(abc=>{this.abc=abc;},
    error => console.log('ERRORrrrrrrrrrrrrrrrrrrrrr: ' + error));
    alert("Cart item Added");
    //this.productService.getCustomersByString1("s");
    
  }

}
