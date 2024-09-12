import { Component, inject } from '@angular/core';
import { TestAuthService } from '../../core/services/test-auth.service';
import { Account } from '../../core/interfaces/customer-interface';
import { GetUserInfoService } from '../../core/services/get-user-info.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  private readonly _GetUserInfoService = inject(GetUserInfoService);
  name = localStorage.getItem('name');
  email = localStorage.getItem('email');
  customerAccount!: Account;
  customerBalance = localStorage.getItem('balance');

  getUserBalance() {
    let accNum = localStorage.getItem('MyAccNum')!;
    this._GetUserInfoService.getUserBalance(accNum).subscribe({
      next: (res) => {
        console.log(res);
        this.customerBalance = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getUserBalance();
  }
}
