import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';
import { Item } from '../item';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-itemcatalog',
  templateUrl: './itemcatalog.component.html',
  styleUrls: ['./itemcatalog.component.css']
})
export class ItemcatalogComponent implements OnInit {

  constructor(private catalogService : ItemserviceService, private updateService : UpdateService) { }

  items : Item[];

  ngOnInit(): void {

    this.catalogService.getItemList().subscribe(items => 
      {
        this.items = items;
        for(let item of this.items){
          //console.log(item.image.length);
          item.image = 'data:image/jpeg;base64,'+ item.image;
        }
      }
      );
  }

  update(itemId:number){
    this.updateService.itemId = itemId;
  }

  deleteProduct(itemId : number){
    this.catalogService.deleteProductById(itemId).subscribe(()=>
    {
      alert("Deleted Successfully!!!!");
      this.ngOnInit();
    });
  }
}
