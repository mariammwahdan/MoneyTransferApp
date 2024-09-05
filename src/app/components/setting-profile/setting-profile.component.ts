import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';

@Component({
  selector: 'app-setting-profile',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './setting-profile.component.html',
  styleUrl: './setting-profile.component.scss',
})
export class SettingProfileComponent {}
