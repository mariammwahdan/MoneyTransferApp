
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InitialNamePipe } from '../../core/pipes/initial-name.pipe';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { BtnComponent } from "../../shared/btn/btn.component";

@Component({
  selector: 'app-auth-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, InitialNamePipe, NgClass, NgIf, BtnComponent],
  templateUrl: './auth-navbar.component.html',
  styleUrl: './auth-navbar.component.scss'
})
export class AuthNavbarComponent {
  constructor(public _Nav: AuthService) { }
  user = {
    name: 'Jonathon Smith',
  }

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
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
