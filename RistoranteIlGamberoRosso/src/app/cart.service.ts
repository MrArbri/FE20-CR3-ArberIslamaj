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

  calcTenPercentOfTotal(): number {
    return this.calcTotal() * 0.1;
  }

  calc15PercentDiscount(): number {
    return this.calcTotal() * 0.15;
  }

  discountTotal(): number {
    return this.calcTotal() - this.calc15PercentDiscount();
  }

  clearCart(){
    this.cart = [];
    return this.cart;
  }

}
