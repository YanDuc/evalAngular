import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productID: number;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productSrv: ProductService,
    private routeur: Router
  ) { 
    this.productID = this.route.snapshot.params.productID;
    this.product = this.productSrv.getProduct(this.productID);
  }

  ngOnInit() {
    
  }

  addToCart(){
    this.productSrv.addToCart(this.product, 1)
  }
}
