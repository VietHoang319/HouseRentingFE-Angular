import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../service/home.service";
import {House} from "../../../model/house";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  houses: House[] = []

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.homeService.getAll().subscribe(data => {
      console.log(data.content)
      this.houses = data.content
    }, error => {
      console.log(error)
    })
  }
}
