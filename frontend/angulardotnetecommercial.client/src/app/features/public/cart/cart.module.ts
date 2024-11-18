import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        SharedModule
    ],
  declarations: [
    CartComponent
  ]
})
export class CartModule { }
