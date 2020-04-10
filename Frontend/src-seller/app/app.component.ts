import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'emartnew';

  constructor(){}

  sellerId:string;
  token:string;
  sellerName:string;
  isLoggedIn:boolean = false;

  sellerNewName:string = window.localStorage.getItem('sellerName');
  ngOnInit(): void {

    this.sellerId = window.localStorage.getItem('sellerId');
    this.token = window.localStorage.getItem('token');
    this.sellerName = window.localStorage.getItem('sellerName');

    if(this.token != null && this.token.length > 10){
      this.isLoggedIn = true;
    }
    // if(window.localStorage.getItem('token')!=null){
    //   this.buttonDisable = 'none';
    // }

  }

}
