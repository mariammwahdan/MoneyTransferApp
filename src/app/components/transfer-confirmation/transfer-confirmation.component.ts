import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transfer-confirmation',
  standalone: true,
  imports: [BtnComponent, RouterLink],
  templateUrl: './transfer-confirmation.component.html',
  styleUrl: './transfer-confirmation.component.scss',
})
export class TransferConfirmationComponent {
  recipientName;
  recipientAcc;
  amount;
  constructor() {
    this.recipientName = localStorage.getItem('recipientName');
    this.recipientAcc = localStorage.getItem('recipientAcc');
    this.amount = localStorage.getItem('amount');
  }
}
