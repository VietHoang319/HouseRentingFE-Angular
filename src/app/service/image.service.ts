import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const API_URL = environment.apiUrl + "/images"

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient : HttpClient) { }

  getFirstImageByHouse(id: number) : Observable<any> {
    return this.httpClient.get(API_URL + `/${id}`)
  }

  getAllByHouseId(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.httpClient.get(API_URL + "/find-all-by-house-id", {params: queryParams})
  }
}
