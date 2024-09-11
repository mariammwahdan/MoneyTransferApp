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
  recipientName;
  recipientAcc;
  amount;
  private readonly _FavouriteService = inject(FavouriteService);
  constructor() {
    this.recipientName = localStorage.getItem('recipientName');
    this.recipientAcc = localStorage.getItem('recipientAcc');
    this.amount = localStorage.getItem('amount');
  }
  addToFav() {
    this._FavouriteService.addToFavArr({ recipientName: this.recipientName!, recipientAcc: this.recipientAcc! })
  }


}
