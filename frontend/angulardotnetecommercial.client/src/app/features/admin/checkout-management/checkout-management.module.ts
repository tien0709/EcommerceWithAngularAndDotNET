import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutManagementRoutingModule } from './checkout-management-routing.module';
import { IndexCheckoutManagementComponent } from './index-checkout-management/index-checkout-management.component';
import { CheckoutManagementComponent } from './checkout-management.component';



@NgModule({
  declarations: [
    CheckoutManagementComponent,
    IndexCheckoutManagementComponent
  ],
    imports: [
    CheckoutManagementRoutingModule,
    CommonModule
  ]
})
export class CheckoutManagementModule { }
