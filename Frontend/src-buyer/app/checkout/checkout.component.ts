import { Component, OnInit } from '@angular/core';
import { BuyerserviceService } from '../buyerservice.service';
import { Transaction, Purchase } from '../transaction';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private transactionService : BuyerserviceService) { }

  transactions : Transaction[];
  purchases : Purchase[];

  ngOnInit(): void {

    this.transactionService.getTransaction().subscribe(transact => this.transactions = transact);
    this.transactionService.getPurchase().subscribe(purchase => this.purchases = purchase);
    
  }

}
