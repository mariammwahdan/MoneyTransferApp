import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetUserInfoService {
  private readonly _HttpClient = inject(HttpClient);

  getUserByEmail = (userEmail: string): Observable<any> => {
    return this._HttpClient.get(BaseUrl + `/api/customer/email/${userEmail}`);
  };
  getUserByID = (userID: string): Observable<any> => {
    return this._HttpClient.get(BaseUrl + `/api/customer/${userID}`);
  };

  getUser = (): Observable<any> => {
    return this._HttpClient.get(BaseUrl + `/api/customer`);
  };

}
