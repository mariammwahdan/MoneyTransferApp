import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';

@Component({
  selector: 'app-transfer-amount',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './transfer-amount.component.html',
  styleUrl: './transfer-amount.component.scss',
})
export class TransferAmountComponent {}
