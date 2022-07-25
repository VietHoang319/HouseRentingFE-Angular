import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HomeService} from "../../../service/home.service";
import {House} from "../../../model/house";

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.css']
})

export class DetailHouseComponent implements OnInit {
  id: any
  obj: any = [];
  userId = localStorage.getItem("ID")
  isUser = false;

  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      console.log(this.userId)
      this.homeService.findById(this.id).subscribe((houses) => {
        console.log(houses)
        this.obj = houses

      })
    })
  }
}
