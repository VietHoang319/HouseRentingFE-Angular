import {Component, Input, OnInit} from '@angular/core';
import {House} from "../../../model/house";
import {Image} from "../../../model/image";
import {ImageService} from "../../../service/image.service";

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  @Input()
  houses: House[] = []

  @Input()
  images: Image[] = []

  constructor(private imageService: ImageService ) { }

  ngOnInit(): void {
  }

}
