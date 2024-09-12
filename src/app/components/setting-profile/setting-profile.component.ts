import { Component, inject } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { AuthService } from '../../core/services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  private readonly _UpdateCustomerService = inject(UpdateCustomerService);

  updateForm = new FormGroup({
    email: new FormControl(null, Validators.email),
    country: new FormControl(null),
    phoneNumber: new FormControl(null),
    name: new FormControl(null, Validators.minLength(2)),
  });

  sendData() {
    console.log(this.updateForm.value);
    if (this.updateForm.valid) {
      console.log(this.updateForm.value);
      let updatedUserInfo = {
        name: this.updateForm.get('name')?.value || '',
        email: this.updateForm.get('email')?.value || '',
        phoneNumber: this.updateForm.get('phoneNumber')?.value || '',
      };

      this._UpdateCustomerService.updateData(updatedUserInfo).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('email', res.email);
          localStorage.setItem('name', res.name);
          localStorage.setItem('phone', res.phoneNumber);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
