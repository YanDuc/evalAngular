import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-cart-article',
  templateUrl: './cart-article.component.html',
  styleUrls: ['./cart-article.component.css']
})
export class CartArticleComponent implements OnInit {
  
  @Input() article: Product;

  constructor(
    private productSrv: ProductService
  ) { }

  ngOnInit() {

  }

  deleteToCart(articleID){
    this.productSrv.deleteCartById(articleID);
  }
}
