import { Component, inject } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { AuthService } from '../../core/services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { signupValidators } from '../../shared/validators/register-validators';
import { Router } from '@angular/router';
import { FormAlertComponent } from '../../shared/form-alert/form-alert.component';
import { UpdateCustomerService } from '../../core/services/update-customer.service';

@Component({
  selector: 'app-setting-profile',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, FormAlertComponent],
  templateUrl: './setting-profile.component.html',
  styleUrl: './setting-profile.component.scss',
})
export class SettingProfileComponent {
  private readonly _Router = inject(Router);
  private readonly _UpdateCustomerService = inject(UpdateCustomerService);
  constructor(public _Nav: AuthService) {}
  updateForm = new FormGroup({
    email: new FormControl(null, Validators.email),
    country: new FormControl(null),
    phone: new FormControl(null),
    fullName: new FormControl(null, Validators.minLength(2)),
  });

  sendData() {
    console.log(this.updateForm.value);
    if (this.updateForm.valid) {
      this._UpdateCustomerService.updateData();
    }
  }
}
