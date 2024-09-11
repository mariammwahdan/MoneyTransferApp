import { HttpClient, HttpHeaders } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';
@Injectable({
  providedIn: 'root',
})
export class UpdateCustomerService {
  private readonly _HttpClient = inject(HttpClient);
  email = localStorage.getItem('email');
  constructor() {}

  updateData = (userInfo: {
    name: string;
    email: string;
    phoneNumber: string;
  }): Observable<any> => {
    const token = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._HttpClient.put(
      BaseUrl + `api/customer/update/${this.email} `,
      userInfo,
      {
        headers,
      }
    );
  };
}
