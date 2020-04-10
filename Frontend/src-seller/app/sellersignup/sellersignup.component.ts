import { Component, OnInit } from '@angular/core';
import { Sellermodel } from '../signupmodel';
//import { Selleraddress } from '../address';
import { ItemserviceService } from '../itemservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellersignup',
  templateUrl: './sellersignup.component.html',
  styleUrls: ['./sellersignup.component.css']
})
export class SellersignupComponent implements OnInit {

  seller: Sellermodel = new Sellermodel();

  //address: Selleraddress = new Selleraddress();

  //newData:any;

  constructor(private sellerservice : ItemserviceService,private route : Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(){

    this.sellerservice.createSeller(this.seller).subscribe(data => console.log(data), error => console.log(error));
    alert("Signed up..")
    this.route.navigateByUrl("/login");
  }

}
