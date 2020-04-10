import { Component, OnInit } from '@angular/core';
import { Buyermodel } from '../buyer';
import { BuyerserviceService } from '../buyerservice.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyersignup',
  templateUrl: './buyersignup.component.html',
  styleUrls: ['./buyersignup.component.css']
})
export class BuyersignupComponent implements OnInit {

  constructor(private buyerService:BuyerserviceService,private route : Router) { }

  buyer:Buyermodel = new Buyermodel();
  //myForm:FormGroup;

  ngOnInit(): void {
  }

  onFormSubmit(){

    this.buyerService.createBuyer(this.buyer).subscribe(data => console.log(data), error => console.log(error));
    alert("Buyer Created");
    this.route.navigateByUrl("/login");
    //this.myForm.reset();

  }

  
}
