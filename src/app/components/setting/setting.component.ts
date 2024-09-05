import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [BtnComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
})
export class SettingComponent {}
