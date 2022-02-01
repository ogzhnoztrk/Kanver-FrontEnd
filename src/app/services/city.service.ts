import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city/city';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl = "https://localhost:44366/"
  constructor(private httpClient:HttpClient) { }

  getAllCities():Observable<ListResponseModel<City>>{
    let newPath = this.apiUrl+'getAllCity';
    return this.httpClient.get<ListResponseModel<City>>(newPath);
  }


}
