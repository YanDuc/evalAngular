import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditionComponent } from './products/product-edition/product-edition.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'product/productList', component: ProductListComponent },
  { path: 'product/edition/:productID', component: ProductEditionComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'product/detail/:productID', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
