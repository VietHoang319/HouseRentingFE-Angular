import {Component, Input, OnInit} from '@angular/core';
import {House} from "../../../model/house";
import {Image} from "../../../model/image";

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

  constructor() { }

  ngOnInit(): void {
  }

}
