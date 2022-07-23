import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../model/house";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})

export class HouseService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<House[]> {
    return this.httpClient.get<House[]>(API_URL + '/homes');
  }

  saveHouse(house: any): Observable<House> {
    return this.httpClient.post<House>(API_URL + '/houses', house);
  }

  findById(id: number): Observable<House> {
    return this.httpClient.get<House>(API_URL + '/houses/' + id);
  }

  updateHouse(id: number, house: House): Observable<House> {
    return this.httpClient.put<House>(API_URL + '/houses/' + id, house);
  }

  deleteHouse(id: number): Observable<House> {
    return this.httpClient.delete<House>(API_URL + '/houses/' + id);
  }

}
