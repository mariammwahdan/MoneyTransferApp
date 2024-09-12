import { Component, inject, numberAttribute } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { Router, RouterLink } from '@angular/router';
import { TransferMoneyService } from '../../core/services/transfer-money.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-transfer-confirmation',
  standalone: true,
  imports: [BtnComponent, RouterLink,NgIf],
  templateUrl: './transfer-confirmation.component.html',
  styleUrl: './transfer-confirmation.component.scss',
})
export class TransferConfirmationComponent {
  userName;
  recipientName;
  recipientAcc;
  userAccNum;
  amount;
  errorInputMsg: boolean = false;
  isBtnSubmit: boolean = false;

  constructor() {
    this.userName = localStorage.getItem('name');
    this.userAccNum = localStorage.getItem('MyAccNum');
    this.recipientName = localStorage.getItem('recipientName');
    this.recipientAcc = localStorage.getItem('recipientAcc');
    this.amount = localStorage.getItem('amount');
  }

  private readonly _TransferMoneyService = inject(TransferMoneyService);
  private readonly _Router = inject(Router);

  confirmTransaction() {
    let transferInfo: {
      amount: number | null | undefined;
      sendCurrency: string;
      receiverAccNumber: string;
      senderAccNumber: string | null;
    } = {
      amount: Number(this.amount)!,
      sendCurrency: 'EGY',
      receiverAccNumber: this.recipientAcc!,
      senderAccNumber: localStorage.getItem('MyAccNum'),
    };
    this._TransferMoneyService.transferMoney(transferInfo).subscribe({
      next: (res) => {
        console.log(res);
        this._Router.navigate(['/transferMoney/Payment']);
        this.errorInputMsg = false;
        this.isBtnSubmit = false;
      },
      error: (err) => {
        console.log(transferInfo);
        console.log(err);
        if (
          err.message ==
          'Http failure response for https://banquemisr-transfer-service.onrender.com/api/transfer/account: 500 OK'
        ) {
          this.errorInputMsg = true;
        } else {
          this.isBtnSubmit = true;
        }
      },
    });
  }
}
