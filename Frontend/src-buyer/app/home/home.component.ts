import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { BuyerserviceService } from '../buyerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // buyerId:string;
  // token:any;
  // buyerName:string;

  constructor(private buyerService : BuyerserviceService) { }

  items: Item[];

  ngOnInit(): void {
    
    // this.buyerId = window.localStorage.getItem('buyerId');
    // this.token = window.localStorage.getItem('token');
    // this.buyerName = window.localStorage.getItem('buyerName');

    this.buyerService.getItemList().subscribe(items => 
      {
        this.items = items;
        for(let item of this.items){
          item.image = 'data:image/jpeg;base64,'+ item.image;
        }
      }
      );
  }
      
  

  


}
