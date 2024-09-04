import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InitialNamePipe } from '../../core/pipes/initial-name.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-auth-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, InitialNamePipe, NgClass],
  templateUrl: './auth-navbar.component.html',
  styleUrl: './auth-navbar.component.scss'
})
export class AuthNavbarComponent {


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
