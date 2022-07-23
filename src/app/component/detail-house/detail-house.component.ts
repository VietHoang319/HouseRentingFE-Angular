import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.css']
})

export class DetailHouseComponent implements OnInit {
  id: string = "1"
  obj: any = [];


  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // this.httpClient.get('http://localhost:8080/homes/' + param.get('id')).subscribe((data) => {
      this.httpClient.get('http://localhost:8080/homes/' + this.id).subscribe((data) => {
        this.obj = data
      })
    })
  }
}
