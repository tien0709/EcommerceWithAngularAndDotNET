import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductManagementComponent } from './pages/add-product-management/add-product-management.component';
import { EditProductManagementComponent } from './pages/edit-product-management/edit-product-management.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductManagementComponent } from './product-management.component';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { IndexProductManagementComponent } from './pages/index-product-management/index-product-management.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        ProductManagementComponent,
        EditProductManagementComponent,
        AddProductManagementComponent,
        IndexProductManagementComponent
    ],//sử dụng trong nội bộ module
    imports: [
        FormsModule,
        ProductManagementRoutingModule,
        CommonModule
    ],
    exports: [
        ProductManagementComponent
    ]//sử dụng trong module khác
})
export class ProductManagementModule { }
