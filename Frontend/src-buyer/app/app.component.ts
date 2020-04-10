import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'emartbuyer';
  //buttonDisable:any;
  buyerId:string;
  token:string;
  buyerName:string;
  isLoggedIn:boolean = false;
  buyerNewName:string = window.localStorage.getItem('buyerName');

  ngOnInit(): void {

    this.buyerId = window.localStorage.getItem('buyerId');
    this.token = window.localStorage.getItem('token');
    this.buyerName = window.localStorage.getItem('buyerName');

    if(this.token != null && this.token.length > 10){
      this.isLoggedIn = true;
    }
    // if(window.localStorage.getItem('token')!=null){
    //   this.buttonDisable = 'none';
    // }

  }
  

}
