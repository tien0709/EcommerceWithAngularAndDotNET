import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentsModule
    ],
    declarations: [
    ProductComponent,
   // DetailProductComponent
    ],
    exports: [
        ProductComponent
    ]
})
export class ProductModule { }
