import { Customer, Account } from './../../core/interfaces/customer-interface';
import { Component, inject } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { NgClass } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BtnComponent, NgClass, RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerAmountInput: any;
  customer!: Customer;
  customerAccount!: Account;
  customerBalance = localStorage.getItem('balance');
  amountForm = new FormGroup({
    amount: new FormControl(null),
  });
  private readonly _Router = inject(Router);

  constructor(public _Nav: AuthService) {
    if (this._Nav.isLoggedIn()) {
      this.headerAmountInput = Number(localStorage.getItem('sendingAmount'));
      this.amountForm.get('amount')?.setValue(this.headerAmountInput);
    }
  }

  handleContinueBalance() {
    let sendAmount: any = this.amountForm.get('amount')?.value;
    localStorage.setItem('sendingAmount', sendAmount.toString());
    this.amountForm.get('amount')?.setValue(this.headerAmountInput);
    this.headerAmountInput = Number(localStorage.getItem('sendingAmount'));

    if (!this._Nav.isLoggedIn()) {
      this._Router.navigate(['/login']);
    } else {
      console.log(sendAmount);
      this.amountForm.get('amount')?.setValue(this.headerAmountInput);
      this._Router.navigate(['/transferMoney/Amount']);
    }
  }
}
