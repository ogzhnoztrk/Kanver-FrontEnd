import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodType } from '../models/bloodType/bloodType';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BloodTypeService {
  apiUrl = "https://kanver.somee.com/IIS/"
  constructor(private httpClient:HttpClient) { }

  getAllBloodTypes():Observable<ListResponseModel<BloodType>>{
    let newPath = this.apiUrl+'getAllBloodType';
    return this.httpClient.get<ListResponseModel<BloodType>>(newPath);
  }


}