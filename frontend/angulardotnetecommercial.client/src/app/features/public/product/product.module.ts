import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../shared/shared.module';
import { Iproduct } from '../../../data/models/Iproduct';
import { PublicService } from '../services/public.service';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        RouterModule,
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
export class ProductModule {
}
