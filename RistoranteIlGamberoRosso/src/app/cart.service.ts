import { Injectable } from '@angular/core';
import { Imenu } from './Imenu';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Imenu[] = [];

  constructor() { }

  addToCart(obj: Imenu){
    this.cart.push(obj);
  }

  getCart(){
    return this.cart;
  }

  calcTotal(){
    let total: number = 0;
    this.cart.forEach((val) => {
      total += val.price ;
    })
    return total
  }

  clearCart(){
    this.cart = [];
    return this.cart;
  }

}
