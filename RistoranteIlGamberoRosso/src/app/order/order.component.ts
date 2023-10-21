import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Imenu } from '../Imenu';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cart: Imenu[] = [];
  total: number = 0;
  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });

  constructor(private CS: CartService, private fb: FormBuilder){}

  clearCart() {
    window.alert('Your cart has been cleared');
    this.cart = this.CS.clearCart();
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.cart = this.CS.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
    this.total = this.CS.calcTotal();

  }
}
