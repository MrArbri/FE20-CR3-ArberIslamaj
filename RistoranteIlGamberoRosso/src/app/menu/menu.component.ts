import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Imenu } from '../Imenu';
import { menu } from '../menu';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  menuArr: Imenu [] = menu
  cart: Imenu[] = [];
  total: number = 0;
  menu: Imenu = {} as Imenu;




  addToCart(products : Imenu){
    alert("Product added successfully.");
    this.CS.addToCart(products);
  }
  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });

  constructor(private CS: CartService, private fb: FormBuilder, private route: ActivatedRoute){}



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



