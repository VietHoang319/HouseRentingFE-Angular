import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailHouseComponent} from "./component/detail-house/detail-house.component";
import {HomeComponent} from "./service/home/home.component";
import {LoginComponent} from "./component/pages/login/login.component";
import {RegisterComponent} from "./component/pages/register/register.component";

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
    path: "detail",
    component:DetailHouseComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
