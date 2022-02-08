import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaint } from '../models/complaint/complaint';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response-model';
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  apiUrl = "https://kanver.somee.com/IIS/"

  constructor(private httpClient:HttpClient) { }

  add(complaint: Complaint):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"postComplaint",complaint)

  }
}
