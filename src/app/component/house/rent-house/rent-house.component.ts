import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {OrderrService} from "../../../service/orderr.service";
import {ActivatedRoute, convertToParamMap, Router} from "@angular/router";
import {HomeService} from "../../../service/home.service";

@Component({
  selector: 'app-rent-house',
  templateUrl: './rent-house.component.html',
  styleUrls: ['./rent-house.component.css']
})
export class RentHouseComponent implements OnInit {
  rentForm: FormGroup = new FormGroup({
    startTime: new FormControl(),
    endTime: new FormControl(),
    total: new FormControl(),
    status: new FormControl(),
  })
  order: any;
  house: any;


  constructor(private active: ActivatedRoute,
              private orderService: OrderrService,
              private homeService: HomeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.active.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id)
    })
  }

  findById(id: any) {
    this.homeService.findById(id).subscribe((data) => {
      console.log(data);
      console.log(id)
      this.house = data
    })
  }

  rent(id: any, price: any) {
    this.order = {
      house: {
        id: id,
        status: 2
      },
      customer: {
        id: localStorage.getItem("ID")
      },
      startTime: new Date(this.rentForm.value.startTime),
      endTime: new Date(this.rentForm.value.endTime),
      total: price * this.period(Number(new Date(this.rentForm.value.startTime)), Number(new Date(this.rentForm.value.endTime))),
      status: 1
    }
    console.log(this.order)
    this.orderService.rentHouse(this.order).subscribe((data) => {
        alert("Thuê thành công")
        // @ts-ignore
      $('#exampleModal').modal('hide')
        this.rentForm.reset()
        this.router.navigate([''])
    })
  }

    period(startTime: number, endTime: number) {
    const diffInMs = Math.abs(endTime - startTime);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

}
