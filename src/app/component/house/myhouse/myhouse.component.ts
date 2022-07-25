import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HomeService} from "../../../service/home.service";
import {HouseService} from "../../../service/house.service";
import {House} from "../../../model/house";
import {Image} from "../../../model/image";
import {ImageService} from "../../../service/image.service";

@Component({
  selector: 'app-myhouse',
  templateUrl: './myhouse.component.html',
  styleUrls: ['./myhouse.component.css']
})
export class MyhouseComponent implements OnInit {

  houses: any
  images: Image[] = []

  id= localStorage.getItem("ID")

  obj: any = [];

  constructor(private houseService:HouseService, private imageService : ImageService) {
  }

  ngOnInit(): void {
    this.findMyHouse(this.id)
  }

  private findMyHouse(id: any) {
    this.houseService.findByOwnerId(id).subscribe((data) => {
      this.houses = data
      for (let item of this.houses) {
        this.imageService.getFirstImageByHouse(item.id).subscribe(data => {
          this.images.push(data.image)
        }, error => {
          console.log(error)
        })
      }
    })
  }
}
