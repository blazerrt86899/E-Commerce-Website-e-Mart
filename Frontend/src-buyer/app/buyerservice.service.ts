import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Buyermodel, Cart, ViewCart } from './buyer';
import { ApiResponse } from './api.response';
import { SearchItem } from './search';
import { Stock } from './item';

@Injectable({
  providedIn: 'root'
})
export class BuyerserviceService {

  constructor(private http : HttpClient) { }
  private baseUrlBuyer:string = 'http://localhost:8989/mentorportal/buyerService';
  private baseUrlSeller:string = 'http://localhost:8989/mentorportal/sellerService';

  buyerId:string = window.localStorage.getItem('buyerId');
 

  getItemList():Observable<any> {
    return this.http.get(`${this.baseUrlSeller}/image/getAll`);
  }

  createBuyer(buyer: Buyermodel):Observable<Object> {
    return this.http.post(`${this.baseUrlBuyer}/buyer/signup`,buyer);
  }

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrlBuyer}/token/generate-token`, loginPayload);
  }

  addToCart(cart:Cart):Observable<any> {
    return this.http.post(`${this.baseUrlBuyer}/cart/addcartitem/${this.buyerId}`,cart);
  }

  deleteCart(cartId: number):Observable<any>{
    //console.log(cartId);
    return this.http.delete(`${this.baseUrlBuyer}/cart/deletecartitembyid/${cartId}`);
  }

  updateCart(cartView:ViewCart):Observable<any>{
    return this.http.put(`${this.baseUrlBuyer}/cart/update`,cartView);
  }

  viewCart():Observable<any>{
    return this.http.get(`${this.baseUrlBuyer}/cart/getAll/${this.buyerId}`);
  }

  getCustomersByString(searchStr: string):Observable<any>{
    let searchItem = new SearchItem(searchStr);
    return this.http.post(`${this.baseUrlSeller}/item/searchitem`,searchItem);
  }

  checkoutCart():Observable<any>{
    return this.http.get(`${this.baseUrlBuyer}/cart/checkout/${this.buyerId}`);
  }

  updateStock(stock:Stock[]):Observable<any>{
    return this.http.put(`${this.baseUrlSeller}/item/updatestock`,stock);
  }
  
  getTransaction():Observable<any>{
    return this.http.get(`${this.baseUrlBuyer}/transaction/${this.buyerId}`);
  }

  getPurchase():Observable<any>{
    return this.http.get(`${this.baseUrlBuyer}/purchase/${this.buyerId}`);
  }

}
