import { Component, inject, OnInit } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { AuthFooterComponent } from "../auth-footer/auth-footer.component";
import { FormAlertComponent } from '../../shared/form-alert/form-alert.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { signupValidators } from '../../shared/validators/register-validators';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnComponent, RouterLink, AuthFooterComponent, ReactiveFormsModule, FormAlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly _Router = inject(Router);
  token = "667ghb";
  constructor(public _Nav: AuthService) { }
  loginForm = new FormGroup({
    email: new FormControl(null, signupValidators.email),
    password: new FormControl(null, signupValidators.password),
  })
  users: User[] = [
    {
      email: "aml@gmail.com",
      password: "Aml@123",
    }
  ];

  sendData() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      localStorage.setItem('token', this.token)
      this._Router.navigate(['/home'])
    }

  }

  ngOnInit() {
    this._Nav.hide();
  }
}
