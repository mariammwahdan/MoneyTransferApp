import { HttpClient, HttpHeaders } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';
import { GetUserInfoService } from './get-user-info.service';
@Injectable({
  providedIn: 'root',
})
export class UpdateCustomerService {
  private readonly _HttpClient = inject(HttpClient);
  private readonly _getUser = inject(GetUserInfoService);
  email = localStorage.getItem('email');
  constructor() { }
  updateData = (userInfo: {
    name: string;
    email: string;
    phoneNumber: string;
  }): Observable<any> => {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._HttpClient.put(
      `${BaseUrl}/api/customer/update?email=${this.email}`,
      userInfo,
      {
        headers,
      }
    );
  };
}
