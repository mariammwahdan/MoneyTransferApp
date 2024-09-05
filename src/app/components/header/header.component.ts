import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
