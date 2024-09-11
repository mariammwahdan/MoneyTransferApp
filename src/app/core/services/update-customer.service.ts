import { HttpClient } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';
@Injectable({
  providedIn: 'root',
})
export class UpdateCustomerService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() {}
  updatedData = {
    name: 'Updated Name',
    email: 'updated@example.com',
  };
  updateData() {
    const apiUrl = '/api/customer/update'; // Your API endpoint
    this._HttpClient.put(apiUrl, this.updatedData).subscribe(
      (response) => {
        console.log('Success:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
