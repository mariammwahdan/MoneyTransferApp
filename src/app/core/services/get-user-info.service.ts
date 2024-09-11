import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetUserInfoService {
  private readonly _HttpClient = inject(HttpClient);
  token = 'Bearer ' + localStorage.getItem('token');
  header = new Headers({
    'Content-Type': 'application/json',
    'Authorization': this.token
  });
  // getUserByEmail = (userEmail: string): Observable<any> => {
  //   return this._HttpClient.get(BaseUrl + `/api/customer/email/${userEmail}`);
  // };


  getUserByEmail = (userEmail: string): Observable<any> => {
    const token = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._HttpClient.get(BaseUrl + `/api/customer/email/${userEmail}`, {
      headers,
    });
  };


  getUserByID = (userID: string): Observable<any> => {
    return this._HttpClient.get(BaseUrl + `/api/customer/${userID}`);
  };

  getUser = (): Observable<any> => {
    const token = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });

    return this._HttpClient.get(BaseUrl + '/api/customer', { headers });
  };

}
