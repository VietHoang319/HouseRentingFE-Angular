import { Component, OnInit } from '@angular/core';
import {Form} from "@angular/forms";
const API_URL = 'http://localhost:8080ng '
@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
 house :  any;
  constructor() { }

  ngOnInit(): void {
    this
  }

}
