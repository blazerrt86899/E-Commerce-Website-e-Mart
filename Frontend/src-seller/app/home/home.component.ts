import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  sellerId:string;
  token:string;
  sellerName:string;
  isLoggedIn:boolean = false;
  
  ngOnInit(): void {

    this.sellerId = window.localStorage.getItem('sellerId');
    this.token = window.localStorage.getItem('token');
    this.sellerName = window.localStorage.getItem('sellerName');

    if(this.token != null && this.token.length > 10){
      this.isLoggedIn = true;
    }
  }

}
