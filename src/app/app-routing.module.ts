import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailHouseComponent} from "./component/detail-house/detail-house.component";
import {HomeComponent} from "./service/home/home.component";
import {LoginComponent} from "./component/pages/login/login.component";
import {RegisterComponent} from "./component/pages/register/register.component";
import {HouseCreateComponent} from "./component/house/house-create/house-create.component";
import {HouseEditComponent} from "./component/house/house-edit/house-edit.component";
import {SearchComponent} from "./component/pages/search/search.component";

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
    path: "edit/:id",
    component: HouseEditComponent
  },
  {
    path: 'create',
    component: HouseCreateComponent
  },
  {
    path: "detail",
    component:DetailHouseComponent
  },
  {
    path: 'search',
    component: SearchComponent,
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
