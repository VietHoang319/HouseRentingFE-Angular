import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HomeService} from "../../../service/home.service";
import {Router} from "@angular/router";
import {House} from "../../../model/house";
import {SearchComponent} from "../../pages/search/search.component";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  houses: House[] = []
  searchForm = new FormGroup({
    address: new FormControl(""),
    price: new FormControl(""),
    bathroom: new FormControl(""),
    bedroom: new FormControl(""),
    cus_begin: new FormControl(""),
    cus_end: new FormControl("")
  })

  constructor(private homeService: HomeService, private router : Router) {
  }

  ngOnInit(): void {
  }

  getSearchForm() {
    let address = this.searchForm.value.address
    let cus_begin = this.searchForm.value.cus_begin
    let cus_end = this.searchForm.value.cus_end
    // @ts-ignore
    let price = document.getElementById("price-range").value
    // @ts-ignore
    let bathroom = +document.getElementById("min-baths").value
    // @ts-ignore
    let bedroom = +document.getElementById("min-bed").value
    let start
    let end

    if (price != "") {
      start = price.split(",")[0]
      end = price.split(",")[1]
    } else {
      start = 0
      end = 100000
    }
    if (bathroom == 0) {
      bathroom = 1
    }
    if (bedroom == 0) {
      bedroom = 1
    }

    this.router.navigate(["/search"], {queryParams: {address: address, start: start, end: end, bathroom : bathroom, bedroom : bedroom, cus_begin : cus_begin, cus_end : cus_end}})
  }
}
