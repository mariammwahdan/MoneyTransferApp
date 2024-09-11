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
    NgFor
  ],
  templateUrl: './transfer-amount.component.html',
  styleUrl: './transfer-amount.component.scss',
})
export class TransferAmountComponent {
  isBtnSubmit: boolean = false;
  private readonly _Router = inject(Router);
  public _FavouriteService = inject(FavouriteService);
  localStorageAmount: any;
  showChild: boolean = false;
  hide: boolean = false;
  favoriteItems: FavItem[] = []

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

  deleteItem() {
    let id = localStorage.getItem('MyAccId')
    this._FavouriteService.deleteFromFavorite(id).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        console.log(err);
      }
    })
  }



  ngOnInit(): void {
    this.localStorageAmount = Number(localStorage.getItem('sendingAmount')!);
    this.myAccountAmountForm.get('amount')?.setValue(this.localStorageAmount);
  }

  sendData() {
    if (this.myAccountAmountForm.valid) {
      this.isBtnSubmit = true;
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

      console.log('Form Submitted', this.myAccountAmountForm.value);
      this._Router.navigate(['/transferMoney/Confirmation']);
    } else {
      this.isBtnSubmit = false;
      console.log('Form is invalid');
    }
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }


  getAllFavorite() {
    this._FavouriteService.getAllFavorite().subscribe({
      next: (res) => {
        this.favoriteItems = res
        console.log(res);

      }, error: (err) => {
        console.log(err);
      }
    })
  }

}
