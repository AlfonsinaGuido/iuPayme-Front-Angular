import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { History } from 'src/app/models/history.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://fakeapi-iupayme.onrender.com'

  constructor(private http: HttpClient) { }


  // getAll() {
  //   return this.http.get<Account[]>(`${this.url}/cuenta`);
  // }

  // getAccount(id: string) {
  //   return this.http.get<Account>(`${this.url}/cuenta/${id}`)
  // }

  getAllHistory() {
    return this.http.get<History[]>(`${this.url}/transactions`);
  }

  // getAllCards() {
  //   return this.http.get<Card[]>(`${this.url}/cards`);
  // }
  // getOneCard(id: string) {
  //   return this.http.get<Card>(`${this.url}/cards/${id}`)
  // }
}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Account } from '../models/account.model';
// import { Transaction } from '../models/transactions.model';
// import { Card } from '../models/cards.model';