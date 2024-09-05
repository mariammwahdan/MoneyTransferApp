
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InitialNamePipe } from '../../core/pipes/initial-name.pipe';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, InitialNamePipe, NgClass, NgIf],
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
}
