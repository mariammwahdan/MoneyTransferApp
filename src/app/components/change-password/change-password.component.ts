import { Component, inject } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { signupValidators } from '../../shared/validators/register-validators';
import { FormAlertComponent } from "../../shared/form-alert/form-alert.component";

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, FormAlertComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {
  private readonly _Router = inject(Router);

  constructor(public _Nav: AuthService) {}
  updatePass = new FormGroup({
    currentPass: new FormControl(null, signupValidators.password),
    newPass: new FormControl(null, signupValidators.password),
  });

  confirmPassword(g: AbstractControl) {
    return g.get('currentPass')?.value !== g.get('newPass')?.value
      ? null
      : { mismatch: true };
  }

  sendData() {
    console.log(this.updatePass.value);
    console.log(this.updatePass)
    if (this.updatePass.valid) {

    }
  }
}
