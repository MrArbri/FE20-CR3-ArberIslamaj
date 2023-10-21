import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},{
  path: "product/:id", component: DetailsComponent
},{
  path: "cart", component: OrderComponent
},{
  path: "menu", component: MenuComponent
},{
  path: "about-us", component: AboutUsComponent
},{
  path: "**", redirectTo: ""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
