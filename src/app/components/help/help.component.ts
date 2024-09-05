import { Component } from '@angular/core';
import { MainFooterComponent } from '../main-footer/main-footer.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [MainFooterComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
})
export class HelpComponent {}
