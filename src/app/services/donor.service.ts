import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from '../models/donor/donor';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  apiUrl = "https://localhost:44366"

  constructor(private httpClient:HttpClient) { }

  getAnnouncements():Observable<ListResponseModel<Donor>>{
    let newPath = this.apiUrl+'/getAllAnnouncement';
    return this.httpClient.get<ListResponseModel<Donor>>(newPath);
  }

}
