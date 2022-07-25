import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {House} from "../model/house";

const API_URL = environment.apiUrl + "/homes"

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(API_URL)
  }

  findById(id: string): Observable<House> {
    return this.httpClient.get<House>(`${API_URL}/${id}`);
  }
}
