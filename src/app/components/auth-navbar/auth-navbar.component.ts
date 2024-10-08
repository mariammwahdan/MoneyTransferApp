import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InitialNamePipe } from '../../core/pipes/initial-name.pipe';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { BtnComponent } from '../../shared/btn/btn.component';
import { TestAuthService } from '../../core/services/test-auth.service';

@Component({
  selector: 'app-auth-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    InitialNamePipe,
    NgClass,
    NgIf,
    BtnComponent,
  ],
  templateUrl: './auth-navbar.component.html',
  styleUrl: './auth-navbar.component.scss',
})
export class AuthNavbarComponent {
  private readonly _TestAuthService = inject(TestAuthService);
  isOpen = false;
  name:string="";
  constructor(public _Nav: AuthService) {
  }

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
    this._Nav.logout();
  }

  ngOnInit(): void {
        this.name = localStorage.getItem('name')!;
    
  }
}
