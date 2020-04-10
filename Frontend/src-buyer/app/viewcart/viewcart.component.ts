import { Component, OnInit } from '@angular/core';
import { BuyerserviceService } from '../buyerservice.service';
import { Router } from '@angular/router';
import { ViewCart } from '../buyer';
import { Stock } from '../item';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  constructor(private cartservice : BuyerserviceService, private router : Router) { }

  viewCart : ViewCart = new ViewCart();
  view : ViewCart[];
  success : String;
  totalAmount:number = 0;
  stock:Stock[];
  itemStock : Stock;
   buyerId:string;
   token:string;
   buyerName:string;
   isLoggedIn:boolean = false;
   updateResponse:string;
   checkoutResponse:string;
  ngOnInit(): void {

    //if not logged in, redirect to login page
    this.buyerId = window.localStorage.getItem('buyerId');
     this.token = window.localStorage.getItem('token');
     this.buyerName = window.localStorage.getItem('buyerName');

     if(this.token != null && this.token.length > 10){
       this.isLoggedIn = true;
     }else{
       this.router.navigateByUrl("/login");
     }

    
    this.cartservice.viewCart().subscribe(itemview => 
    {
      this.view = itemview;
      itemview.forEach(element => {
        this.totalAmount += element.unitPrice*element.itemQuantity;
        //console.log(element.unitPrice);
        //console.log(element.itemQuantity);
      });

    });
        
      
  }

  increment(cartView : ViewCart){
    cartView.itemQuantity += 1;
    this.totalAmount += cartView.unitPrice;
    this.cartservice.updateCart(cartView).subscribe(newView => this.viewCart = newView);
  }

  decrement(cartView : ViewCart){
    if(cartView.itemQuantity > 1){

    cartView.itemQuantity -= 1;
    this.totalAmount -= cartView.unitPrice;
    this.cartservice.updateCart(cartView).subscribe(newView => this.viewCart = newView);

    }
  }

  deleteCart(cart : ViewCart){
    this.totalAmount -= cart.unitPrice*cart.itemQuantity;
    //console.log(cart.cartId);
    this.cartservice.deleteCart(cart.cartId).subscribe(()=> this.viewCartComponent());
    //this.router.navigateByUrl("/showcart");
  }

  viewCartComponent(){
    this.cartservice.viewCart().subscribe(itemview => this.view = itemview);
  }

  updateStock(){
    this.stock = new Array();
    for(let cartItem of this.view)
    {
      this.itemStock = new Stock();
      this.itemStock.itemId = cartItem.itemId;
      this.itemStock.itemQuantity = cartItem.itemQuantity;
      console.log(this.itemStock.itemId);
      this.stock.push(this.itemStock);
    }
    this.cartservice.updateStock(this.stock).subscribe(()=>
      {
        this.totalAmount = 0;
        this.router.navigateByUrl("/checkout");
      });
  }

  checkoutCart(){
     this.cartservice.checkoutCart().subscribe(() => {
       this.updateStock();
     });
  }

}
