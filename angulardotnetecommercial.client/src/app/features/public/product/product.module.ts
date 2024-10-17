import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';



@NgModule({
  declarations: [
    ProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
