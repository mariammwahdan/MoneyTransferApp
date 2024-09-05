import { Component } from '@angular/core';
import { MainFooterComponent } from '../main-footer/main-footer.component';
import { MobileAppSectionComponent } from '../mobile-app-section/mobile-app-section.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [
    MainFooterComponent,
    MobileAppSectionComponent,
    MyProfileComponent,
    PaymentHistoryComponent,
  ],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss',
})
export class UserAccountComponent {}
