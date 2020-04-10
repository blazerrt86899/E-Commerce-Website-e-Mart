import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { ItemlistingformComponent } from './itemlistingform/itemlistingform.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { ItemcatalogComponent } from './itemcatalog/itemcatalog.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SellersignupComponent},
  {path:'itemlist',component:ItemlistingformComponent},
  {path:'catalog',component:ItemcatalogComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'update',component:UpdateitemComponent},


  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
