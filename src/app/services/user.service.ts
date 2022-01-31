import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user/user';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response-model';
import { ListResponse } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://localhost:44366/';

  constructor(private httpClient: HttpClient) {}

  loginUser(
    mail: string,
    password: string
  ): Observable<ListResponseModel<User>> {
    let newPath = this.apiUrl + 'Login?mail=' + mail + '&password=' + password;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  registerUser(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'postUser', user);
  }

  getUserByEmail(mail: string): Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl + 'getUserByEmail?mail=' + mail;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  getUserById(userId: number): Observable<ListResponse> {
    let newPath = this.apiUrl + 'getUserById?id=' + userId;
    return this.httpClient.get<ListResponse>(newPath);
  }
}
