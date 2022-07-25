import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {House} from "../model/house";
import {Observable} from "rxjs";
import {Orderr} from "../model/orderr";

const API_URL = environment.apiUrl + "/orders"

@Injectable({
  providedIn: 'root'
})
export class OrderrService {

  constructor(private httpClient: HttpClient) { }

  rentHouse(order: Orderr): Observable<Orderr> {
    return  this.httpClient.post<Orderr>(API_URL, order)
  }
}
