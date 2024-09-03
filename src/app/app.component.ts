import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MobileAppSectionComponent } from './components/mobile-app-section/mobile-app-section.component';
import { BtnComponent } from "./shared/btn/btn.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainFooterComponent, MobileAppSectionComponent, BtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MoneyTransferApp';
}
