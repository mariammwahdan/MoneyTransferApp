import { Component, Input } from '@angular/core';
import { BlobOptions } from 'node:buffer';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss',
})
export class BtnComponent {
  @Input() label: string = '';
  @Input() dark: boolean = true;
  @Input() light: boolean = false;
  @Input() outline: boolean = false;
  @Input() largeBtn: boolean = false;
}
