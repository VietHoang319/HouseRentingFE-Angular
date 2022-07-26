import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HomeService} from "../../../service/home.service";
import {House} from "../../../model/house";
import {ActivatedRoute} from "@angular/router";
import {Image} from "../../../model/image";
import {ImageService} from "../../../service/image.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  houses: House[] = []
  images: Image[] = []

  address: string = ""
  start: number = 0
  end: number = 0
  bathroom: number = 0
  bedroom: number = 0
  cus_end: string = ""
  cus_begin: string = ""

  constructor(private homeService: HomeService, private activatedRoute: ActivatedRoute, private imageService : ImageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      if (param.hasOwnProperty("address")) {
        this.address = param["address"]
      }
      if (param.hasOwnProperty("start")) {
        this.start = +param["start"]
      }
      if (param.hasOwnProperty("end")) {
        this.end = +param["end"]
      }
      if (param.hasOwnProperty("bathroom")) {
        this.bathroom = +param["bathroom"]
      }
      if (param.hasOwnProperty("bedroom")) {
        this.bedroom = +param["bedroom"]
      }
      if (param.hasOwnProperty("cus_begin")) {
        this.cus_begin = param["cus_begin"]
      }
      if (param.hasOwnProperty("cus_end")) {
        this.cus_end = param["cus_end"]
      }
      this.getData()
    })
  }

  getData() {
    this.homeService.search(this.address, this.start, this.end, this.bathroom, this.bedroom, this.cus_begin, this.cus_end).subscribe(data => {
      console.log(data)
      this.houses = data
      for (let item of this.houses) {
        // @ts-ignore
        this.imageService.getFirstImageByHouse(item.id).subscribe(data => {
          this.images.push(data.image)
        }, error => {
          console.log(error)
        })
      }
    }, error => {
      console.log(error)
    })
  }
}
