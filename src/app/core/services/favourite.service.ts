import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  constructor() {}

  addToFav() {
    localStorage.getItem('recipientName');
    localStorage.getItem('recipientAcc');
    console.log(localStorage.getItem('recipientName'));
  }
}
