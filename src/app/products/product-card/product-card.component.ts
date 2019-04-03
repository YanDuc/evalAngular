import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  constructor(
    private route: Router,
    private productSrv: ProductService
  ) { }

  ngOnInit() {
    
  }

  updateMe(productID){
    this.route.navigate(['/product/edition', productID]);
  }

  addToCart(product, nbarticles){
    this.productSrv.addToCart(product, nbarticles);
  }

  voirProduit(product){
    this.route.navigate(['/product/detail', product.id]);
  }

  delete(productID){
    this.productSrv.deleteById(productID);
  }
}
