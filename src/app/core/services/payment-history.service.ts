import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BaseUrl } from '../environment/BaseUrl';

@Injectable({
  providedIn: 'root',
})
export class PaymentHistoryService {
  private readonly _HttpClient = inject(HttpClient);

  constructor() {}

  getPaymentHistory() {
    const token = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._HttpClient.get(BaseUrl + '/api/transactions/history', {
      headers,
    });
  }
}
