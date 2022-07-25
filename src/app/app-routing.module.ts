import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailHouseComponent} from "./component/detail-house/detail-house.component";
import {LoginComponent} from "./component/pages/login/login.component";
import {RegisterComponent} from "./component/pages/register/register.component";
import {HouseCreateComponent} from "./component/house/house-create/house-create.component";
import {SearchComponent} from "./component/pages/search/search.component";
import {HomeComponent} from "./component/pages/home/home.component";
import {ImageCreateComponent} from "./component/image/image-create/image-create.component";
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
    path: 'create',
    component: HouseCreateComponent
  },
  {
    path: 'createImage',
    component: ImageCreateComponent
  },
  {
    path: 'edit-house/:id',
    component: HouseEditComponent
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: "detail/:id",
    component:DetailHouseComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

