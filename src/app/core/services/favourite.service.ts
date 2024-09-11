import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  constructor() { }
  private readonly _HttpClient = inject(HttpClient);

  favArr = [
    {
      recipientName: localStorage.getItem('recipientName'),
      recipientAcc: localStorage.getItem('recipientAcc')
    }
  ]


  setValueLocal(recipientName: string, recipientAcc: string) {
    // for (let i = 0; i <= this.favArr.length; i++) {
    recipientName: localStorage.setItem('recipientName', recipientName);
    recipientAcc: localStorage.setItem('recipientName', recipientAcc);
    // }
    this.addToFavArr({
      recipientName: recipientName,
      recipientAcc: recipientAcc
    });
  }
  addToFavModal() {

  }

  addToFavArr(recipientInfo: { recipientName: string, recipientAcc: string }) {
    this.favArr.push(recipientInfo)
    console.log(this.favArr);
    // return favArr;
  }
  getFromFav() {
    return this.favArr.map(recipient => ({
      recipientName: recipient.recipientName,
      recipientAcc: recipient.recipientAcc
    }));
  }

  getAllFavorite = (): Observable<any> => {
    return this._HttpClient.get(BaseUrl + '/api/favourites ');
  };

  addToFavorite = (recipientInfo: any): Observable<any> => {
    return this._HttpClient.post(BaseUrl + '/api/favourites ', recipientInfo);
  };

  deleteFromFavorite = (recipientId: any): Observable<any> => {
    return this._HttpClient.delete(BaseUrl + `/api/favourites/${recipientId} `);
  };
}
