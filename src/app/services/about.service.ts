import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about/about';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  apiUrl = "https://kanver.somee.com/IIS/"

  constructor(private httpClient:HttpClient) { }

  getAnnouncements():Observable<ListResponseModel<About>>{
    let newPath = this.apiUrl+'getAllAbout';
    return this.httpClient.get<ListResponseModel<About>>(newPath);
  }
}
