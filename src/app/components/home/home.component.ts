import { Component } from '@angular/core';
import { MainFooterComponent } from '../main-footer/main-footer.component';
import { HeaderComponent } from '../header/header.component';
import { GettingStartedComponent } from '../getting-started/getting-started.component';
import { MobileAppSectionComponent } from '../mobile-app-section/mobile-app-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainFooterComponent,
    HeaderComponent,
    GettingStartedComponent,
    MobileAppSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
