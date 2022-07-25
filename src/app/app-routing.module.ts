import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailHouseComponent} from "./component/house/detail-house/detail-house.component";
import {LoginComponent} from "./component/pages/login/login.component";
import {RegisterComponent} from "./component/pages/register/register.component";
import {SearchComponent} from "./component/pages/search/search.component";
import {HomeComponent} from "./component/pages/home/home.component";
import {HouseService} from "./service/house.service";
import {RentHouseComponent} from "./component/house/rent-house/rent-house.component";
import {MyhouseComponent} from "./component/house/myhouse/myhouse.component";
import {ListBillComponent} from "./component/bill/list-bill/list-bill.component";
import {DeleteBillComponent} from "./component/bill/delete-bill/delete-bill.component";

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
    path: 'show-bill',
    component: ListBillComponent
  },
  {
    path: 'delete-bill/:id',
    component: DeleteBillComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
