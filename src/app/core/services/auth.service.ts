import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  visible: boolean;
  // private readonly _HttpClient = inject(HttpClient);
  constructor() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('sendingAmount');
  }
}