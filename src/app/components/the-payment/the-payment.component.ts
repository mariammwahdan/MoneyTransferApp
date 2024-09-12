import { Component, inject } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { RouterLink } from '@angular/router';
import { FavouriteService } from '../../core/services/favourite.service';

@Component({
  selector: 'app-the-payment',
  standalone: true,
  imports: [BtnComponent, RouterLink],
  templateUrl: './the-payment.component.html',
  styleUrl: './the-payment.component.scss',
})
export class ThePaymentComponent {
  recipientInfo = {};
  amount;
  userName;
  recipientName;
  recipientAcc;
  userAccNum;
  warningMsg: boolean = false;
  private readonly _FavouriteService = inject(FavouriteService);
  constructor() {
    this.userName = localStorage.getItem('name');
    this.userAccNum = localStorage.getItem('MyAccNum');
    (this.recipientName = localStorage.getItem('recipientName')),
      (this.recipientAcc = localStorage.getItem('recipientAcc')),
      (this.recipientInfo = {
        recipientName: localStorage.getItem('recipientName'),
        accountNumber: localStorage.getItem('recipientAcc'),
      });
    this.amount = localStorage.getItem('amount');
  }
  addToFav() {
    // this._FavouriteService.addToFavArr({ recipientName: this.recipientName!, recipientAcc: this.recipientAcc! })
    console.log(this.recipientInfo);
    this._FavouriteService.addToFavorite(this.recipientInfo).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        if (
          err.message ==
          'Http failure response for https://banquemisr-transfer-service.onrender.com/api/favourites: 409 OK'
        ) {
          this.warningMsg=true
        }
      },
    });
  }
}
