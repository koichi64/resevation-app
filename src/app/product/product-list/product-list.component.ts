import { Component } from '@angular/core';

import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products;

  constructor() {
    this.products = products;
  }
}
