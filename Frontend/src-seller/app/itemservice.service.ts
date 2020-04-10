import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sellermodel, Selleraddress, Itemsign } from './signupmodel';
import { Observable } from 'rxjs';
import { ApiResponse } from './api.response';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private http:HttpClient) { }
  private baseUrlSeller:string = 'http://localhost:8989/mentorportal/sellerService';
  
  sellerId:string = window.localStorage.getItem('sellerId');

  getProductById(itemId: number):Observable<any> {
    return this.http.get(`${this.baseUrlSeller}/image/get/${itemId}`);
  }
  
  updateItem(update: any, itemId: number) :Observable<any>{
    return this.http.put(`${this.baseUrlSeller}/item/updateitem/${itemId}`,update);
  }


  createSeller(seller:Sellermodel):Observable<Object>{
    //console.log(seller);
    return this.http.post(`${this.baseUrlSeller}/seller/signup`,seller);
  }

  saveItem(itemList:Itemsign):Observable<Object>{
    return this.http.post(`${this.baseUrlSeller}/item/additem/${this.sellerId}`,itemList); //1
  }

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrlSeller}/token/generate-token`, loginPayload);
  }

  getSellerById():Observable<any>{
    return this.http.get(`${this.baseUrlSeller}/seller/get/${this.sellerId}`); //6
  }

  getItemList():Observable<any>{
    return this.http.get(`${this.baseUrlSeller}/item/getAll/${this.sellerId}`);//1
  }

  addProduct(uploadProductData: any): Observable<any>{
    console.log(uploadProductData);
    return this.http.post(`${this.baseUrlSeller}/image/upload`,uploadProductData, {observe:'response'})
  }

  deleteProductById(itemId : number): Observable<any>{
    return this.http.delete(`${this.baseUrlSeller}/item/deleteitem/${itemId}`)
  }

  // getByItemId(itemId : number): Observable<any>{
  //   return this.http.getItemById(`${this.baseUrlSeller}/item/`)
  // }
}
