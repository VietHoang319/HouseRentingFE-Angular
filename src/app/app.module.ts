import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailHouseComponent } from './component/detail-house/detail-house.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
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
import { HouseEditComponent } from './component/house/house-edit/house-edit.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { ImageCreateComponent } from './component/image/image-create/image-create.component';
import { SearchbarComponent } from './component/blocks/searchbar/searchbar.component';
import { SearchComponent } from './component/pages/search/search.component';
import { SliderComponent } from './component/blocks/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailHouseComponent,

    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HouseCreateComponent,
    ListHouseComponent,
    HouseEditComponent,
    ImageCreateComponent,
    SearchbarComponent,
    SearchComponent,
    SliderComponent,
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
