import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';
import { Router } from '@angular/router';
import { UpdateService } from '../update.service';
import { UpdateProduct } from '../item';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {

  update : any;
  itemId: number = this.updateService.itemId;

  constructor(private itemService : ItemserviceService, 
    private route: Router, private updateService:UpdateService) { }

  ngOnInit(): void {
    this.update = new UpdateProduct;
    this.itemService.getProductById(this.itemId).subscribe(update => this.update = update);
  }

  onItemUpdate(){
    this.itemService.updateItem(this.update,this.itemId).subscribe(()=>
    {
      alert("Updated Successfully");
      this.route.navigateByUrl("/catalog");
    })
  }

}
