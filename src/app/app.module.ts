import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailHouseComponent } from './component/house/detail-house/detail-house.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './component/blocks/navbar/navbar.component';
import { LoginComponent } from './component/pages/login/login.component';
import { RegisterComponent } from './component/pages/register/register.component';
import {JwtInterceptor} from "./helper/jwt-interceptor";
import {ErrorInterceptor} from "./helper/error-interceptor";
import { HomeComponent } from './component/pages/home/home.component';
import { ListHouseComponent } from './component/blocks/list-house/list-house.component';
import {SearchComponent} from "./component/pages/search/search.component";
import { SearchbarComponent } from './component/blocks/searchbar/searchbar.component';
import { FooterComponent } from './component/blocks/footer/footer.component';
import {RentHouseComponent} from "./component/house/rent-house/rent-house.component";
import { MyBillComponent } from './component/bill/my-bill/my-bill.component';
import { MyhouseComponent } from './component/house/myhouse/myhouse.component';
import {HouseEditComponent} from "./component/house/house-edit/house-edit.component";


@NgModule({
  declarations: [
    AppComponent,
    DetailHouseComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListHouseComponent,
    SearchbarComponent,
    SearchComponent,
    RentHouseComponent,
    MyBillComponent,
    FooterComponent,
    MyhouseComponent,
    HouseEditComponent
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
