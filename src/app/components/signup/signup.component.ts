import { Component, OnInit, inject } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { AuthFooterComponent } from '../auth-footer/auth-footer.component';
import {
  countries,
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
  countries = countries;
  months = months;
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
      rePassword: new FormControl(null),
    },
    this.confirmPassword
  );

  confirmPassword(g: AbstractControl) {
    return g.get('password')?.value == g.get('rePassword')?.value
      ? null
      : { mismatch: true };
  }

  users: User[] = [
    {
      name: 'Aml',
      email: 'aml@gmail.com',
      country: 'Egypt',
      dateOfBirth: '1-12-2001',
      password: 'Aml@123',
      rePassword: 'Aml@123',
    },
  ];
  collectDateOfBirth() {
    const dateOfBirth =
      this.registerForm.get('dayOfBirth')?.value +
      '-' +
      this.registerForm.get('monthOfBirth')?.value +
      '-' +
      this.registerForm.get('yearOfBirth')?.value;
    console.log(this.registerForm.get('yearOfBirth'));

    console.log(dateOfBirth);
    return dateOfBirth;
  }

  sendData() {
    //   // this._TestAuthService.register(this.register.value).subscribe((res) => {
    //   //   console.log(res)
    //   // })
    // console.log(this.users);

    if (this.registerForm.valid) {
      this.users.push({
        name: this.registerForm.get('name')?.value!,
        email: this.registerForm.get('email')?.value!,
        country: this.registerForm.get('country')?.value!,
        dateOfBirth: this.collectDateOfBirth(),
        password: this.registerForm.get('password')?.value!,
        rePassword: this.registerForm.get('rePassword')?.value!,
      });
      this._Router.navigate(['/login']);
      console.log(this.registerForm);
      console.log(this.registerForm.get('country'));
      console.log(this.users);
    } else {
      console.log('error');
    }
  }
}
