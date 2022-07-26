import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HomeService} from "../../../service/home.service";
import {ImageService} from "../../../service/image.service";
import {Image} from "../../../model/image";

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.css']
})

export class DetailHouseComponent implements OnInit {
  id: any
  obj: any = [];
  images: Image[] = []
  userId = localStorage.getItem("ID")

  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private homeService: HomeService,
              private imageService : ImageService) {
  }

  ngOnInit(): void {
    console.log(this.userId)
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      this.homeService.findById(this.id).subscribe((houses) => {
        console.log(houses)
        this.obj = houses
      })
      this.imageService.getAllByHouseId(this.id).subscribe(data => {
        console.log(data)
        this.images = data
      })
    })
  }
}
