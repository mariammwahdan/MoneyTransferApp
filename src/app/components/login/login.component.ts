import { Component, inject, OnInit } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { AuthFooterComponent } from '../auth-footer/auth-footer.component';
import { FormAlertComponent } from '../../shared/form-alert/form-alert.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { signupValidators } from '../../shared/validators/register-validators';

import { TestAuthService } from '../../core/services/test-auth.service';

import { GetUserInfoService } from './../../core/services/get-user-info.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BtnComponent,
    RouterLink,
    AuthFooterComponent,
    ReactiveFormsModule,
    FormAlertComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginErrorMsg: string = '';
  userId: string = '';
  private readonly _Router = inject(Router);
  private readonly _TestAuthService = inject(TestAuthService);
  private readonly _GetUserInfoService = inject(GetUserInfoService);

  constructor(public _Nav: AuthService) {}
  loginForm = new FormGroup({
    email: new FormControl(null, signupValidators.email),
    password: new FormControl(null, Validators.required),
  });

  sendData() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._TestAuthService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.customerId);
          if (res.message == 'Login Successful') {
            this._Router.navigate([`/home`]);
            localStorage.setItem('token', res.token);

            // this.getUserEmail();
            // this.getUser();
          }
          console.log(res);
          console.log(this.loginForm.value);
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
    // if (this.loginForm.valid) {
    //   localStorage.setItem('token', this.token);
    //   if (Number(localStorage.getItem('sendingAmount')!)) {
    //     this._Router.navigate(['/transferMoney/Amount']);
    //   } else {
    //     this._Router.navigate(['/home']);
    //   }
    // }
  }

  // getUserEmail() {
  //   console.log('email');
  //   this._GetUserInfoService
  //     .getUserByEmail(this.loginForm.get('email')?.value!)
  //     .subscribe({
  //       next: (res) => {
  //         localStorage.setItem('useremail', res.email);
  //         // this._Router.navigate([`/home/${res.email}`]);
  //         this._Router.navigate([`/home`]);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  // }

  // getUserID(){
  //    console.log('id');
  //   this._GetUserInfoService
  //     .getUserByID(this.loginForm.get('email')?.value!)
  //     .subscribe({
  //       next: (res) => {
  //         localStorage.setItem('useremail', res.email);
  //         this._Router.navigate([`/home/${res.email}`]);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  // }

  getUser() {
    console.log('email');
    this._GetUserInfoService.getUser().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this._Nav.hide();
  }
}
