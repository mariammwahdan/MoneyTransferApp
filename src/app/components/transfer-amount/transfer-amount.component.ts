import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { Router, RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormAlertComponent } from '../../shared/form-alert/form-alert.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FavouriteService } from '../../core/services/favourite.service';
import { FavItem } from '../../core/interfaces/favList-interface';
import { TransferMoneyService } from '../../core/services/transfer-money.service';
import { GetUserInfoService } from '../../core/services/get-user-info.service';

@Component({
  selector: 'app-transfer-amount',
  standalone: true,
  imports: [
    BtnComponent,
    RouterOutlet,
    ReactiveFormsModule,
    FormAlertComponent,
    NgIf,
    NgClass,
    NgFor,
  ],
  templateUrl: './transfer-amount.component.html',
  styleUrl: './transfer-amount.component.scss',
})
export class TransferAmountComponent {
  isBtnSubmit: boolean = false;
  private readonly _Router = inject(Router);
  public _FavouriteService = inject(FavouriteService);
  public _GetUserInfoService = inject(GetUserInfoService);
  public _TransferMoneyService = inject(TransferMoneyService);
  localStorageAmount: any;
  showChild: boolean = false;
  hide: boolean = false;
  favoriteItems: FavItem[] = [];
  email: string = '';
  MyAccNum: string = '';
  currency: string = '';
  errorInputMsg: boolean = false;

  getUserEmail() {
    console.log('email');
    this._GetUserInfoService
      .getUserByEmail(localStorage.getItem('email')!)
      .subscribe({
        next: (res) => {
          console.log(res);
          console.log(res.email);
          this.email = res.email;
          this.MyAccNum = res.accounts[0].accountNumber;
          this.currency = res.accounts[0].currency;
          console.log(res.MyAccNum);
          // this.email = res.
          // this._Router.navigate([`/home/${res.email}`]);
          // this._Router.navigate([`/home`]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  myAccountAmountForm = new FormGroup({
    amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    recipientName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    recipientAccount: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  amount = this.myAccountAmountForm.get('amount')?.value;
  receiverAccNumber = `${
    this.myAccountAmountForm.get('recipientAccount')?.value
  }`;
  deleteItem() {
    let id = localStorage.getItem('MyAccId');
    this._FavouriteService.deleteFromFavorite(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.localStorageAmount = Number(localStorage.getItem('sendingAmount')!);
    this.myAccountAmountForm.get('amount')?.setValue(this.localStorageAmount);
  }

  sendData() {
    if (this.myAccountAmountForm.valid) {
      this.isBtnSubmit = false;
      let transferInfo: {
        amount: number | null | undefined;
        sendCurrency: string;
        receiverAccNumber: string;
        senderAccNumber: string | null;
      } = {
        amount: this.myAccountAmountForm.get('amount')?.value,
        sendCurrency: 'EGY',
        receiverAccNumber:
          '' + this.myAccountAmountForm.get('recipientAccount')?.value,
        senderAccNumber: localStorage.getItem('MyAccNum'),
      };

      this._TransferMoneyService.transferMoney(transferInfo).subscribe({
        next: (res) => {
          console.log(res);
          this._Router.navigate(['/transferMoney/Confirmation']);
          this.isBtnSubmit = false;
          this.errorInputMsg = false;
        },
        error: (err) => {
          console.log(transferInfo);
          console.log(err);
          this.getUserEmail();
          if (
            err.message ==
            'Http failure response for https://banquemisr-transfer-service.onrender.com/api/transfer/account: 500 OK'
          ) {
            this.errorInputMsg = true;
          }else{
            this.isBtnSubmit = true;
          }
          console.log('err');
        },
      });
      localStorage.setItem(
        'recipientName',
        this.myAccountAmountForm.get('recipientName')?.value!
      );
      localStorage.setItem(
        'recipientAcc',
        this.myAccountAmountForm.get('recipientAccount')?.value!
      );
      localStorage.setItem(
        'amount',
        this.myAccountAmountForm.get('amount')?.value!
      );
    }
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }

  getAllFavorite() {
    this._FavouriteService.getAllFavorite().subscribe({
      next: (res) => {
        this.favoriteItems = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
