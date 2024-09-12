import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';

@Injectable({
  providedIn: 'root',
})

export class TestAuthService {

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
