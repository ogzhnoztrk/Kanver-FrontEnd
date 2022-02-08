
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../models/announcement/announcement';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/response-model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  apiUrl = "https://kanver.somee.com/IIS/"

  constructor(private httpClient:HttpClient) { }

  getAnnouncements():Observable<ListResponseModel<Announcement>>{
    let newPath = this.apiUrl+'getAllAnnouncement';
    return this.httpClient.get<ListResponseModel<Announcement>>(newPath);
  }
  
  addAnnouncement(announcement:Announcement ):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>
    (this.apiUrl+"postAnnouncement",announcement)  }
  
}
