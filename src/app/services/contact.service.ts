import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact    } from 'src/app/models/contact/contact'
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = "https://localhost:44366"

  constructor(private httpClient:HttpClient) { }

  getAnnouncements():Observable<ListResponseModel<Contact>>{
    let newPath = this.apiUrl+'/getAllContact';
    return this.httpClient.get<ListResponseModel<Contact>>(newPath);
  }
}
