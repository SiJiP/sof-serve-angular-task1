import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  
  getList() {
    return  ['KGZ', 'USD', 'EUR', 'UAH'];
  }
}
