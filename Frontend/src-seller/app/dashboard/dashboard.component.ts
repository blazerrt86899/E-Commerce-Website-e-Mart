import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';
import { Seller } from '../seller';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mySeller : Seller;

  constructor(private sellerService : ItemserviceService) { 
    this.mySeller = new Seller();
  }

  ngOnInit(): void {
    this.seller();
  }

  seller(){
    this.sellerService.getSellerById().subscribe(newSeller => {this.mySeller = newSeller; console.log("Seller "+this.mySeller.username); });
  }


}
