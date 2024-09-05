import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MobileAppSectionComponent } from './components/mobile-app-section/mobile-app-section.component';
import { BtnComponent } from "./shared/btn/btn.component";
import { Error404Component } from "./components/error-404/error-404.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthNavbarComponent } from "./components/auth-navbar/auth-navbar.component";
import { HeaderComponent } from './components/header/header.component';
import { TopSectionComponent } from "./shared/top-section/top-section.component";
import { HelpPageComponent } from "./components/help-page/help-page.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainFooterComponent, MobileAppSectionComponent, BtnComponent, Error404Component, TopSectionComponent, HelpPageComponent, HomeComponent, AuthNavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MoneyTransferApp';
}
