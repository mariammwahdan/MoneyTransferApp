import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {}
