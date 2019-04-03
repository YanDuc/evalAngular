import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edition',
  templateUrl: './product-edition.component.html',
  styleUrls: ['./product-edition.component.css']
})
export class ProductEditionComponent implements OnInit {

  productForm: FormGroup;
  productID: number;
  product: Product;
  @Output() onSaveProduct: EventEmitter<Product> = new EventEmitter();
  errorMessage = [];

  constructor(
    private route: ActivatedRoute,
    private productSrv: ProductService,
    private fb: FormBuilder,
    private routeur: Router
  ) { 
    this.productID = this.route.snapshot.params.productID;
    this.product = this.productSrv.getProduct(this.productID);
  }

  ngOnInit() {
    console.log('please',this.product)
    this.initForm();
    if(this.product){
      this.hydrateForm(this.product);
    }
  }

  initForm(): any {
    this.productForm = this.fb.group({
      photo: ['', [Validators.required, Validators.minLength(2)]],
      titre: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      prix: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  hydrateForm(product){
    this.productForm.patchValue(this.product);
  }

  saveProduct(){
    if(this.productForm.get('photo').invalid){
      this.errorMessage.push('pas de photo');
    }
    if(this.productForm.get('titre').invalid){
      this.errorMessage.push('pas de titre ??');
    }
    if(this.productForm.get('description').invalid){
      this.errorMessage.push('zero description !!');
    }
    if(this.productForm.get('prix').invalid){
      this.errorMessage.push('et le prix');
    }
    setTimeout(() => {
      this.errorMessage = [];
    }, 2000);
    if(this.errorMessage.length == 0){
      let { value } = this.productForm;
      this.productSrv.updateById(this.productID, value)
      this.routeur.navigate(['product/productList']);
    } 
  }

}
