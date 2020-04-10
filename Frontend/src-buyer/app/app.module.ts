import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyersignupComponent } from './buyersignup/buyersignup.component';
import { HomeComponent } from './home/home.component';
import { ItemTilesComponent } from './item-tiles/item-tiles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { ViewitemComponent } from './viewitem/viewitem.component';
//import { TokenInterceptor } from './interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BuyersignupComponent,
    HomeComponent,
    ItemTilesComponent,
    LoginComponent,
    ViewcartComponent,
    SearchComponent,
    CheckoutComponent,
    LogoutComponent,
    ErrorComponent,
    ViewitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// {provide: HTTP_INTERCEPTORS,
//   useClass: TokenInterceptor,
//   multi : true}