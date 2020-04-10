import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyersignupComponent } from './buyersignup/buyersignup.component';
import { LoginComponent } from './login/login.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  //{path:'app',component:AppComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:BuyersignupComponent},
  {path:'login',component:LoginComponent},
  {path:'view',component:ViewcartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'logout',component:LogoutComponent},  


  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
