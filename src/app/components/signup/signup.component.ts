import { Component, OnInit, inject } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { AuthFooterComponent } from "../auth-footer/auth-footer.component";
import { countries, months, years } from '../../core/environment/signup-info.component';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { signupValidators } from '../../shared/validators/register-validators';
import { TestAuthService } from '../../core/services/test-auth.service';
import { FormAlertComponent } from "../../shared/form-alert/form-alert.component";
import { User } from '../../core/interfaces/user';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [BtnComponent, RouterLink, AuthFooterComponent, ReactiveFormsModule, FormAlertComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  countries = countries
  months = months
  years: any = years;
  private readonly _TestAuthService = inject(TestAuthService)
  constructor(public _Nav: AuthService) {
    const currentYear = new Date().getFullYear();
    for (let year = 1990; year <= currentYear; year++) {
      this.years.push(year);
      // console.log(year)
    }
  }
  registerForm = new FormGroup({
    name: new FormControl(null, signupValidators.name),
    email: new FormControl(null, signupValidators.email),
    country: new FormControl(null, Validators.required),
    // dayOfValidators: new FormControl(null, Validators.required),
    // monthOfValidators: new FormControl(null, Validators.required),
    // yearOfValidators: new FormControl(null, Validators.required),
    password: new FormControl(null, signupValidators.password),
    rePassword: new FormControl(null)
  }, this.confirmPassword)

  ngOnInit() {
    this._Nav.hide();

  }


  confirmPassword(g: AbstractControl) {
    return g.get('password')?.value == g.get('rePassword')?.value ? null : { mismatch: true }
  }

  users: User[] = [
    {
      name: "Aml",
      email: "aml@gmail.com",
      country: 'Egypt',
      password: "Aml@123",
      rePassword: "Aml@123",
    }
  ];


  sendData() {
    //   // this._TestAuthService.register(this.register.value).subscribe((res) => {
    //   //   console.log(res)
    //   // })
    if (this.registerForm.valid) {
      this.users.push({
        name: this.registerForm.get('name')?.value!,
        email: this.registerForm.get('email')?.value!,
        country: this.registerForm.get('country')?.value!,
        // day: this.registerForm.get('dayOfValidators')?.value,
        // month: this.registerForm.get('monthOfValidators')?.value,
        // year: this.registerForm.get('yearOfValidators')?.value,
        password: this.registerForm.get('password')?.value!,
        rePassword: this.registerForm.get('rePassword')?.value!
      })
      console.log(this.registerForm);
      console.log(this.registerForm.get('country'));
      console.log(this.users);
    }



  }
}
