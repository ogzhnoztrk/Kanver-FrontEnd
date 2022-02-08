import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact    } from 'src/app/models/contact/contact'
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = "https://kanver.somee.com/IIS/"

  constructor(private httpClient:HttpClient) { }

  getContacts():Observable<ListResponseModel<Contact>>{
    let newPath = this.apiUrl+'getAllContact';
    return this.httpClient.get<ListResponseModel<Contact>>(newPath);
  }
}
