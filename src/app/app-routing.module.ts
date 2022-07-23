import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailHouseComponent} from "./component/detail-house/detail-house.component";

const routes: Routes = [
  {
    path: "detail",
    component:DetailHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
