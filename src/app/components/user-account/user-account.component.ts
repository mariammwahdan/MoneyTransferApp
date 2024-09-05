import { Component, OnInit } from '@angular/core';
import { MainFooterComponent } from '../main-footer/main-footer.component';
import { MobileAppSectionComponent } from '../mobile-app-section/mobile-app-section.component';

import { MyProfileComponent } from '../my-profile/my-profile.component';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';

import { AuthService } from '../../core/services/auth.service';
import { TopSectionComponent } from '../../shared/top-section/top-section.component';

@Component({
  selector: 'app-user-account',
  standalone: true,

  imports: [
    MainFooterComponent,
    MobileAppSectionComponent,
    MyProfileComponent,
    PaymentHistoryComponent,
    TopSectionComponent,
  ],

  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss',
})
export class UserAccountComponent implements OnInit {
  constructor(public _Nav: AuthService) {}
  ngOnInit() {
    this._Nav.show();
  }
}
