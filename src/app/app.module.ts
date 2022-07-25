import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailHouseComponent } from './component/house/detail-house/detail-house.component';
import { NavbarComponent } from './component/blocks/navbar/navbar.component';
import { LoginComponent } from './component/pages/login/login.component';
import { RegisterComponent } from './component/pages/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor} from "./helper/jwt-interceptor";
import {ErrorInterceptor} from "./helper/error-interceptor";
import { HomeComponent } from './component/pages/home/home.component';
import { HouseCreateComponent } from './component/house/house-create/house-create.component';
import { ListHouseComponent } from './component/blocks/list-house/list-house.component';
import { SearchbarComponent } from './component/blocks/searchbar/searchbar.component';
import { SearchComponent } from './component/pages/search/search.component';
import { FooterComponent } from './component/blocks/footer/footer.component';
import {RentHouseComponent} from "./component/house/rent-house/rent-house.component";
import { MyhouseComponent } from './component/house/myhouse/myhouse.component';
import { HouseRentedComponent } from './component/house/house-rented/house-rented.component';
import { ListBillComponent } from './component/bill/list-bill/list-bill.component';
import { DeleteBillComponent } from './component/bill/delete-bill/delete-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailHouseComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HouseCreateComponent,
    ListHouseComponent,
    SearchbarComponent,
    SearchComponent,
    RentHouseComponent,
    FooterComponent,
    MyhouseComponent,
    HouseRentedComponent,
    ListBillComponent,
    DeleteBillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor, multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
