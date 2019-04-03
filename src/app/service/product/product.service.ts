import { Injectable } from '@angular/core';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productsInCart: Product[] = [];
  
  products: Product[] = [
    {
      id:1,
      photo:'https://pmcdn.priceminister.com/photo/pyramide-version-luxe-jeux-de-societe-868913381_L.jpg',
      titre:'titre1',
      description:'description1',
      prix:5,
      quantite:0
    },
    {
      id:2,
      photo:'https://pmcdn.priceminister.com/photo/Motus-Druon-Jeux-de-societe-887142059_L.jpg',
      titre:'titre2',
      description:'description2',
      prix:5,
      quantite:0
    },
    {
      id:3,
      photo:'http://www.dvfstore.com/55683-thickbox_default/la-roue-de-la-fortune.jpg',
      titre:'titre3',
      description:'description3',
      prix:5,
      quantite:0
    },
    {
      id:4,
      photo:'https://images-eu.ssl-images-amazon.com/images/I/51auXnXfnXL._SX300_QL70_.jpg',
      titre:'titre4',
      description:'description4',
      prix:5,
      quantite:0
    },
  ]

  constructor(

  ) { }

  getProduct(productID){
    const indexProduct = this.products.findIndex(({ id }) => id == productID);
    if (indexProduct !== -1) {
      return this.products[indexProduct];
    }

    if (indexProduct == -1) {
      console.error('Account to delete not found');
    }
  }

  updateById(productId, newProduct: Product) {
    const indexProduct = this.products.findIndex(({ id }) => id == productId);

    if (indexProduct !== -1) {
      this.products[indexProduct] = { 
        ...this.products[indexProduct],
        photo: newProduct.photo,
        titre: newProduct.titre,
        description: newProduct.description,
        prix: newProduct.prix,
      };
    }
  }

  deleteById(productId) {
    const indexProduct = this.products.findIndex(({ id }) => id == productId);
    if (indexProduct !== -1) {
      this.products.splice(indexProduct, 1);
    }

    if (indexProduct == -1) {
      console.error('User to delete not found');
    }
  }

  deleteCartById(productId) {
    const indexProduct = this.productsInCart.findIndex(({ id }) => id == productId);
    if (indexProduct !== -1) {
      this.productsInCart.splice(indexProduct, 1);
    }

    if (indexProduct == -1) {
      console.error('GNNNEEE');
    }
  }

  addToCart(product:Product, nbarticles:number){
    const indexProduct = this.productsInCart.findIndex(({ id }) => id == product.id);
    
    if (indexProduct !== -1) {
      product.quantite += nbarticles;
      this.productsInCart[indexProduct] = { 
        ...this.productsInCart[indexProduct],
        quantite: product.quantite,
        prix: product.prix * product.quantite,
      };
    } else {
      product.quantite = nbarticles;
      product.prix = product.prix * nbarticles;
      this.productsInCart.push(product);
    }
  }

  createProduct(product){
    let higherId = 0;
    for(let product of this.products){
      if(product.id > higherId){
        higherId = product.id;
      }
    }
    product.id = higherId +1;
    product.quantite = 0;
    this.products.push(product);
  }
}
