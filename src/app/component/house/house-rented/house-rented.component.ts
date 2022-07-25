import { Component, OnInit } from '@angular/core';
import {House} from "../../../model/house";
import {Image} from "../../../model/image";
import {HouseService} from "../../../service/house.service";

@Component({
  selector: 'app-house-rented',
  templateUrl: './house-rented.component.html',
  styleUrls: ['./house-rented.component.css']
})
export class HouseRentedComponent implements OnInit {
  houses: any;

  images: Image[] = []

  id = localStorage.getItem("ID")

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.findHouseRented(this.id);
  }

  findHouseRented(id: any) {
    this.houseService.findHouseRented(id).subscribe(data => {
      console.log(data)
      this.houses = data
    }, error => {
      console.log(error)
    })
  }
}
