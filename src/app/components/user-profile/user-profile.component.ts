import { Component, inject } from '@angular/core';
import { TestAuthService } from '../../core/services/test-auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  private readonly _TestAuthService = inject(TestAuthService);
  name = this._TestAuthService.custmoer[0].name
  email = this._TestAuthService.custmoer[0].email
  gender = this._TestAuthService.custmoer[0].gender
  phoneNum = this._TestAuthService.custmoer[0].phoneNumber
  balance = this._TestAuthService.custmoer[0].accounts[0].balance;
}
