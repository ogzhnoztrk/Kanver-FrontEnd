
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../models/announcement/announcement';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  apiUrl = "https://localhost:44366"

  constructor(private httpClient:HttpClient) { }

  getAnnouncements():Observable<ListResponseModel<Announcement>>{
    let newPath = this.apiUrl+'/getAllAnnouncement';
    return this.httpClient.get<ListResponseModel<Announcement>>(newPath);
  }
  
  
}
