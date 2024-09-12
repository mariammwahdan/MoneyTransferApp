import { Component, inject } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { AuthFooterComponent } from '../auth-footer/auth-footer.component';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { signupValidators } from '../../shared/validators/register-validators';
import { User } from '../../core/interfaces/user';
import { FormAlertComponent } from '../../shared/form-alert/form-alert.component';
import { TestAuthService } from '../../core/services/test-auth.service';
import { GetUserInfoService } from '../../core/services/get-user-info.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    BtnComponent,
    AuthFooterComponent,
    RouterLink,
    NgClass,
    ReactiveFormsModule,
    FormAlertComponent,
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  hide: boolean = false;
  loginErrorMsg: string = '';
  public _Nav = inject(AuthService);
  private readonly _Router = inject(Router);
  private readonly _TestAuthService = inject(TestAuthService);
  private readonly _GetUserInfoService = inject(GetUserInfoService);
  loginForm = new FormGroup({
    email: new FormControl(null, signupValidators.email),
    password: new FormControl(null, Validators.required),
  });

  closing() {
    this.hide = true;
  }

  ngOnInit() {
    this._Nav.hide();
  }

  sendData() {
    if (this.loginForm.valid) {
      this._TestAuthService.login(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.message == 'Login Successful') {
            this._Router.navigate(['/home']);
            localStorage.setItem('token', res.token);
            localStorage.setItem('name', res.name);
            localStorage.setItem('balance', res.balance);
            localStorage.setItem('email', res.email);
            localStorage.setItem('id', res.id);
            this.getUserEmail();
            if (Number(localStorage.getItem('sendingAmount')!)) {
            } else {
              this._Router.navigate(['/home']);
            }
          }
          console.log(res);
        },
        error: (err) => {
          console.log(err);
          console.log(this.loginForm.value);
          if (
            err.message ==
            'Http failure response for https://banquemisr-transfer-service.onrender.com/api/auth/login: 500 OK'
          ) {
            this.loginErrorMsg = ' Invalid Email or Password';
          } else {
            this.loginErrorMsg = ' Login Failed';
          }
        },
      });
    }
  }

  getUserEmail() {
    console.log('email');
    this._GetUserInfoService
      .getUserByEmail(this.loginForm.get('email')?.value!)
      .subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('useremail', res.email);
          localStorage.setItem('MyAccNum', res.accounts[0].accountNumber);
          localStorage.setItem('MyAccId', res.accounts[0].id);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
