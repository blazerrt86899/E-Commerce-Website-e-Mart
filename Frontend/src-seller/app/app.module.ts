import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { ItemlistingformComponent } from './itemlistingform/itemlistingform.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { ItemcatalogComponent } from './itemcatalog/itemcatalog.component';
import { TokenInterceptor } from './interceptor';
import { UpdateitemComponent } from './updateitem/updateitem.component';


@NgModule({
  declarations: [
    AppComponent,
    SellersignupComponent,
    ItemlistingformComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ErrorComponent,
    LogoutComponent,
    ItemcatalogComponent,
    UpdateitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
