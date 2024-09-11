import { Customer, Account } from './../../core/interfaces/customer-interface';
import { Component, inject, OnInit } from '@angular/core';
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
    // handle validation of amount < balance
  });
  private readonly _Router = inject(Router);

  constructor(public _Nav: AuthService) {
    // this.amountForm.get('amount')?.setValue('1000')
    this.customerAccount = {
      id: 7777777777,
      accountNumber: 'string',
      accountType: 'string',
      balance: 20000,
      currency: 'string',
      accountName: 'string',
      accountDescription: 'string',
      active: true,
      createdAt: 'string',
      updatedAt: 'string',
    };
    this.customer = {
      id: 7777777777,
      name: 'string',
      email: 'string',
      phoneNumber: 'string',
      gender: 'string',
      birthDate: 'string',
      username: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      accounts: [this.customerAccount],
    };

    // this.customerBalance = this.customer.accounts[0].balance
    //console.log(this.customerBalance);
    // this.amountForm.get('amount')?.setValue(this.headerAmountInput)
    //this.amountForm.get('amount')?.setValue(this.headerAmountInput);
  }

  handleContinueBalance() {
    let sendAmount: any = this.amountForm.get('amount')?.value;
    localStorage.setItem('sendingAmount', sendAmount.toString());
    this.amountForm.get('amount')?.setValue(this.headerAmountInput);
    this.headerAmountInput = Number(localStorage.getItem('sendingAmount'));

    if (!this._Nav.isLoggedIn()) {
      this._Router.navigate(['/login']);
      // localStorage.setItem('sendingAmount', this.headerAmountInput)
      // this.amountForm.get('amount')?.setValue(this.headerAmountInput)
    } else {
      console.log(sendAmount);
      this.amountForm.get('amount')?.setValue(this.headerAmountInput);
      this._Router.navigate(['/transferMoney/Amount']);
    }
  }
}
