import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  articles: Product[];
  total:number = 0;
  empty:boolean = true;

  constructor(
    private productSrv: ProductService
  ) { }

  ngOnInit() {
    this.articles = this.productSrv.productsInCart;
    this.calculTotal();
    this.isEmpty();
  }

  calculTotal(){
    for(let article of this.articles){
      this.total += article.prix;
    }
  }

  isEmpty(){
    if(this.articles.length > 0){
      this.empty = false;
    }
  }
}
