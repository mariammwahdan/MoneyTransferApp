import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class TransferMoneyService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() { }

  transferMoney = (transferInfo: any): Observable<any> => {
    const token = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._HttpClient.post(BaseUrl + 'api/transfer/account ', transferInfo, { headers });
  };


}
