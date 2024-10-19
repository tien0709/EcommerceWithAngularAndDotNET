import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
    imports: [
        CommonModule,
        ComponentsModule
    ],
  declarations: [
    CartComponent
  ]
})
export class CartModule { }
