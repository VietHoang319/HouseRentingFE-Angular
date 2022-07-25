import { Component, OnInit } from '@angular/core';
import {Orderr} from "../../../model/orderr";
import {OrderrService} from "../../../service/orderr.service";
import {HouseService} from "../../../service/house.service";
import {ActivatedRoute, Router} from "@angular/router";
import {House} from "../../../model/house";

@Component({
  selector: 'app-delete-bill',
  templateUrl: './delete-bill.component.html',
  styleUrls: ['./delete-bill.component.css']
})
export class DeleteBillComponent implements OnInit {
  orders: Orderr[] = []

  houses: House[] = []
  id: any;

  constructor(private orderService: OrderrService,
              private houseService: HouseService,
              private active: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe((param) => {
      this.id = param.get("id")
      this.findById(this.id)
    })
  }

  findById(id: any) {
    this.orderService.findById(id).subscribe((data) => {
      // @ts-ignore
      this.orders = data
      this.orderService.deleteBill(id).subscribe((data) => {
        console.log(data)
        this.router.navigate([''])
      })
    })
  }

}
