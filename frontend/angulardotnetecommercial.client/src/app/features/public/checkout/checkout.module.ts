import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
  declarations: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }
