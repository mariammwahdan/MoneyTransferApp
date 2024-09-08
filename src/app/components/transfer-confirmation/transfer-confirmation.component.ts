import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';

@Component({
  selector: 'app-transfer-confirmation',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './transfer-confirmation.component.html',
  styleUrl: './transfer-confirmation.component.scss',
})
export class TransferConfirmationComponent {}
