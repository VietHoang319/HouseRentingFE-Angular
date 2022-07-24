import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HomeService} from "../../../service/home.service";
import {House} from "../../../model/house";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  houses: House[] = []

  address: string = ""
  start: number = 0
  end: number = 0
  bathroom: number = 0
  bedroom: number = 0
  cus_end: string = ""
  cus_begin: string = ""

  constructor(private homeService : HomeService, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      console.log(param)
      this.address = param.address;
      console.log(this.address)
    })
  }


  getData() {
    // this.homeService.search(<string>address, start, end, bathroom, bedroom, <string>cus_begin, <string>cus_end).subscribe(data => {
    //   console.log(data)
    //   this.houses = data
    // }, error => {
    //   console.log(error)
    // })
  }
}
