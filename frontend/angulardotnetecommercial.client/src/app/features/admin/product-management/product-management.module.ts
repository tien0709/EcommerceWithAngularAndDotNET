import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductManagementComponent } from './pages/add-product-management/add-product-management.component';
import { EditProductManagementComponent } from './pages/edit-product-management/edit-product-management.component';
import { ProductRoutingModule } from '../../public/product/product-routing.module';



@NgModule({
    declarations: [
        EditProductManagementComponent,
        AddProductManagementComponent
    ],//sử dụng trong nội bộ module
  imports: [
      CommonModule,
      ProductRoutingModule
    ],
    exports: [
        EditProductManagementComponent,
        AddProductManagementComponent
    ]//sử dụng trong module khác
})
export class ProductManagementModule { }
