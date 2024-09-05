import { Component } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { NgClass } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BtnComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public _Nav: AuthService) { }
}

