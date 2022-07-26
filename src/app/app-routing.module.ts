import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailHouseComponent} from "./component/house/detail-house/detail-house.component";
import {LoginComponent} from "./component/pages/login/login.component";
import {RegisterComponent} from "./component/pages/register/register.component";
import {SearchComponent} from "./component/pages/search/search.component";
import {HomeComponent} from "./component/pages/home/home.component";
import {RentHouseComponent} from "./component/house/rent-house/rent-house.component";
import {MyBillComponent} from "./component/bill/my-bill/my-bill.component";
import {MyhouseComponent} from "./component/house/myhouse/myhouse.component";
import {HouseEditComponent} from "./component/house/house-edit/house-edit.component";

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
    path: "detail/:id",
    component:DetailHouseComponent
  },
  {
    path: "my-house/owner_id/:id",
    component: MyhouseComponent
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
    path: 'my-order/:id',
    component: MyBillComponent
  },
  {
    path: 'edit-house/:id',
    component: HouseEditComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

