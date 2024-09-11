import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../environment/BaseUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const token = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._HttpClient.get(BaseUrl + '/api/favourites', { headers });
  };


  // addToFavorite = (recipientInfo: any): Observable<any> => {
  //   const token = 'Bearer ' + localStorage.getItem('token');
  //   const header = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': token
  //   });
  //   const options = {
  //     headers: header
  //   }
  //   return this._HttpClient.post(BaseUrl + '/api/favourites ', {
  //     recipientInfo: recipientInfo, options
  //   });
  // };
  addToFavorite = (recipientInfo: any): Observable<any> => {
    const token = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._HttpClient.post(BaseUrl + '/api/favourites ', recipientInfo, { headers });
  };
  deleteFromFavorite = (recipientId: any): Observable<any> => {
    const token = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._HttpClient.delete(BaseUrl + `/api/favourites/${recipientId} `, { headers });
  };
}
