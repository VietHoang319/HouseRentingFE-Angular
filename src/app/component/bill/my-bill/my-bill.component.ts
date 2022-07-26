import { Component, OnInit } from '@angular/core';
import {OrderrService} from "../../../service/orderr.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-my-bill',
  templateUrl: './my-bill.component.html',
  styleUrls: ['./my-bill.component.css']
})
export class MyBillComponent implements OnInit {
  id: any;
  listOrder: any[] = [];

  constructor(private orderService: OrderrService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getListOrder(this.id);
    });
  }

  getListOrder(id: any) {
    return this.orderService.findByMyId(id).subscribe((orders) => {
      // @ts-ignore
      this.listOrder = orders;
      // @ts-ignore
      for (let i = 0; i < orders.length; i++) {
        // @ts-ignore
        this.calculateTheDate(orders[i].startTime);
        console.log(this.total)
        if (this.total < 1) {
          this.check.push(true)
        } else {
          this.check.push(false);
        }
      }
      console.log(this.check)
    }, error => {
      console.log(error);
    })
  }

  check: boolean[] = [];
  startTimeCal: any;
  endTimeCal: any;
  total: any;
  calculateTheDate(startTime: any) {
    this.startTimeCal = new Date(startTime);
    var today = new Date();
    this.endTimeCal = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
    this.total = this.period(Number(this.startTimeCal), Number(this.endTimeCal));
  }

  period(startTime: number, endTime: number) {
    const diffInMs = Math.abs(endTime - startTime);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  order:any;
  updateOrder(id: any){
    this.orderService.findById(id).subscribe((order) =>  {
      this.order = {
        house: {
          id: order.house.id
        },
        customer: {
          id: order.customer.id
        },
        startTime: order.startTime,
        endTime: order.endTime,
        total: order.total,
        status: 2
      }
      this.orderService.update(order.id , this.order).subscribe(() => {
      })
    }, error => {
      console.log(error)
    })
  }
}
