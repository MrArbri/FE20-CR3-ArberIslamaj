import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { Imenu } from '../Imenu';
import { menu } from '../menu';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  menu: Imenu = {} as Imenu;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService){}

  addToCart(){
    alert("Product added successfully.");
    this.CS.addToCart(this.menu);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.menu = menu[this.id];
    })
  }
}
