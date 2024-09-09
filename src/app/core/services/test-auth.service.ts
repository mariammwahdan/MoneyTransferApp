import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../environment/local-environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TestAuthService {
  // private readonly _HttpClient = inject(HttpClient);
  constructor() { }

  // register = (user: any): Observable<any> => {
  //   return this._HttpClient.post(baseUrl + '/api/auth/register', user)
  // }

}
