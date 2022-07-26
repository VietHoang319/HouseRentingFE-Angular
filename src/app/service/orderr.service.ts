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

  getAll(): Observable<Orderr> {
    return this.httpClient.get<Orderr>(API_URL)
  }

  findById(id: any): Observable<Orderr> {
    return this.httpClient.get<Orderr>(`${API_URL}/${id}`)
  }

  rentHouse(order: Orderr): Observable<Orderr> {
    return  this.httpClient.post<Orderr>(API_URL, order)
  }

  findByMyId(id: any): Observable<Orderr> {
    return this.httpClient.get<Orderr>(API_URL + '/find-by-customer/' + id)
  }

  update(id: any, order: any): Observable<any> {
    return this.httpClient.put(API_URL + `/${id}`, order);
  }
}
