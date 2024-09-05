import { Component, OnInit } from '@angular/core';
import { MainFooterComponent } from '../main-footer/main-footer.component';
import { MobileAppSectionComponent } from '../mobile-app-section/mobile-app-section.component';
import { AuthService } from '../../core/services/auth.service';
import { TopSectionComponent } from '../../shared/top-section/top-section.component';
import { PaymentComponent } from '../payment/payment.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-account',
  standalone: true,

  imports: [
    MainFooterComponent,
    MobileAppSectionComponent,
    UserProfileComponent,
    PaymentComponent,
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
