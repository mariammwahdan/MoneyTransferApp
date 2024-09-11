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
  public _Nav = inject(AuthService);
  private readonly _Router = inject(Router);
  token = '667ghb';
  loginForm = new FormGroup({
    email: new FormControl(null, signupValidators.email),
    password: new FormControl(null, Validators.required),
  });

  closing() {
    // console.log('cloooooooooooooosed');
    this.hide = true;
  }

  ngOnInit() {
    this._Nav.hide();
  }

  users: User[] = [
    {
      email: 'aml@gmail.com',
      password: 'Aml@123',
    },
  ];

  sendData() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      localStorage.setItem('token', this.token);
      if (Number(localStorage.getItem('sendingAmount')!)) {
        this._Router.navigate(['/transferMoney/Amount']);
      } else {
        this._Router.navigate(['/home']);
      }
    }
  }
}
