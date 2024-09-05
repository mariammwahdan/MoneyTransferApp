import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss',
})
export class MainFooterComponent {
  constructor(public _Nav: AuthService) { }
}
