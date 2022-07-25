import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailHouseComponent} from "./component/house/detail-house/detail-house.component";
import {LoginComponent} from "./component/pages/login/login.component";
import {RegisterComponent} from "./component/pages/register/register.component";
import {HouseCreateComponent} from "./component/house/house-create/house-create.component";
import {SearchComponent} from "./component/pages/search/search.component";
import {HomeComponent} from "./component/pages/home/home.component";
import {HouseService} from "./service/house.service";
import {RentHouseComponent} from "./component/house/rent-house/rent-house.component";
import {HouseRentedComponent} from "./component/house/house-rented/house-rented.component";
import {ListBillComponent} from "./component/bill/list-bill/list-bill.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: 'create',
    component: HouseCreateComponent
  },
  {
    path: "detail/:id",
    component:DetailHouseComponent
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'rent-house/:id',
    component: RentHouseComponent
  },
  {
    path: 'house-rented/id/:id',
    component: HouseRentedComponent
  },
  {
    path: 'show-bill',
    component: ListBillComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

