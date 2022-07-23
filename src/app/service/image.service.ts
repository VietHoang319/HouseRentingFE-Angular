import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
}
