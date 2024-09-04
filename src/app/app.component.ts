import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MobileAppSectionComponent } from './components/mobile-app-section/mobile-app-section.component';
import { HomeComponent } from "./components/home/home.component";
import { AuthNavbarComponent } from "./components/auth-navbar/auth-navbar.component";
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainFooterComponent, MobileAppSectionComponent, HomeComponent, AuthNavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MoneyTransferApp';
}
