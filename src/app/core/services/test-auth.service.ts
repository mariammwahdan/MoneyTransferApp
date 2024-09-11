import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Customer } from '../interfaces/customer-interface';
import { BaseUrl } from '../environment/BaseUrl';
@Injectable({
  providedIn: 'root',
})
export class TestAuthService {
  custmoer: Customer[] = [
    {
      name: 'Aml Ali',
      email: 'aml@gmail.com',
      country: 'Egypt',
      gender: 'Female',
      phoneNumber: '010397038',
      birthDate: '1-12-2001',
      password: 'Aml@123',
      rePassword: 'Aml@123',
      accounts: [
        {
          id: 0,
          accountNumber: 'ofoew 7426',
          accountType: 'checking',
          balance: 20000,
          currency: '1000',
          accountName: 'Aml',
        },
      ],
    },
  ];

  users: User[] = [
    {
      name: 'Aml',
      email: 'aml@gmail.com',
      country: 'Egypt',
      birthDate: '1-12-2001',
      password: 'Aml@123',
      confirmPassword: 'Aml@123',
    },
  ];

  private readonly _HttpClient = inject(HttpClient);
  constructor() { }

  register = (user: any): Observable<any> => {
    return this._HttpClient.post(BaseUrl + '/api/auth/register', user);
  };

  login = (user: any): Observable<any> => {
    return this._HttpClient.post(BaseUrl + '/api/auth/login', user);
  };

  updateByEmail = (user: any): Observable<any> => {
    return this._HttpClient.put(BaseUrl + '/api/auth/login', user);
  };


}
