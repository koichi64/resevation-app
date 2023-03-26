import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product?: {
    coverImage: string;
    name: string;
    price: number;
    description: string;
    heading1: string;
    heading2: string;
    heading3: string;
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      let productId = params.get('productId');
      console.log(productId);
      if (productId) {
        this.product = products[parseInt(productId)];
        console.log(this.product);
      }
    });
  }
}
