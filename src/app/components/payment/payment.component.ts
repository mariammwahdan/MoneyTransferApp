import { Component, inject } from '@angular/core';
import { PaymentHistoryService } from '../../core/services/payment-history.service';
import { copyFileSync } from 'fs';
import {
  Transaction,
  TransactionsObj,
} from '../../core/interfaces/paymentHistory.interface';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  private readonly _PaymentHistoryService = inject(PaymentHistoryService);
  transHistoryObj: any;
  transHistoryArr: Transaction[] = [];

  constructor() {
    this.getPaymentHistory();
  }

  getPaymentHistory() {
    this._PaymentHistoryService.getPaymentHistory().subscribe({
      next: (res) => {
        this.transHistoryObj = res;
        this.transHistoryArr = this.transHistoryObj.transactions;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
