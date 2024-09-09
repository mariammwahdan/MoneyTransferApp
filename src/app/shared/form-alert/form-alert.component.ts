import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-alert',
  standalone: true,
  imports: [],
  templateUrl: './form-alert.component.html',
  styleUrl: './form-alert.component.scss'
})
export class FormAlertComponent {
  @Input() formName!: FormGroup;
  @Input() formControlName!: string;

}
