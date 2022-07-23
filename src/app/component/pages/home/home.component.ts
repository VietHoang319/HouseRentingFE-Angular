import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../service/home.service";
import {House} from "../../../model/house";
import {Image} from "../../../model/image";
import {ImageService} from "../../../service/image.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  houses: House[] = []
  images: Image[] = []

  constructor(private homeService : HomeService, private imageService : ImageService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.homeService.getAll().subscribe(data => {
      console.log(data.content)
      this.houses = data.content
      for (let item of this.houses) {
        this.imageService.getFirstImageByHouse(item.id).subscribe(data => {
          this.images.push(data.image)
        }, error => {
          console.log(error)
        })
      }
      console.log(this.images)
    }, error => {
      console.log(error)
    })
  }
}
