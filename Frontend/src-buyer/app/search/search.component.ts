import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { BuyerserviceService } from '../buyerservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  searchStr: string;
  items: Item[];

  constructor(private searchService: BuyerserviceService) { }

  ngOnInit() {
    this.searchStr = "";
  }

  private searchItem() {
    this.searchService.getCustomersByString(this.searchStr)
      .subscribe(items => this.items = items);
  }

  onSubmit() {
    this.searchItem();
  }


}
