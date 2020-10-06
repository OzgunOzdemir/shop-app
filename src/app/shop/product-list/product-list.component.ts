import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = []
  selectedProduct: Product = null

  constructor(private cart: Cart, private router: Router) { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');
  }

  displayDetails(product: Product) {
    this.selectedProduct = product;
  }

  hideDetails() {
    this.selectedProduct = null;
  }

}
