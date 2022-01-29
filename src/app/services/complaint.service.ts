import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaint } from '../models/complaint/complaint';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  apiUrl = "https://localhost:44366"

  constructor(private httpClient:HttpClient) { }

  getAnnouncements():Observable<ListResponseModel<Complaint>>{
    let newPath = this.apiUrl+'/getAllAnnouncement';
    return this.httpClient.get<ListResponseModel<Complaint>>(newPath);
  }
}
