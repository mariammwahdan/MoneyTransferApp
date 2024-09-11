import { Component, OnInit, inject } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { AuthFooterComponent } from '../auth-footer/auth-footer.component';
import {
  countries,
  days,
  months,
  years,
} from '../../core/environment/signup-info.component';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { signupValidators } from '../../shared/validators/register-validators';
import { TestAuthService } from '../../core/services/test-auth.service';
import { FormAlertComponent } from '../../shared/form-alert/form-alert.component';
import { User } from '../../core/interfaces/user';
import { log } from 'console';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    BtnComponent,
    RouterLink,
    AuthFooterComponent,
    ReactiveFormsModule,
    FormAlertComponent,
    NgIf,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  registerErrorMsg: string = '';
  countries = countries;
  months = months;
  days = days;
  years: any = years;
  private readonly _TestAuthService = inject(TestAuthService);
  private readonly _Router = inject(Router);

  constructor(public _Nav: AuthService) {
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    for (let year = 1990; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  ngOnInit() {
    this._Nav.hide();
  }

  registerForm = new FormGroup(
    {
      name: new FormControl(null, signupValidators.name),
      email: new FormControl(null, signupValidators.email),
      country: new FormControl(null, Validators.required),
      dayOfBirth: new FormControl(null, signupValidators.day),
      monthOfBirth: new FormControl(null, Validators.required),
      yearOfBirth: new FormControl(null, signupValidators.year),
      password: new FormControl(null, signupValidators.password),
      confirmPassword: new FormControl(null),
    },
    this.confirmPassword
  );

  confirmPassword(g: AbstractControl) {
    return g.get('password')?.value == g.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  users: User[] = [
    {
      name: 'Aml',
      email: 'aml@gmail.com',
      country: 'Egypt',
      birthDate: '1-12-2001',
      password: 'Aml@123',
      confirmPassword: 'Aml@123',
    },
  ];

  collectDateOfBirth() {
    const dateOfBirth =
      this.registerForm.get('yearOfBirth')?.value +
      '-' +
      this.registerForm.get('monthOfBirth')?.value +
      '-' +
      this.registerForm.get('dayOfBirth')?.value;

    // console.log(this.registerForm.get('yearOfBirth'));
    // console.log(dateOfBirth);
    return dateOfBirth;
  }

  sendData() {
    let registerFormValue = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      confirmPassword: this.registerForm.get('confirmPassword')?.value,
      country: this.registerForm.get('country')?.value,
      birthDate: this.collectDateOfBirth(),
    };

    if (this.registerForm.valid) {
      this._TestAuthService.register(registerFormValue).subscribe({
        next: (res) => {
          if (res.message == 'Customer Registered successfully') {
            this._Router.navigate(['/login']);
          }
          console.log(res);
          console.log(registerFormValue);
        },
        error: (err) => {
          console.log(err);
          console.log(registerFormValue);
          console.log(this.registerForm.value);

          if (
            err.message ==
            'Http failure response for https://banquemisr-transfer-service.onrender.com/api/auth/register: 500 OK'
          ) {
            this.registerErrorMsg = ' This Account is Already Exist';
          } else {
            this.registerErrorMsg = ' Register Failed';
          }
        },
      });
    }

    console.log(this.users);
  }
}
