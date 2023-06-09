import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  // {
  // path: 'products',
  // component: ProductComponent,
  // children: [
  //   { path: '', component: ProductListComponent },
  //   { path: 'detail', component: ProductDetailComponent },
  // ],
  // },
  { path: '', component: ProductListComponent },
  { path: ':productId', component: ProductDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
