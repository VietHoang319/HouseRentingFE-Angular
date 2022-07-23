import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HouseCreateComponent} from "./component/house/house-create/house-create.component";
import {HouseListComponent} from "./component/house/house-list/house-list.component";

const routes: Routes = [
  {
    path: 'create',
    component: HouseCreateComponent
  },
  {
    path: '',
    component: HouseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
