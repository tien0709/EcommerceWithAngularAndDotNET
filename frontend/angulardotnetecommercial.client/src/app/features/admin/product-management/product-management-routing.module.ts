import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { AddProductManagementComponent } from './pages/add-product-management/add-product-management.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProductManagementComponent } from './pages/edit-product-management/edit-product-management.component';
import { IndexProductManagementComponent } from './pages/index-product-management/index-product-management.component';

const routes: Routes = [
    {
        path: '',
        component: ProductManagementComponent,
        children: [
            {
                path: '',
                component: IndexProductManagementComponent
            },
            {
                path: 'add',
                component: AddProductManagementComponent
            },
            {
                path: 'update/:id',
                component: EditProductManagementComponent
            }]
    }
];

@NgModule({
    declarations: [],
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
  exports: [
        RouterModule
  ]
})
export class ProductManagementRoutingModule { }
