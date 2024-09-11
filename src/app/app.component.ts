import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MobileAppSectionComponent } from './components/mobile-app-section/mobile-app-section.component';
import { BtnComponent } from './shared/btn/btn.component';
import { Error404Component } from './components/error-404/error-404.component';
import { HomeComponent } from './components/home/home.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TopSectionComponent } from './shared/top-section/top-section.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { Subject } from 'rxjs';
import { AuthService } from './core/services/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MobileAppSectionComponent,
    BtnComponent,
    Error404Component,
    TopSectionComponent,
    HelpPageComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AuthNavbarComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MoneyTransferApp';
  userActivity: any;
  userInactive: Subject<any> = new Subject();

  private readonly _AuthService = inject(AuthService);
  private readonly _Router= inject(Router);

  constructor() {
    this.setTimeout();
    this.userInactive.subscribe(() =>
      console.log('user has been inactive for 3s')
    );
  }

  setTimeout() {
    this.userActivity = setTimeout(() => {
      this.userInactive.next(undefined);
      console.log('logged out');
      if (this._AuthService.isLoggedIn()) {
        this._AuthService.logout();
        this._Router.navigate(['/loggedout']);
      }
    }, 120000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
}
