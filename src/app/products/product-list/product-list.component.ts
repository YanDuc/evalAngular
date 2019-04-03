import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[];

  constructor(
    private productSrv: ProductService
  ) { }

  ngOnInit() {
    this.productList = this.productSrv.products;
  }

  updateProduct(event){
    console.log("on est ici : ", event)
  }

}
