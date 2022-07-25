import { Component, OnInit } from '@angular/core';
import {Orderr} from "../../../model/orderr";
import {OrderrService} from "../../../service/orderr.service";

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.css']
})
export class ListBillComponent implements OnInit {

  orderr: Orderr[] = []

  constructor(private orderService: OrderrService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.orderService.getAll().subscribe((data) => {
      console.log(data);
      // @ts-ignore
      this.orderr = data
    })
  }
}
